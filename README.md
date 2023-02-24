# Homework for Redkubes

## Project structure

- **model**: Since the project is a mono-repository, types are stored here that can be shared throughout the project.
- **client**: This is a front-end part, with components for searching a book by query and showing the result of a book search in a table with pagination.
- **server**: Here is the backend part

## Run with Docker

To start the project, it will be enough to execute the following command:

```bash

docker compose up

```

## Local Setup

> Note: run **yarn install** at the root of the project

First you need to build the types into the **model**:

```bash
cd model

yarn install

yarn run build
```

Now start up the server.

```bash
cd server

yarn install

yarn run dev
```

The server should now be accessible over http on port 3000 at:

```
https://localhost:3000/
```

Then you need to start the client:

```bash
cd server

yarn install

yarn run dev
```

The client should now be accessible over http on port 5137 at:

```bash
https://localhost::5137/
```

## API

`GET /books/` - an endpoint that fetches books from using Google API. It gets the parameters for book search and pagination and returns the list of books on the current page.

Query params:

- `query`: search for volumes that contain this text string.
- `page`: Current page
- `maxNumber`: Maximum number of books per page
