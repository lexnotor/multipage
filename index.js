import express from "express";
import fs from 'fs';

const app = express();
const VIEW_PATH = './view';

app
    .get('/', (req, res) => {
        fs.createReadStream(VIEW_PATH + '/index.html').pipe(res);
    })
    .get('/about', (req, res) => {
        fs.createReadStream(VIEW_PATH + '/about.html').pipe(res);
    })
    .get('/test', (req, res) => {
        fs.createReadStream(VIEW_PATH + '/test.html').pipe(res);
    })
    .use((req, res) => {
        fs.createReadStream(VIEW_PATH + '/index.html').pipe(res);
    })


app.listen(process.env.PORT || 3005);
