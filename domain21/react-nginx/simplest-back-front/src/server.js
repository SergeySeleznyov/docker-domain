const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = require('./apiRouter');

const app = express();

app.use(cors())
app.use(helmet());

app.use('/api', router);

const proxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3001/',
    changeOrigin: true,
});
app.use('/', proxy);

app.listen(3000, () => {
    console.log('listening on port 3000');
});