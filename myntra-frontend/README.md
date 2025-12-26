# Myntra Frontend Clone

A modern e-commerce web application clone of Myntra built with React, Redux Toolkit, and Vite. Features a shopping cart system, product browsing, and responsive UI design.

## Features

- 🛍️ Browse products with detailed information
- 🛒 Add/Remove items from shopping bag
- 📊 Real-time bag item count in header
- 💰 Dynamic price calculation (MRP, discount, convenience fee)
- ⚡ Fast loading with Vite
- 🎨 Responsive UI with Bootstrap
- 🔄 State management with Redux Toolkit
- 🚀 Client-side routing with React Router
- 📡 API integration with backend server
- ⏳ Loading states with spinner

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16.0 or higher)
- **npm** (Node Package Manager)
- **Backend server running** on `http://localhost:8082`

## Installation

1. Navigate to the frontend directory:
```bash
cd /home/ankit.gupta/reactjs/Project/Myntra/myntra-frontend
```

2. Install dependencies:
```bash
npm install
```

This will install all required packages including:
- React & React DOM
- Redux Toolkit & React Redux
- React Router DOM
- Bootstrap
- React Icons
- Vite

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will start on **http://localhost:5173** (or another port if 5173 is busy)

You should see output like:
```
VITE v7.2.4  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
myntra-frontend/
├── public/
│   └── images/              # Product images
├── src/
│   ├── component/
│   │   ├── BagItem.jsx      # Individual bag item component
│   │   ├── BagSummary.jsx   # Bag price summary
│   │   ├── FetchItems.jsx   # API data fetching component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Header.jsx       # Header with navigation
│   │   ├── HomeItem.jsx     # Product card component
│   │   └── Loader.jsx       # Loading spinner
│   ├── routes/
│   │   ├── App.jsx          # Main app layout
│   │   ├── Bag.jsx          # Shopping bag page
│   │   └── Home.jsx         # Home page with products
│   ├── store/
│   │   ├── bagSlice.js      # Redux slice for bag state
│   │   ├── fetchStatusSlice.js  # Redux slice for API status
│   │   ├── itemSlice.js     # Redux slice for items
│   │   └── index.js         # Redux store configuration
│   ├── data/
│   │   └── items.js         # Static item data (fallback)
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── README.md                # This file
```

## Technology Stack

- **React 19.2** - UI library
- **Redux Toolkit** - State management
- **React Router v7** - Client-side routing
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **React Icons** - Icon library

## Available Routes

- `/` - Home page (product listing)
- `/bag` - Shopping bag page

## Redux State Structure

```javascript
{
  items: {
    initialItems: []  // Array of product objects
  },
  bag: [],            // Array of item IDs in bag
  fetchStatus: {
    fetchDone: false,
    currentlyFetching: false
  }
}
```

## Configuration

### Backend API URL

The frontend expects the backend to run on:
```
http://localhost:8082
```

To change this, update the URL in `/src/component/FetchItems.jsx`:
```javascript
fetch('http://localhost:8082/items', { signal: controller.signal })
```

### Port Configuration

Vite uses port 5173 by default. To change it, create/edit `vite.config.js`:
```javascript
export default {
  server: {
    port: 3000
  }
}
```

## Features Walkthrough

### Adding Items to Bag
1. Browse products on the home page
2. Click "Add to Bag" button on any item
3. Button changes to "Remove from Bag" (red)
4. Bag count in header updates automatically

### Viewing Bag
1. Click on the "Bag" icon in header
2. See all added items with details
3. View price summary with discount calculation
4. Remove items by clicking the delete icon

### Loading States
- Spinner shows while fetching data from backend
- "Loading..." text displays during API calls
- Content appears only after data is loaded

## Troubleshooting

### Backend Connection Error
**Error:** `Error fetching items: Failed to fetch`

**Solution:** Make sure the backend server is running on port 8082:
```bash
cd ../myntra-backend
npm start
```

### Port Already in Use
**Error:** `Port 5173 is already in use`

**Solution:** Kill the process or use a different port:
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

### Dependencies Not Found
**Error:** `Cannot find module...`

**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
**Solution:** Ensure images are in the `/public/images/` folder with correct filenames (1.jpg, 2.jpg, etc.)

## Development Tips

1. **Hot Module Replacement (HMR):** Changes to React components auto-reload
2. **Redux DevTools:** Install Redux DevTools extension to inspect state
3. **ESLint:** Run `npm run lint` to check code quality
4. **Fast Refresh:** Keep Fast Refresh working by following React component conventions

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User authentication
- [ ] Product search functionality
- [ ] Filter and sort products
- [ ] Wishlist feature
- [ ] Order checkout flow
- [ ] Product detail page
- [ ] Responsive mobile optimization

## License

ISC

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Made with ❤️ using React and Redux Toolkit
