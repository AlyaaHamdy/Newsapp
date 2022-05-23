// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000

// const request = require('request')
// const handlebars = require('handlebars')
// const news = require('../tools/news')
// const access = require('../tools/access')
// const path = require ('path')
// const viewPath = path.join(__dirname,'../hbs')


// app.set('view engine','hbs');

// const hbs = require('hbs')


// const newsUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=936a888d7bfb459484e81cfba5b56efe'
// request({newsUrl,json:true},(error,response)=>{
    
//     app.get('/',(req,res)=>{

//         res.render('index',{
//             "articles":response.body.articles,
//             "discribe":response.body.articles.description,
//             "img":response.body.articles.urlToImage

//         })
//     })
// })

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const request=require('request')

const handlebars=require('handlebars')
const news= 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=73a491ddd9ee4efd860c5d45d85ee78d'
const path = require('path')
app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname,'../templates/views')
app.set('views',viewsDirectory)

const hbs = require('hbs')
//const partialsPath = path.join(__dirname,'../templates/partials')
//hbs.registerPartials(partialsPath)


const url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=936a888d7bfb459484e81cfba5b56efe"


request({url,json:true},(error,response)=>{
    
    app.get('/',(req,res)=>{

        res.render('index',{
            "articles":response.body.articles,
            "discribe":response.body.articles.description,
            "img":response.body.articles.urlToImage

        })
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})