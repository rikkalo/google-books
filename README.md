# Homework for Red Kubes

## Project structure

- **model**: The package which contains sharable types between `client` and `server`.
- **client**: This is a front-end part, with components for searching a book by query and showing the result of a book search in a table with pagination.
- **server**: Here is the backend part

## Run with Docker

To start the project, it will be enough to execute the following command:

```bash

docker compose up

```

## Local Setup

First, you need to install all of the project dependencies:
```bash
yarn
```

After you need to build the **model** project:

```bash
yarn build:model
```

Now start up the server.

```bash
yarn run:server
```

The server should now be accessible over http on port 3000 at:

```
https://localhost:3000/
```

Then you need to start the client:

```bash
yarn run:client
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
