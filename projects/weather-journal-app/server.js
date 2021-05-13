// Setup empty JS object to act as endpoint for all routes
projectData = {};
const portNum=3000;
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app= express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(portNum,()=>{
	console.log('server is up and running on port number '+portNum);
});
// Send data to client
app.get('/getData', (req,res)=>{
	res.send(projectData);
});

// Save data
app.post('/saveData', (req,res)=>{
	projectData = req.body;
	res.end();
});