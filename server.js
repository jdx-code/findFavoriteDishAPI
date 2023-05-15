// Importing the express module
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')

dotenv.config()

let db;
let dbName = process.env.dbName
let connectionString = process.env.MONGO_URI

// Establishing database connection
MongoClient.connect(connectionString, {
    useUnifiedTopology: true
})
.then(client => {
    console.log(`Connected to database`)
    db = client.db(dbName)
})
.catch(error => console.error(error))

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

app.post('/admin-panel/add', (req, res) => {    

    db.collection('dish').insertOne({
        dishname: req.body.dishname,
        imgurl: req.body.imgurl,
        country: req.body.country,
    })
    .then(result => {
        console.log('Data added successfully!')
        res.redirect('/')
    })
    .catch(err =>{
        console.error(err)        
    })
    
})

// Assigning port for server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
