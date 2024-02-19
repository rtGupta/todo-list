# NodeJS/Express Todo App
Create a simple Nodejs/Express REST API for a simple to-do app. 

## User Requirements
1. As a developer, I should be able to fetch all existing to-do items using Todo Resource.
2. As a developer, I should be able to add a to-do item using Todo Resource.
3. As a developer, I should be able to update a to-do item using Todo Resource.
4. As a developer, I should be able to delete a to-do item using Todo Resource.

## Technical Requirements
1. The goal of this assignment is to learn about Nodejs and REST API.
2. Use the express framework for developing the endpoints.
3. Use MongoDB for the persistence layer.
4. A todo object has id, title, description, createdDate, & lastModifiedDate properties.

# Run the app
1. Clone the project repository using either HTTPs or SSH: `https://github.com/neu-mis-info6150-spring-2022/assignment-6-rtGupta.git`

2. Install dependencies by running the command `npm install` in the project's root directory.

3. Run the command `npm run start` to start the server at the specified port.

# Todos API

APIs available in this service.

```
// Retrieve all todos.
GET /todos

// Create a new todo.
POST /todos

// Retrieve a single todo by id.
GET /todos/:id

// Update a single todo by id.
PUT /todos/:id

// Delete a single todo by id.
DELETE /todos/:id
```