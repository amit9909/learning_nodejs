// const http =require('http')

// function dataControl(req,resp)
// {
//     resp.write("<h1>Hello this is Amit Verma </h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);


// change the above function to the arrow function

const http =require('http')

const dataControl=(req,resp)=>
{
    resp.write("<h1>Hello this is Amit Verma </h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);