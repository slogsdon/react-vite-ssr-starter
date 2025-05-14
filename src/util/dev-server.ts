import fs from 'fs'
import path from 'path'
import express from 'express'
import { createServer as createViteServer } from 'vite'

async function startDevServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl

      let template = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/src/util/entry-ssr.tsx')
      const appHtml = await render(url)

      const html = template.replace('<!--app-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(5173, () => {
    console.log('Dev SSR server running at http://localhost:5173')
  })
}

startDevServer()