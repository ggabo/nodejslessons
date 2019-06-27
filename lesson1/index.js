const http = require('http');

http.createServer(
(
    request, response) => 
    {
        /*define headers*/
        response.writeHead(200, 
                {
                    'Content-Type' : 'text/plain'
                }
            );

        /*write the content*/
        response.write('Hello World');

        /*tell server it's done*/

        response.end();

    }
).listen(8080);