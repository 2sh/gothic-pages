import express, { type ErrorRequestHandler } from 'express'
//@ts-ignore
import { walk } from '@root/walk'
import path from "path"
import fs from 'fs'
import { PageGenerator } from './tools'


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
    const pageGenerator: PageGenerator = pageImport.default
    const page = pageGenerator({
      protocol: 'https',
      host: '2sh.me',
      path: urlPath
    })
    app.get(urlPath, (req, res, next) =>
    {
      res.send(page)
    })

    fs.writeFileSync(`${pageOutput}${urlPath}`, page);
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
  await walk("./src/server/pages/", findPages);
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