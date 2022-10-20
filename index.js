import express from "express";

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app
    .get('/', (req, res) => {
        res.render('index')
    })
    .get('/about', (req, res) => {
        res.render('about')
    })
    .get('/test', (req, res) => {
        res.render('test');
    })
    .use((req, res) => {
        res.render('index');
    })


app.listen(process.env.PORT || 3005);
