# 🌿 Botanical Babe CRUD App

Botanical Babe is a full-stack CRUD web application built with Express.js and MongoDB, designed to manage botanical-themed content (plants, products, or entries) with a clean, responsive UI. The app follows RESTful routing principles, uses Mongoose for data modeling, and is styled with Bootstrap alongside custom static CSS.

---
## Models Explanation


https://github.com/user-attachments/assets/673820ec-47b4-42f8-9326-17c3cacc1f71

## GET Explanation


https://github.com/user-attachments/assets/10c3578b-07b1-4b6c-bf1e-da6fdcd41700



## ✨ Features

- Full CRUD functionality (Create, Read, Update, Delete)
- RESTful routes for clean and predictable endpoints
- MongoDB database with Mongoose schemas and models
- Express.js server and routing
- Bootstrap for responsive layout and components
- Custom static CSS for branding and style
- Server-side rendering with templates (EJS)

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bootstrap
- Static CSS
- HTML templates (EJS)

## 📌 RESTFul Routes
🚦 RESTful Routes
- Action	HTTP Verb	Route	Description
- Index	GET	/plants	Show all plants
- New	GET	/plants/new	Form to create a new plant
- Create	POST	/plants	Add new plant to database
- Show	GET	/plants/:id	Show details for one plant
- Edit	GET	/plants/:id/edit	Form to edit a plant
- Update	PUT	/plants/:id	Update a plant
- Delete	DELETE	/plants/:id	Remove a plant

## 🚀 Future Improvements
- User authentication & authorization
- Image uploads with Cloudinary
- Search and filter functionality
- Flash messages for success/errors
- Deployment to Render or Railway

## 📁 Project Structure

```txt
botanical-babe/
│
├── models/ # Mongoose schemas
│ └── plant.js
│
│
├── public/ # Static assets
│ ├── css/
│ │ └── styles.css
│ └── images/
│
├── views/ # Template files (EJS)
│ ├── index.ejs
│ ├── show.ejs
│ ├── new.ejs
│ ├── edit.ejs
│ └── layout.ejs
│
├── index.js. / # Routes
├── package.json
└── README.md
```
