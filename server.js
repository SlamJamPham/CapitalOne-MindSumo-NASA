const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
	res.sendFile(__dirname + '/dist/index,html');
});

app.listen(port);

console.log('Listening on port: ' + port);
