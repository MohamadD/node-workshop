

const http= require('http');
var message = 'I am so happy to be part of the Node Girls workshop!';


var handler= (request,response)=>{

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message); //response body
    response.end(); // finish response

};


const server=http.createServer(handler);
 
const port= 3000;

server.listen(port, function () {

    console.log("Server is listening on port 3000.  Ready to accept requests!");
});


