const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const restaurants = require('./restaurant.json');

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurants.results });
});

app.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.results.find(r => r.id.toString() === req.params.id);
    res.render('show', { restaurant });
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword.toLowerCase();
    const filteredRestaurants = restaurants.results.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword);
    });
    res.render('index', { restaurants: filteredRestaurants, keyword: req.query.keyword });
});

app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`);
});
