# Myntra Backend API

Backend server for the Myntra Clone application. This Express.js server provides REST API endpoints for managing items data.

## Features

- REST API for items management
- CORS enabled for frontend integration
- File-based data storage using JSON
- Express.js server running on port 8082

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v10.0 or higher)
- **npm** (Node Package Manager)

## Installation

1. Navigate to the backend directory:
```bash
cd /home/ankit.gupta/reactjs/Project/Myntra/myntra-backend
```

2. Install dependencies:
```bash
npm install
```

This will install the following packages:
- `express` - Web framework for Node.js
- `body-parser` - Middleware to parse request bodies

## Running the Server

Start the development server:

```bash
npm start
```

The server will start on **http://localhost:8082**

You should see no errors if the server starts successfully.

## API Endpoints

### Get All Items
- **URL:** `/items`
- **Method:** `GET`
- **Description:** Fetches all items from the database
- **Response:** JSON array of items with a 2-second delay (simulating network latency)

**Example:**
```bash
curl http://localhost:8082/items
```

### Get Single Item
- **URL:** `/items/:id`
- **Method:** `GET`
- **Description:** Fetch a single item by ID
- **Parameters:** `id` - Item ID

**Example:**
```bash
curl http://localhost:8082/items/001
```

### Create New Item
- **URL:** `/items`
- **Method:** `POST`
- **Description:** Add a new item to the database
- **Body:** JSON object with item details

**Example:**
```bash
curl -X POST http://localhost:8082/items \
  -H "Content-Type: application/json" \
  -d '{"name":"New Item","price":999}'
```

## Project Structure

```
myntra-backend/
├── app.js              # Main server file
├── data/
│   └── items.js        # Data access functions
├── items.json          # JSON database file
├── package.json        # Project dependencies
└── README.md           # This file
```

## Configuration

- **Port:** The server runs on port `8082` (configurable in `app.js`)
- **CORS:** Enabled for all origins (`*`)
- **Data Storage:** Items are stored in `items.json`

## Troubleshooting

### Port Already in Use
If port 8082 is already in use, you can change it in `app.js`:
```javascript
app.listen(8082); // Change to another port like 8083
```

### Module Not Found Errors
Make sure all dependencies are installed:
```bash
npm install
```

### CORS Issues
The server is configured to allow requests from any origin. If you need to restrict it, modify the CORS headers in `app.js`.

## Development

To make changes:
1. Edit the source files
2. Restart the server with `npm start`
3. Test your changes using the API endpoints

## License

ISC
