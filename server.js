const http = require("http");

const server = http.createServer(function(req,res){
  const users = ["Ali","Muhammad","Qasim"] 
  const products  = ["laptop","mobile","watch"]
  const {url, method} = req;
  if(url == "/" && method == 'GET'){
    res.write('<h1>This is home page </h1>');
    res.end();
  }
  else if (url == '/users'){
    res.write(JSON.stringify(users));
    res.end();
  } else if (url == '/products'){
    res.write(JSON.stringify(products));
    res.end();
  }
 // console.log('url is :', url, 'method is :', method);
  
  console.log('Allhamduillah we have created our first server');
})
  server.listen(4000);
  //console.log(http);