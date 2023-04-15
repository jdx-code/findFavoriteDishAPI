// Importing the express module
const express = require('express');

// Assigning express object to a variable named `app`.
// We will call the express properties and methods using `app`.
const app = express();



// Assigning port for server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
