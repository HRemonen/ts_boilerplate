import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.get('/api/kliks', (_req, res) => {
  console.log('klik request made')
  const result = ['klik']
  for (let i = 1; i < Math.random() * 4; i++) {
    result.push('klik')
  }
  res.send(result.join(' '))
})

app.use('/api', (_, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const DIST_PATH = path.resolve(__dirname, '../../build')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (_req, res) => res.sendFile(INDEX_PATH))
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
