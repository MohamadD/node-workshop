

const http= require('http');
var fs = require('fs');
const port= 4000;

var message = 'I am so happy to be part of the Node Girls workshop!';


var handler= (request,response)=>{

    // var method = request.method;
     var endpoint = request.url;

    
    if (endpoint === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
    
        // const filePath = path.join(__dirname, '..', 'public', 'index.html');

        fs.readFile( '../public/index.html', (error, file) =>{
          if (error) {
            console.log(error);
            return;
          }
    
          response.end(file);
        });
      }


};


const server=http.createServer(handler);
 


server.listen(port, function () {

    console.log("Server is listening on port 3000.  Ready to accept requests!");
});


