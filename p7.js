const http = require('http');


http.createServer((req,resp)=>{
    resp.write("Hello this Amit Verma");
    resp.end();
}).listen(4500);
