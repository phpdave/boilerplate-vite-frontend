const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem'))
};

app.use(express.static(path.join(__dirname, '../dist')));

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
