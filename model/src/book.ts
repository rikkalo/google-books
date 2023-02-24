export type BookSaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  buyLink?: string;
};

export type BookVolumeInfo = {
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: string;
  pageCount: number;
  categories: string[];
  maturityRating: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
};

export type BookAccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: { isAvailable: boolean };
  pdf: { isAvailable: boolean };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

export type Book = {
  kind: string;
  id: string;
  selfLink: string;
  volumeInfo: BookVolumeInfo;
  saleInfo: BookSaleInfo;
  accessInfo: BookAccessInfo;
};

export type GoogleBooksResponse = {
  totalItems: number;
  items: Book[];
};
