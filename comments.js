// Create web server
// 1. Create a web server
// 2. Create a route to handle a get request
// 3. Create a route to handle a post request
// 4. Create a route to handle a delete request
// 5. Create a route to handle a put request
// 6. Create a route to handle a patch request
// 7. Create a route to handle a head request
// 8. Create a route to handle a options request

// 1. Create a web server
const express = require('express');
const app = express();
app.use(express.json());

// 2. Create a route to handle a get request
app.get('/api/comments', (req, res) => {
    res.send('Get request to the homepage');
});

// 3. Create a route to handle a post request
app.post('/api/comments', (req, res) => {
    res.send('Post request to the homepage');
});

// 4. Create a route to handle a delete request
app.delete('/api/comments', (req, res) => {
    res.send('Delete request to the homepage');
});

// 5. Create a route to handle a put request
app.put('/api/comments', (req, res) => {
    res.send('Put request to the homepage');
});

// 6. Create a route to handle a patch request
app.patch('/api/comments', (req, res) => {
    res.send('Patch request to the homepage');
});

// 7. Create a route to handle a head request
app.head('/api/comments', (req, res) => {
    res.send('Head request to the homepage');
});

// 8. Create a route to handle a options request
app.options('/api/comments', (req, res) => {
    res.send('Options request to the homepage');
});

// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));