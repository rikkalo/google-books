import 'reflect-metadata'
import dotenv from 'dotenv'
import { Container } from 'typedi'
import { BooksController } from './controllers/books-controller'
import { createExpressServer, useContainer } from 'routing-controllers'

dotenv.config()

const PORT = process.env.PORT ?? 3000

useContainer(Container)

const app = createExpressServer({
  cors: true,
  controllers: [BooksController],
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`)
})
