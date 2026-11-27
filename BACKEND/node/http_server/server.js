let http=require('http')

let server=http.createServer((req,res)=>{
    console.log(res)
    if(req.url==="/"){
        res.end('sun rha hu')
    }
    else if(req.url==="/user"){
        res.end('m hu user')
    }
    else return

    //this was the prob in http
})

server.listen(8080,(req,res)=>{
    console.log('server is listening on post 8080')
})