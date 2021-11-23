const http = require(`http`);
const fs = require(`fs`)

const hostname = '127.0.0.1';

const port = '8000';

const server = http.createServer((req,res) => {
    // const json = {
    //     time:Date.now.(),
    //     name:"Sujith C S",
    //     email:"sujith.cs@gadgeon.com"
    // }
    if(req.url == '/home'){
        fs.readFile('./view/home.html',null,(error,content) => {
            if(error){
                
                res.writeHead(404)
                console.log(error)
                res.write(`Error occured !${JSON.stringify(error)}`)
                res.end()
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write(content)
                res.end()

            }
        })
        
    } else if (req.url == '/test'){
        fs.readFile('./view/test.html', null , (error,content) => {
            if(error){
                
                res.writeHead(404)
                console.log(error)
                res.write(`Error occured ! ${JSON.stringify(error)}`)
                res.end()
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write(content)
                res.end()

            }
        })

    }else {
        res.end('Hello World')
    }
})

server.listen(port , hostname,( ) => {
    console.log(`server is running in ${port}`);
})