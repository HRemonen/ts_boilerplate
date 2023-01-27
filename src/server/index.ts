import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import boilerRouter from './routes/boiler.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/health', boilerRouter)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename)
  const DIST_PATH = path.resolve(dirname, '../../build')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (_req, res) => res.sendFile(INDEX_PATH))
}
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
