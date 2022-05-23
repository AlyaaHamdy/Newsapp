const request = require('request')
const access = () =>{
    const accessUrl= 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-22&sortBy=publishedAt&apiKey=936a888d7bfb459484e81cfba5b56efe'
        request({url:accessUrl,json:true},(error,response)=>{
       // console.log(response.body)
       // low level error
       if(error){
           return('Error has occureed')
       }
       else if(response.body.error){
           return(response.body.error.message)
       }
       else {
           return(undefined,'In ' + response.body.location.country + 
           ' temp is ' + response.body.current.temp_c)
       }
    
    })
}

module.exports = access