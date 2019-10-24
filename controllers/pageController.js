const PexelsAPI = require('pexels-api-wrapper');

exports.search = function(req, res, next) {
    
    //Create Client instance by passing in API key
    var pexelsClient = new PexelsAPI("563492ad6f91700001000001ba5a1e671c0d46efb24f869ad46e8d51");
 
    //Search API
    pexelsClient.getCuratedPhotos(1, Math.floor(Math.random()*100))
    .then((data)=>{
        res.render('index', {data});
    })
    .catch(function(e){
        console.log(e);
    });
}