var express = require('express');

// Create our applciation
var app = express();
// environment variable
const PORT = process.env.PORT || 3000;

app.use(function(req,res,next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  }else{
    res.redirect('http://' req.hostname + req.url);
  }
});

// Add functionality to app
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});
