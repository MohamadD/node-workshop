

const http= require('http');
var fs = require('fs');
//this moudle lets us construct the filepath 
const path = require('path');


const port= 4000;

var message = 'I am so happy to be part of the Node Girls workshop!';


var handler= (request,response)=>{

    // var method = request.method;
     var endpoint = request.url;
     endpoint

    if (endpoint === "/") {
    
        // const filePath = path.join(__dirname, '..', 'public', 'index.html');

        fs.readFile( '../public/index.html', (error, file) =>{
          if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end("<h1>Sorry, we've had a problem on our end</h1>");

            return;
          }else{
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(file);

          }
    
        });

      }else if (endpoint.indexOf('public') !== -1) {
        const extension = endpoint.split('.')[1];
        console.log('extension');

        console.log(extension);
        const extensionType = {
          html: 'text/html',
          css: 'text/css',
          js: 'application/javascript',
          ico: 'image/x-icon',
          jpg: 'image/jpg'
          
        };
    
        console.log('end');
        console.log(endpoint);

        const filePath = path.join(__dirname, '..', endpoint);
        fs.readFile(filePath, (error, file) => {
          if (error) {
            console.log(error);
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>404 file not found</h1>');
          } else {
            response.writeHead(200, { 'Content-Type': extensionType[extension] });
            response.end(file);
          }
        });
      } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 file not found</h1>');


      }


};


const server=http.createServer(handler);
 


server.listen(port, function () {

    console.log("Server is listening on port 3000.  Ready to accept requests!");
});


// module.exports = handler;