const request = require('request')
const news = () =>{
    const newsUrl= 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-22&sortBy=publishedAt&apiKey=936a888d7bfb459484e81cfba5b56efe'
        request({url:newsUrl,json:true},(error,response)=>{
       // console.log(response.body)
       // low level error
       if(error){
           return('Error has occured')
       }
       else if(response.body.code=="Invalid Key"){
        return('invalide api')
       }
       else if(response.body.code=="Invalid Key"){
        return('you forgot the Api Key')
       }
       else {
           const data = response.body.articals
           console.log(data)
       }
    
    })
}

module.exports = news