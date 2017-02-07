var express = require('express');
var app = express();

app.get('/api/whoami', (req, res) => {
    var user_agent = req.headers['user-agent'];
    var regex = /\(([^\)]*)/;
    var software = regex.exec(user_agent)[1];

    console.log(req.headers);
    res.send({
	ipaddress: req.headers['x-forwarded-for'],
	language: req.headers['accept-language'],
	software: software
    });
});

app.listen(process.env.PORT || 8000);
