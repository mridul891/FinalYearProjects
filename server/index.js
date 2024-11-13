import express from 'express'
import mainRouter from './routes/main.js'


const app = express()
const PORT= 3000
app.use(express.json())

app.get("/" ,(req ,res)=>{
    res.json({
        message : " THe server is running Properly"
    })
})

app.use("/api/v1" , mainRouter)

app.listen(PORT , (req ,res)=>{
    console.log(`The localhost is running at http://localhost:${PORT}`)
})