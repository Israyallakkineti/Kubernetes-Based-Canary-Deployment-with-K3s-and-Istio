const express = require('express')
const app = express()

app.get('/', (req,res)=>{
res.send("Stable Version v1")
})

app.listen(3000, ()=> console.log("Running"))
