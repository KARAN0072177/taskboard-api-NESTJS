# TaskBoard API UI

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

A full-stack task management application built with **NestJS**, **Vue.js**, **TypeScript**, and **MongoDB**.  
The project demonstrates how a modern frontend communicates with a structured backend API and stores data permanently in a local MongoDB database.

---

## Project Overview

**TaskBoard API UI** is a small but practical full-stack project created to understand the core concepts of backend and frontend integration.

The backend is built with **NestJS**, which provides a clean modular architecture for APIs.  
The frontend is built with **Vue.js**, which consumes the backend API using Axios.  
MongoDB is used as the database, and data can be viewed locally using **MongoDB Compass**.

This project is designed as a beginner-friendly but professional learning project for understanding how real-world full-stack applications are connected.

---

## Purpose of This Project

The main goal of this project is to learn how to build a clean full-stack application using modern technologies.

This project helps understand:

- How NestJS organizes backend code using modules, controllers, services, and DTOs
- How Vue.js communicates with backend APIs
- How to connect NestJS with MongoDB using Mongoose
- How to use environment variables with dotenv / Nest Config
- How to perform CRUD operations with a database
- How to manage frontend state with Vue Composition API
- How to handle local development using MongoDB Compass

---

## Tech Stack

### Frontend

- **Vue.js**
- **TypeScript**
- **Axios**
- **Vite**
- **CSS**

### Backend

- **NestJS**
- **TypeScript**
- **Mongoose**
- **MongoDB**
- **class-validator**
- **class-transformer**
- **@nestjs/config**

### Database

- **MongoDB Localhost**
- **MongoDB Compass**

### Development Tools

- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **Postman / Thunder Client**
- **VS Code**

---

## Features

- Create new tasks
- View all tasks
- Update task status
- Delete tasks
- Store tasks permanently in MongoDB
- View saved tasks in MongoDB Compass
- Form validation on backend using DTOs
- Clean API structure using NestJS
- Responsive and modern Vue UI
- Environment-based configuration using `.env`

---

## Task Status Types

Each task can have one of the following statuses:

```txt
TODO
IN_PROGRESS
DONE
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a single task by ID |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

---

## Example Task Document

```json
{
  "_id": "6a1052da7b37b785fc8e6127",
  "title": "Build Auth Module",
  "description": "create auth using vue and nest",
  "status": "TODO",
  "createdAt": "2026-05-22T12:58:02.323Z",
  "updatedAt": "2026-05-22T12:58:02.323Z",
  "__v": 0
}
```

---

## Environment Variables

Create a `.env` file in the backend project root.

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskboard_db
```

Also create a `.env.example` file for GitHub:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskboard_db
```

> The `.env` file should not be pushed to GitHub.

---

## Local MongoDB Setup

This project uses a local MongoDB database.

Open MongoDB Compass and connect using:

```txt
mongodb://localhost:27017
```

The database used in this project is:

```txt
taskboard_db
```

The collection used is:

```txt
tasks
```

---

## Run Backend

Go to the backend project:

```bash
cd taskboard-api
```

Install dependencies:

```bash
npm install
```

Start the NestJS server:

```bash
npm run start:dev
```

Backend will run on:

```txt
http://localhost:3000
```

---

## Run Frontend

Go to the frontend project:

```bash
cd taskboard-ui
```

Install dependencies:

```bash
npm install
```

Start the Vue development server:

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

## How the Project Works

The Vue frontend sends HTTP requests to the NestJS backend using Axios.

```txt
Vue Frontend → Axios Request → NestJS API → Mongoose → MongoDB
```

When a task is created from the UI, it is sent to the NestJS API.

NestJS validates the request data using DTOs and then stores the task in MongoDB through Mongoose.

When tasks are fetched, the backend reads them from MongoDB and sends them back to the Vue frontend.

---

## Core Concepts Learned

This project covers important full-stack development concepts.

### NestJS Concepts

- Modules
- Controllers
- Services
- DTOs
- ValidationPipe
- Dependency Injection
- Mongoose Integration
- REST API Design
- Environment Configuration

### Vue.js Concepts

- Composition API
- Reactive state using `ref`
- API calls using Axios
- Form handling
- Event handling
- Conditional rendering
- Dynamic list rendering

### MongoDB Concepts

- Local MongoDB connection
- Collections
- Documents
- ObjectId
- Timestamps
- CRUD operations

---

## Why This Project Matters

This is not just a basic task app.

It is a foundation for understanding how professional full-stack applications are structured.

The same architecture can later be expanded into:

- Authentication system
- User-specific tasks
- Role-based access control
- Admin dashboard
- File uploads
- Notifications
- SaaS-style task management system

---

## Future Improvements

Planned improvements:

- Add user authentication
- Add JWT login and register system
- Add protected task routes
- Add user-specific tasks
- Add task filters by status
- Add search functionality
- Add pagination
- Add Swagger API documentation
- Add Docker support
- Deploy frontend and backend

---

## Recommended Next Version

The next version of this project can be:

```txt
TaskBoard Pro
```

With:

- Auth module
- User model
- JWT tokens
- Protected APIs
- User-owned tasks
- Dashboard analytics
- Better error handling
- Deployment-ready configuration

---

## Author

**Karan**

GitHub: [@karan0072177](https://github.com/karan0072177)

---

## License

This project is open-source and available for learning and portfolio use.
