const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const popular = require('./data/popularRecipes.json');
const featured = require('./data/featured.json');
const blog = require('./data/blog.json');

app.use(cors())


app.get('/', (req, res) => {
    res.send(chefs)
})
app.get('/popular', (req, res) => {
    res.send(popular)
})
app.get('/featured', (req, res) => {
    res.send(featured)
})
app.get('/blog', (req, res) => {
    res.send(blog)
})

app.get('/chefs/:id', (req, res) => {
    const anotherChefs = chefs.chefs;
    const id = req.params.id;
    const recipes = anotherChefs.find(chef => chef.id == id)

    res.send(recipes.recipes)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})