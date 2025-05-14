import { createServer } from 'vite'
import fs from 'fs'
import path from 'path'

async function render() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  const routes = [
    '/',
    '/about', 
    '/markdown', 
    '/dashboard/overview', 
    '/dashboard/settings',
  ]

  for (const route of routes) {
    const url = route === '/' ? '/' : route

    const templatePath = path.resolve(__dirname, '../../build/index.html')
    const template = fs.readFileSync(templatePath, 'utf-8')

    const appPath = path.resolve(__dirname, './entry-ssr.tsx')
    const { render } = await vite.ssrLoadModule(appPath)

    const html = await render(url)
    const finalHtml = template.replace('<!--app-->', html)

    const outDir = path.join(__dirname, '../../build', route === '/' ? '' : route)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), finalHtml)
  }

  await vite.close()
}

render()