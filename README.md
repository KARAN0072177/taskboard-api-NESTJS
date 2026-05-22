# TaskBoard API

A small NestJS project for learning backend structure, REST APIs, DTO validation, services, controllers, and modules.

## Tech Stack

- NestJS
- TypeScript
- class-validator
- class-transformer

## Features

- Create task
- Get all tasks
- Get task by ID
- Update task
- Delete task
- DTO validation
- Global validation pipe
- Clean NestJS module structure

## API Routes

| Method | Route | Description |
|---|---|---|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get one task |
| POST | /tasks | Create task |
| PATCH | /tasks/:id | Update task |
| DELETE | /tasks/:id | Delete task |

## Run Locally

```bash
npm install
npm run start:dev