import express, { type ErrorRequestHandler } from 'express'
//@ts-ignore
import { walk } from '@root/walk'
import path from "path"
import fs from 'fs'

import util from 'util'
import { exec as _exec } from 'child_process'
const exec = util.promisify(_exec)

import { PageGenerator, PageInfo } from './tools'


const mode = process.argv.length > 2
  ? process.argv[2] : 'dev'

const pageOutput = mode == "build"
  ? 'build'
  : 'dev'

const app = express()
const server = require('http').Server(app)

const port = 6001

app.use('/scripts', express.static('dev/scripts'))
app.use('/assets', express.static('src/client/assets'))


const protocol = 'https'
const host = '2sh.me'
const root = '/gothic'

const pages: PageInfo[] = []

async function findPages(err: any, pathname: string, dirent: any)
{
  if (!dirent.isFile() || !dirent.name.endsWith('.ts')) return

  const relPath = path.dirname(pathname).replace('src/server', '.')
  const name = path.basename(dirent.name, '.ts')

  const importPath = `${relPath}/${name}`
  const urlPath = `/${name}.html`

  try
  {
    const pageImport = await import(importPath)

    const { stdout, stderr } = await exec(
      `git log -1 --pretty="format:%ct" "${pathname}"`)

    const tsString = stdout.trim()
    const ts = parseInt(tsString + '000')

    const date = new Date(ts)

    const pageInfo = {
      protocol,
      host,
      path: root + (urlPath == "/index.html" ? '/' : urlPath),
      lastmod: date,
    }

    pages.push(pageInfo)

    const pageGenerator: PageGenerator = pageImport.default
    const page = pageGenerator(pageInfo)
    app.get(urlPath, (req, res, next) =>
    {
      res.send(page)
    })

    const pageOutputPath = `${pageOutput}${urlPath}`
    fs.writeFileSync(pageOutputPath, page)
    await exec(`touch -m -d ${date.toISOString()} "${pageOutputPath}"`)
  }
  catch (error)
  {
    console.error(error)
    return
  }

  console.log(`Importing ${importPath} as ${urlPath}`)
}



async function importPages()
{
  await walk("./src/server/pages/", findPages)
  pages.sort((a, b) => a.path.localeCompare(b.path))
  fs.writeFileSync(`${pageOutput}/sitemap.txt`, pages.map(p =>
    `${p.protocol}://${p.host}${p.path}`).join('\n'))
  fs.writeFileSync(`${pageOutput}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => `
  <url>
    <loc>${p.protocol}://${p.host}${p.path}</loc>
    <lastmod>${p.lastmod.toISOString()}</lastmod>
  </url>`).join('')}
</urlset>`)
}
importPages()

app.get('/', (_, res) => res.redirect("/index.html"))

const errorRequestHandler: ErrorRequestHandler = (err, req, res, _next) =>
{
  console.error(req.url, req.params, err)
  res.status(500).end()
}

app.use(errorRequestHandler)

if (mode == 'dev')
{
  server.listen(port, "0.0.0.0")
  console.log(`Running on port ${port}`)
}