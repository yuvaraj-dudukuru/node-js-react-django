# Responsive Shopping Cart Web Application (Exercise Project)

This project is the initial setup for a responsive web application featuring user registration, login, a product catalog, and a shopping cart. It focuses on building the frontend structure using modern CSS features (Flexbox, Grid via Tailwind CSS) and serving the static pages with a basic Node.js/Express backend.

## Features (Current Structure)

* **Responsive Design:** Uses Tailwind CSS utility classes for a mobile-first, responsive layout across different screen sizes.
* **Multiple Pages:** Includes HTML structures for:
    * Registration (`registration.html`)
    * Login (`login.html`)
    * Product Catalog (`catalog.html`) - Uses CSS Grid for product layout.
    * Shopping Cart (`cart.html`) - Uses table layout and Flexbox for summary.
* **Basic Server:** A simple Node.js server using the Express framework to serve the static HTML files.
* **Placeholder Backend Routes:** Includes basic Express routes (`/register`, `/login`) that currently only log form data to the console (no actual database interaction or authentication yet).

## Technologies Used

* **Frontend:**
    * HTML5
    * Tailwind CSS v3 (loaded via CDN) - For styling and layout (including Flexbox & Grid).
    * (Optional) `styles.css` for any custom CSS.
* **Backend:**
    * Node.js
    * Express.js - Web framework for Node.js.

## Project Structure

shopping-app/├── public/│   ├── registration.html│   ├── login.html│   ├── catalog.html│   ├── cart.html│   └── (optional) styles.css│   └── (optional) images/├── server.js             # Express server logic├── package.json          # Project metadata and dependencies├── package-lock.json     # Lockfile for dependencies└── node_modules/         # Installed npm packages└── README.md             # This file
## Setup and Running

1.  **Clone or Download:** Get the project files onto your local machine.
2.  **Navigate to Project Directory:** Open your terminal or command prompt and change (`cd`) into the main project folder (e.g., `shopping-app`).
3.  **Install Dependencies:** Run the following command to install the necessary Node.js package (Express):
    ```bash
    npm install
    ```
    *(If you haven't initialized npm yet, run `npm init -y` first).*
4.  **Run the Server:** Start the Node.js server using:
    ```bash
    node server.js
    ```
5.  **Access the Application:** Open your web browser and navigate to `http://localhost:3000`. You should be redirected to the product catalog page. You can also access other pages directly:
    * Login: `http://localhost:3000/login.html`
    * Register: `http://localhost:3000/registration.html`
    * Cart: `http://localhost:3000/cart.html`

## Current Status & Next Steps

This is currently a **static frontend prototype** with a basic server. The core backend functionality (user management, database interaction, session handling, actual cart logic) is **not implemented**.

**Potential Next Steps:**

1.  **Database Integration:** Choose and integrate a database (e.g., MongoDB, PostgreSQL, MySQL) to store user and product information.
2.  **User Authentication:** Implement secure user registration (password hashing) and login (session management, JWT).
3.  **API Development:** Create API endpoints in `server.js` to handle:
    * Fetching products for the catalog.
    * Adding/removing items from the user's cart.
    * Processing checkout.
4.  **Client-Side JavaScript:** Add JavaScript to the HTML pages (`public` folder) to:
    * Make API calls to the backend (e.g., add to cart without page reload).
    * Update the UI dynamically (e.g., update cart count in header).
    * Perform form validation.
5.  **Refine Styling:** Add more custom styles or further leverage Tailwind CSS for a more polished look and feel.
6.  **Error Handling:** Implement more robust error handling on both the client and server sides.
    
