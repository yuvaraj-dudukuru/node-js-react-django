// server.js
// Simple Node.js server using Express to serve static HTML files

// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port the server will run on
// Use the environment variable PORT if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// --- Middleware ---

// Serve static files (HTML, CSS, Client-side JS) from the 'public' directory
// Note: You should place your registration.html, login.html, catalog.html, cart.html,
// and any CSS/JS files inside a folder named 'public' in the same directory as server.js
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware to handle POST request data (for login/registration forms)
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies (form submissions)


// --- Routes ---

// Route for the homepage (optional, could redirect to catalog or login)
app.get('/', (req, res) => {
    // Redirect to the product catalog page by default
    res.redirect('/catalog.html');
});

// --- Placeholder Routes for Form Submissions ---
// These routes currently just log the received data and send a simple response.
// In a real application, you would add logic here to interact with a database,
// handle user authentication, manage sessions, etc.

// Placeholder for registration form submission
app.post('/register', (req, res) => {
    console.log('Registration attempt:', req.body);
    // TODO: Add user registration logic (validation, database insertion, password hashing)
    res.send('Registration placeholder: Received data. <a href="/login.html">Go to Login</a>');
    // In a real app, you'd likely redirect to login or show a success message.
});

// Placeholder for login form submission
app.post('/login', (req, res) => {
    console.log('Login attempt:', req.body);
    // TODO: Add user authentication logic (database lookup, password comparison, session creation)
    res.send('Login placeholder: Received data. <a href="/catalog.html">Go to Catalog</a>');
    // In a real app, you'd likely redirect to the catalog or dashboard upon successful login.
});

// --- Catch-all for 404 Not Found ---
// If no other route matches, send a 404 response
// This should be the last route definition
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); // Optional: Create a 404.html page
    // Or send a simple text response:
    // res.status(404).send('Page Not Found');
});


// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, 'public')}`);
    console.log('Access pages like:');
    console.log(`  http://localhost:${PORT}/catalog.html`);
    console.log(`  http://localhost:${PORT}/login.html`);
    console.log(`  http://localhost:${PORT}/registration.html`);
    console.log(`  http://localhost:${PORT}/cart.html`);
});

// --- Error Handling Middleware (Optional but Recommended) ---
// Example: Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
