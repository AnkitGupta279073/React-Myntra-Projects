# Myntra Clone - Full Stack E-Commerce Application

A full-stack e-commerce application clone of Myntra, featuring a React frontend with Redux state management and an Express.js backend API.

## Project Structure

```
Myntra/
├── myntra-frontend/     # React + Redux frontend application
├── myntra-backend/      # Express.js REST API server
├── .gitignore          # Git ignore patterns
└── README.md           # This file
```

## Tech Stack

### Frontend
- **React 19** - UI library
- **Redux Toolkit** - State management
- **React Router v7** - Client-side routing
- **Vite** - Build tool
- **Bootstrap 5** - CSS framework
- **React Icons** - Icon components

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## Features

- 🛍️ Product browsing with detailed information
- 🛒 Shopping cart functionality (add/remove items)
- 💰 Real-time price calculations with discounts
- 📱 Responsive design
- 🔄 State management with Redux
- 📡 RESTful API integration
- ⚡ Fast development with Vite HMR
- 🎨 Modern UI with Bootstrap

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation & Setup

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd Myntra
```

2. **Install Backend Dependencies:**
```bash
cd myntra-backend
npm install
```

3. **Install Frontend Dependencies:**
```bash
cd ../myntra-frontend
npm install
```

### Running the Application

**Step 1: Start the Backend Server**
```bash
cd myntra-backend
npm start
```
Backend will run on `http://localhost:8082`

**Step 2: Start the Frontend (in a new terminal)**
```bash
cd myntra-frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

**Step 3: Open your browser**

Navigate to `http://localhost:5173` to see the application.

## Development Workflow

### Making Changes

**Frontend:**
1. Navigate to `myntra-frontend/`
2. Edit components in `src/component/` or routes in `src/routes/`
3. Changes auto-reload with Vite HMR

**Backend:**
1. Navigate to `myntra-backend/`
2. Edit API endpoints in `app.js` or data logic in `data/items.js`
3. Restart the server with `npm start`

### Testing the API

Use curl or Postman to test backend endpoints:

```bash
# Get all items
curl http://localhost:8082/items

# Get single item
curl http://localhost:8082/items/001
```

## Project Details

### Frontend Routes
- `/` - Home page (product listing)
- `/bag` - Shopping cart page

### Backend API Endpoints
- `GET /items` - Fetch all products
- `GET /items/:id` - Fetch single product by ID
- `POST /items` - Create new product

### Redux Store Structure
```javascript
{
  items: {
    initialItems: []      // All products
  },
  bag: [],                // Items in shopping cart
  fetchStatus: {
    fetchDone: false,
    currentlyFetching: false
  }
}
```

## Detailed Documentation

For detailed setup, API documentation, and troubleshooting:
- **Frontend:** See [myntra-frontend/README.md](./myntra-frontend/README.md)
- **Backend:** See [myntra-backend/README.md](./myntra-backend/README.md)

## Troubleshooting

### Backend Not Running
- Check if port 8082 is available
- Verify all dependencies are installed: `npm install`
- Check for errors in terminal output

### Frontend API Errors
- Ensure backend is running on `http://localhost:8082`
- Check browser console for CORS errors
- Verify fetch URL in `FetchItems.jsx`

### Port Conflicts
**Backend (8082):**
- Edit port in `myntra-backend/app.js`

**Frontend (5173):**
- Use `npm run dev -- --port 3000` or create `vite.config.js`

## Scripts

### Backend
```bash
npm start          # Start Express server
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] User authentication & authorization
- [ ] Product search & filters
- [ ] Wishlist functionality
- [ ] Order checkout & payment integration
- [ ] Product reviews & ratings
- [ ] Admin dashboard
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Image upload functionality
- [ ] Email notifications

## License

ISC

## Author

Ankit Gupta

---

**Happy Coding!** 🚀
