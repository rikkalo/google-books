import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import type { GoogleBooksResponse } from '@redkubes-homework/model'

const api = axios.create({ baseURL: process.env.API_URL })

export interface BookHookOpts {
  page: number
  countPerPage: number
  query: string
}

export function useBooks({ page, countPerPage, query }: BookHookOpts): GoogleBooksResponse {
  const [response, setResponse] = useState<GoogleBooksResponse>({ items: [], totalItems: 0 })

  useEffect(() => {
    if (query.trim().length) {
      api
        .get('/books', { params: { page, maxNumber: countPerPage, query } })
        .then((result: AxiosResponse<GoogleBooksResponse>) => {
          setResponse(result.data)
        })
    }
  }, [page, countPerPage, query])

  return response
}
