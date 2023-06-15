# Book Search Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Book Search Engine is a web application that allows users to search for books using keywords. It utilizes the Google Books API to fetch book data and provides a user-friendly interface for searching and saving books. The application is built with a React frontend, GraphQL API, and MongoDB database. Users can create an account, search for books, save their favorite books, and remove saved books from their collection.

This project was developed as part of a coding bootcamp assignment to practice building a full-stack web application using modern technologies. By completing this project, I gained practical experience with React, GraphQL, Apollo Client, and MongoDB. It allowed me to strengthen my skills in frontend development, backend development, and database management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

- User authentication: Users can sign up, log in, and log out to manage their own book collections.
- Book search: Users can search for books by entering keywords in the search bar.
- Book saving: Users can save their favorite books to their collection for future reference.
- Book removal: Users can remove books from their saved collection when they no longer want them.

## Installation

To run the Book Search Engine locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the repository in your terminal.
3. Install the required dependencies by running the command `npm install`.
4. Create a `.env` file in the root directory with the following environment variables:

  MONGODB_URI=your MongoDB connection string,
  SECRET=your session secret

5. Run the command `npm start` to start the application.

## Usage

To use the Book Search Engine, open your browser and navigate to `http://localhost:3000`. You will be presented with the homepage where you can sign up or log in to access the book search and save features. Once logged in, you can enter keywords in the search bar to search for books. The search results will be displayed, and you can click on the "Save" button to save a book to your collection. To view your saved books, navigate to the "Saved" page. From there, you can remove books from your collection by clicking on the "Delete" button.

## Technologies Used

- React
- GraphQL
- Apollo Client
- MongoDB
- Node.js
- Express.js
- bcrypt
- JSON Web Tokens (JWT)

## Contributing

Contributions to the Book Search Engine are welcome! To contribute, please follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone the repository to your local machine.
3. Create a branch with your proposed changes.
4. Commit your changes to the new branch.
5. Push your changes to your forked repository.
6. Submit a pull request to the main repository with a description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Links

- [Repository](https://github.com/seantamturk/Book-Search-Engine)
- [Live Demo](https://whispering-eyrie-57776.herokuapp.com/)
- [Linkedin](https://www.linkedin.com/in/sean-tamturk-8253b722a/)
