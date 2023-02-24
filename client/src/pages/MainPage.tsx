import { Flex, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import { BooksSearchForm } from '../components/BooksSearchForm'
import { BooksTable } from '../components/BooksTable'
import { useBooks } from '../hooks/useBooks'

const INITIAL_PAGE = 1
const ITEMS_PER_PAGE = 10

export function MainPage() {
  const [page, setPage] = useState(INITIAL_PAGE)
  const [query, setQuery] = useState('')
  const { items, totalItems } = useBooks({
    query,
    page: page - 1,
    countPerPage: ITEMS_PER_PAGE,
  })

  const onChangeQuery = (query: string) => {
    setPage(INITIAL_PAGE)
    setQuery(query)
  }

  return (
    <>
      <Flex p={6}>
        <BooksSearchForm value={query} onChange={onChangeQuery} />
      </Flex>
      <Divider />
      <Flex wrap='wrap'>
        <BooksTable
          page={page}
          books={items}
          totalRegisters={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          setPage={setPage}
        />
      </Flex>
    </>
  )
}
