# Backend Project README

## Description

This project is a backend application developed using Express.js and Prisma ORM. The application provides API endpoints to manage TODO operations.

## Environment Variables

Before running the project, ensure that the following environment variables are set in a `.env` file:

```plaintext
DATABASE_URL="file:./dev.db"
```

## Installing Dependencies

To install the project dependencies, run the following command:

```bash
cd .\backend\
npm install
```

## DB Migrate

### Running Migrate Command

To initialize the database and create the necessary tables, use the following command:

```bash
npm run migrate:deploy
```

## Test

### Test Command

To seed the database with initial data, use the following command:

```bash
npm test
```

## Project Run

### Running Start Command

To start the project, use the following command:

```bash
npm start
```

## Usage Examples

### Create a new TODO item
```plaintext
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Task","description":"Description","status":"PENDING"}' http://localhost:3000/api/todos
```

### List all TODO items

```plaintext
curl http://localhost:3000/api/todos
```

### Update a specific TODO item

```plaintext
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Task","status":"COMPLETED"}' http://localhost:3000/api/todos/1
```

### Get a specific TODO item

```plaintext
curl http://localhost:3000/api/todos/1
```

### Delete a specific TODO item

```plaintext
curl -X DELETE http://localhost:3000/api/todos/1
```