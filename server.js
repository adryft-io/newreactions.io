const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.static('./app'));
app.use('/api', proxy(process.env.WEB_SERVER_URL));
app.listen(process.env.PORT || 8100);
