import express from 'express'

const boilerRouter = express.Router()

boilerRouter.get('/', async (_req, res) =>
  res.json({ message: 'Hello World!' })
)

export default boilerRouter
