import express from "express";
import routes from "./routes/all.js";
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use((req, _, next) => {
    console.log(`${req.method}  ${req.url}`);
    next();
})
app.use(routes);

app.use((_, res) => {
    res.render('404');
})

app.listen(process.env.PORT || 3005, () => {
    console.log("Server starts on port " + (process.env.PORT || 3005));
    console.log(`http://localhost:${process.env.PORT || 3005}`);
});
