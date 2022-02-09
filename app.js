// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const session = require('express-session');
const express = require("express");

// App
const app = express();
app.use(session({
            secret: 'secret string',
            resave : false,
            saveUninitialized : false,
            cookie : {/* can add cookie related info here*/}
        })
      );

app.get('/', function(req,res){
    if (!req.session.pageCountByCurrentUserOfAnyNameYouWant)
        req.session.pageCountByCurrentUserOfAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOfAnyNameYouWant++;
    res.send({
        pageCount : req.session.pageCountByCurrentUserOfAnyNameYouWant
    });
});

console.log(`Running on http://${HOST}:${PORT}`);

app.listen(PORT, () => console.log('The server is started on http://localhost:3000'))