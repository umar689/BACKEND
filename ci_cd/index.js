import express from 'express'

const app=express()
const PORT=process.env.PORT ?? 8080

app.get('/',(req,res)=>{
    res.json({msg:'learning CI/CD'})
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on PORT : ${PORT}`)
})
