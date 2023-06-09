// Importing the express module
const express = require('express');
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin')

// Assigning express object to a variable named `app`.
// We will call the express properties and methods using `app`.
const app = express();

require('dotenv').config({ path: './config/.env' })
connectDB()

// Set the view engine
app.set('view engine', 'ejs')

// Body parser
// Accepting request data from client side forms
app.use(express.urlencoded({ extended: true }));

// Accepting all other request data other than client side forms
app.use(express.json());

// Automatic routes made for static files in public
app.use(express.static('public'))

// Using the following routes
app.use('/', homeRoutes)
app.use('/admin', adminRoutes)

// Assigning port for server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
