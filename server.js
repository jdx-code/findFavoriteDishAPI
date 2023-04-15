// Importing the express module
const express = require('express');

// Assigning express object to a variable named `app`.
// We will call the express properties and methods using `app`.
const app = express();

// Accepting request data from client side forms
app.use(express.urlencoded({ extended: true }));

// Accepting all other request data other than client side forms
app.use(express.json());

// API endpoint for admin panel
app.get('/admin-panel', (req, res) => {
    res.sendFile(__dirname + '/admin/index.html');
});

// Assigning port for server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
