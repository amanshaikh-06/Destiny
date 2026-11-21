# Destiny

A hotel/travel listing website where users can browse, add, edit and delete property listings.

## Features

- View all listings
- View details of a single listing
- Add a new listing
- Edit an existing listing
- Delete a listing
- Form validation on the client side

## Tech Stack

- Node.js, Express 5
- MongoDB, Mongoose
- EJS, ejs-mate (layouts)
- method-override (PUT and DELETE from forms)
- Bootstrap, Font Awesome

## Getting Started

### Prerequisites

- Node.js v20.19 or higher
- MongoDB running locally on `mongodb://127.0.0.1:27017`

### Installation

```bash
git clone <your-repo-url>
cd destiny
npm install
```

### Load sample data (optional)

```bash
node init/index.js
```

### Run the app

```bash
node app.js
```

Open http://localhost:8080/listings in your browser.

## Routes

| Method | Route                | Description      |
| ------ | -------------------- | ---------------- |
| GET    | `/listings`          | All listings     |
| GET    | `/listings/new`      | New listing form |
| POST   | `/listings`          | Create a listing |
| GET    | `/listings/:id`      | Listing details  |
| GET    | `/listings/:id/edit` | Edit form        |
| PUT    | `/listings/:id`      | Update a listing |
| DELETE | `/listings/:id`      | Delete a listing |

## Project Structure

```
destiny/
├── app.js
├── models/       # Mongoose schemas
├── views/        # EJS templates (layouts, includes, listings)
├── public/       # CSS and JS files
└── init/         # Sample data and DB seeding script
```

## Future Plans

- Reviews and ratings
- User authentication
- Image upload
- Better error handling

## Author

Aman

[ current status : Under Development ]
