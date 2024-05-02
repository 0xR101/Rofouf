// - GET /api/v1/books

// check id middleware
exports.checkId = (req, res, next, val) => {
  //   if (req.params.id * 1 > books.length || req.params.id * 1 < 0) {
  //     return res.status(404).json({
  //       status: "fail",
  //       message: "Invalid ID",
  //     });
  //   }
  console.log(`Book id is: ${val}`);
  next();
};

// All book CRUD operations handlers
exports.getAllBooks = (req, res) => {
  console.log(req.requestTime);
  //   res.status(200).json({
  //     status: "success",
  //     results: books.length, // this only will be added whenver we are sending an array of data not a single object
  //     data: {
  //       books,
  //     },
  //   });

  res.status(200).send("Hello World");
};

// - GET using a variable route parameter
exports.getBook = (req, res) => {
  //   const id = req.params.id * 1; // convert the string id to a number
  //   const book = books.find((el) => el.id === id);

  //   // 404 status code is used when the requested resource is not found
  //   if (!book) {
  //     return res.status(404).json({
  //       status: "fail",
  //       message: "Invalid ID ",
  //     });
  //   }

  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
};

// - PATCH /api/v1/books/id
exports.updateBook = (req, res) => {
  // here we are missing the database logic to update the book in the database

  res.status(200).json({
    status: "success",
    data: {
      book: "Updated book",
    },
  });
};

// - POST /api/v1/books
exports.createNewBook = (req, res) => {
  const newId = books[books.length - 1].id + 1;
  const newBook = Object.assign({ id: newId }, req.body);

  books.push(newBook);
  // here we are missing the database logic to save the new book in the database

  // 201 status code is used when a new resource is created
  res.status(201).json({
    status: "success",
    data: {
      book: newBook,
    },
  });
};

// - DELETE /api/v1/books/id
exports.deleteBook = (req, res) => {
  // here we are missing the database logic to delete the book from the database

  res.status(204).json({
    status: "success",
    data: null,
  });
};
