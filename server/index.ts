import "reflect-metadata";
import { Container } from "typedi";
import { BooksController } from "./controllers/books-controller";
import { createExpressServer, useContainer } from "routing-controllers";

const PORT = process.env.PORT ?? 3000;

useContainer(Container);

const app = createExpressServer({
  cors: true,
  controllers: [BooksController],
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
