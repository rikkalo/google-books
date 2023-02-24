import axios from "axios";
import { Service as Injectable } from "typedi";
import type { Book } from "@redkubes-homework/model";

export type PaginationOpts = {
  startIndex?: number;
  maxResults?: number;
};

@Injectable()
export class GoogleBookService {
  private readonly googleApi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
  });

  public async getBooksWithName(
    query: string,
    pagination: PaginationOpts
  ): Promise<Book[]> {
    return this.googleApi
      .get("/volumes", {
        params: {
          q: query,
          startIndex: pagination.startIndex,
          maxResults: pagination.maxResults,
        },
      })
      .then((x) => Object.assign({ items: [] }, x.data));
  }
}
