import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
const port = Number(process.env.API_PORT ?? 3001)

app.use(cors())
app.use(express.json())

app.get('/api/health', async (_request, response) => {
  let database: 'connected' | 'disconnected' = 'disconnected'

  try {
    await prisma.$queryRaw`SELECT 1`
    database = 'connected'
  } catch {
    // The API remains useful while PostgreSQL is starting or not configured.
  }

  response.json({ status: 'ok', database })
})

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})