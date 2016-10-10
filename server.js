var express = require('express');

// Create our applciation
var app = express();

// Add functionality to app
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
})
