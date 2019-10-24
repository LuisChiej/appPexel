const PexelsAPI = require('pexels-api-wrapper');

exports.search = function(req, res, next) {
    
    //Create Client instance by passing in API key
    var pexelsClient = new PexelsAPI("563492ad6f91700001000001ba5a1e671c0d46efb24f869ad46e8d51");
 
    if(req.params.page == 0){
        req.params.page == 1;
    }
    //Search API

    pexelsClient.search(req.params.query, 20, req.params.page)
    .then((data)=>{
        res.render('result', {data, search:req.params.query, page:req.params.page});
    })
    .catch(function(e){
        // console.err(e);
    });
}