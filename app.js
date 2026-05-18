import express from 'express';

const app = express();
 app.use((req, res, next) => {
    console.log(`un midlware est executé pour la route: ${req.path}`);
    next();
});


app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});
app.get('/search/:id', (req, res) => {
    const keyword = req.params.id;
    res.send(`<h1>Search Results for: ${keyword}</h1>`);
    
});
app.get('/shop', (req, res) => {
    res.send('<h1>Our Shop</h1>');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});