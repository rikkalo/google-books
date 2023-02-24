import { Image, Link, Button } from "@chakra-ui/react";
import { Table } from "react-chakra-pagination";
import type { Book } from "@redkubes-homework/model";
import type { CellContext } from "@tanstack/table-core";

export type BooksTableProps = {
  books: Book[];
  page: number;
  itemsPerPage: number;
  totalRegisters: number;
  setPage: (page: number) => void;
};

export function BooksTable({
  books,
  page,
  setPage,
  itemsPerPage,
  totalRegisters,
}: BooksTableProps) {
  // Just because of the nice library choice ^_^
  const tableData = Array.from({ length: (page - 1) * itemsPerPage })
    .fill({})
    .concat(
      books.map(({ volumeInfo, saleInfo }: Book) => ({
        thumbnail: volumeInfo.imageLinks?.smallThumbnail,
        title: volumeInfo.title,
        author: volumeInfo.authors?.join(", "),
        language: volumeInfo.language,
        buyLink: saleInfo.buyLink,
      }))
    );

  const tableColumns = [
    {
      Header: "Thumbnail",
      accessorKey: "thumbnail" as const,
      cell: (props: CellContext<any, string>) => (
        <Image src={props.cell.getValue()} alt={props.cell.getValue()} />
      ),
    },
    {
      Header: "Title",
      accessorKey: "title" as const,
    },
    {
      Header: "Author",
      accessorKey: "author" as const,
    },
    {
      Header: "Language",
      accessorKey: "language" as const,
    },
    {
      Header: "Link",
      accessorKey: "buyLink" as const,
      cell: (props: CellContext<any, string>) => (
        <>
          {props.cell.getValue() ? (
            <Button colorScheme="purple">
              <Link href={props.cell.getValue()} isExternal>
                Buy
              </Link>
            </Button>
          ) : (
            "No link"
          )}
        </>
      ),
    },
  ];
  return (
    <>
      <Table
        colorScheme="purple"
        emptyData={{ text: "No books" }}
        totalRegisters={totalRegisters}
        itemsPerPage={itemsPerPage}
        page={page}
        onPageChange={setPage}
        columns={tableColumns}
        data={tableData}
      />
    </>
  );
}
