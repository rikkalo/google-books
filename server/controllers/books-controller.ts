import type { Book } from "@redkubes-homework/model";
import { Inject, Service as Injectable } from "typedi";
import { GoogleBookService } from "../services/google-books-service";
import {
  Get,
  Controller,
  QueryParam,
  BadRequestError,
} from "routing-controllers";

@Injectable()
@Controller("/books")
export class BooksController {
  public constructor(
    @Inject() private readonly bookService: GoogleBookService
  ) {}

  @Get("/")
  public async getAllBooksByQuery(
    @QueryParam("query") query: string,
    @QueryParam("page") page: number,
    @QueryParam("maxNumber") maxNumber: number
  ): Promise<Book[]> {
    return this.bookService
      .getBooksWithName(query, {
        startIndex: page * maxNumber,
        maxResults: maxNumber,
      })
      .catch((err) => {
        throw new BadRequestError(err.message);
      });
  }
}
