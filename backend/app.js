const express = require("express");
const app = express();
const morgan = require("morgan");

// importing routes
const bookRouter = require("./routes/bookRoutes");

// 1) MIDDLEWARES

// this is a 3rd party middleware that will log the request to the console in a dev format
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
/** this is a middleware that will parse the incoming request body into json format
    because if we did not use that the body of the request will be undefined
    this middleware will add a body property to the request object
    so that we will be apple to handle the incoming data in a post request for example, req.body
**/

//  meddleware to get the date of the request
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/**  example a standerd API structure
    books array will be fetched from the database
    resources that we will have: books, users, reviews, etc.
    versions are used because we do not break the api when we make changes
    You can test the api using postman VERY IMPORTANT
    for each resource we need to create appropriate routes for each of the CRUD operations
    all APIs must follow the RESTful conventions 
    GET /api/v1/books - get all books
    GET /api/v1/books/id - get a single book by id
    POST /api/v1/books - create a new book
    PATCH /api/v1/books/id - update a book by id
    DELETE /api/v1/books/id - delete a book by id
*/

// TODO: First step in building the APIs: get all the resources from the database before responding to the requests
// const books =

// this is for learning purposes only
// {
//   // this is a block for all books CRUD operations, and it will be replaced by the database logic later, this is just a simple example

//   // 1) GET /api/v1/books
//   app.get("/api/v1/books", (req, res) => {
//     res.status(200).json({
//       status: "success",
//       results: books.length, // this only will be added whenver we are sending an array of data not a single object
//       data: {
//         books,
//       },
//     });
//   });

//   //simple example for variable route parameter
//   // for optional parameters we can use query parameters  /api/v1/books/:id/:name?  ? means optional
//   // 2) GET using a variable route parameter
//   app.get("/api/v1/books/:id", (req, res) => {
//     const id = req.params.id * 1; // convert the string id to a number
//     const book = books.find((el) => el.id === id);

//     // 404 status code is used when the requested resource is not found
//     if (!book) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Invalid ID ",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       data: {
//         book,
//       },
//     });
//   });

//   // simple example for patch request
//   // 3) PATCH /api/v1/books/id
//   app.patch("/api/v1/books/:id", (req, res) => {
//     const id = req.params.id * 1;
//     const book = books.find((el) => el.id === id);

//     if (!book) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Invalid ID ",
//       });
//     }

//     // here we are missing the database logic to update the book in the database

//     res.status(200).json({
//       status: "success",
//       data: {
//         book: "Updated book",
//       },
//     });
//   });

//   // simple example for post request
//   // 4) POST /api/v1/books
//   app.post("/api/v1/books", (req, res) => {
//     const newId = books[books.length - 1].id + 1;
//     const newBook = Object.assign({ id: newId }, req.body);

//     books.push(newBook);
//     // here we are missing the database logic to save the new book in the database

//     // 201 status code is used when a new resource is created
//     res.status(201).json({
//       status: "success",
//       data: {
//         book: newBook,
//       },
//     });
//   });

//   // simple example for delete request
//   // 5) DELETE /api/v1/books/id
//   app.delete("/api/v1/books/:id", (req, res) => {
//     const id = req.params.id * 1;
//     const book = books.find((el) => el.id === id);

//     if (!book) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Invalid ID ",
//       });
//     }

//     // here we are missing the database logic to delete the book from the database

//     res.status(204).json({
//       status: "success",
//       data: null,
//     });
//   });
// }

// Seperate all the handlers from the routes
// All book CRUD operations handlers

// 2) HANDLERS

// Now we will add the handlers to the routes
// 3) ROUTES

app.use("/api/v1/books", bookRouter);
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/", (req, res) => {
  res.send("This is a post request");
});

// 4) START THE SERVER

module.exports = app;
