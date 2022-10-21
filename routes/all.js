import { Router } from "express";

const routes = Router();

routes
    .get('/', (req, res) => {
        res.render('index')
    })
    .get('/about', (req, res) => {
        res.render('about')
    })
    .get('/test', (req, res) => {
        res.render('test');
    });

export default routes;