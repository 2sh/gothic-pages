import express, { type ErrorRequestHandler } from 'express'
//@ts-ignore
import { walk } from '@root/walk'
import path from "path"
import fs from 'fs'
import { Server } from 'http'

import util from 'util'
import { exec as _exec } from 'child_process'
const exec = util.promisify(_exec)

import { PageConstruction, PageGenerator, PageInfo, PageInfoMain } from './tools'


const mode = process.argv.length > 2
  ? process.argv[2] : 'dev'

const pageOutput = mode == "build"
  ? 'build'
  : 'dev'

const app = express()
const server = new Server(app)

const port = 6001

app.use('/scripts', express.static('dev/scripts'))
app.use('/assets', express.static('src/client/assets'))


const protocol = 'https'
const host = '2sh.me'
const root = '/gothic'

const pages: PageInfo[] = []

async function processPage(pathname: string, dirent: any)
{
  if (!dirent.isFile() || !dirent.name.endsWith('.ts')) return

  const relPath = path.dirname(pathname).replace('src/server', '.')
  const name = path.basename(dirent.name, '.ts')

  const importPath = `${relPath}/${name}`

  try
  {
    const pageImport = await import(importPath)

    const { stdout, stderr } = await exec(
      `git log -1 --pretty="format:%ct" "${pathname}"`)

    const tsString = stdout.trim()
    const ts = parseInt(tsString + '000')

    const date = new Date(ts)


    const pageConstruction: PageConstruction = pageImport.default

    const alternatives: PageInfo[] = pageConstruction.anchors.map(a => {
      const end = (a.name == "index" ? '' : a.name)
      const dir = root + '/'
      return {
        protocol,
        host,
        path: dir + end,
        dir,
        end,
        url: `${protocol}://${host}${dir}${end}`,
        lastmod: date,
        ...a,
      }
    })

    for (const alt of alternatives)
    {
      const pageInfo: PageInfoMain = {
        ...alt,
        alternatives: alternatives.filter(a => a.name != alt.name)
      }
      pages.push(pageInfo)

      const page = pageConstruction.generator(pageInfo)

      const devPath = "/" + alt.name

      app.get(devPath, (req, res, next) =>
      {
        res.send(page)
      })

      const pageOutputPath = `${pageOutput}${devPath}`
      fs.writeFileSync(pageOutputPath, page)
      await exec(`touch -m -d ${date.toISOString()} "${pageOutputPath}"`)
    }
  }
  catch (error)
  {
    console.error(error)
    return
  }
}

async function importPages()
{
  const processes: Promise<void>[] = []
  await walk("./src/server/pages/",
    async (err: any, pathname: string, dirent: any) =>
  {
    processes.push(processPage(pathname, dirent))
  })
  await Promise.all(processes)

  pages.sort((a, b) => a.path.localeCompare(b.path))
  fs.writeFileSync(`${pageOutput}/sitemap.txt`, pages.map(p => p.url).join('\n'))
  fs.writeFileSync(`${pageOutput}/sitemap.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => `
  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod.toISOString()}</lastmod>
  </url>`).join('')}
</urlset>`)
  console.log("All web files built.")
}
importPages()

app.get('/', (_, res) => res.redirect("/index"))

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