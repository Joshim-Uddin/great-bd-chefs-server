const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const popular = require('./data/popularRecipes.json')

app.use(cors())


app.get('/', (req, res) => {
    res.send([chefs, popular])
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