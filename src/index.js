import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js';
dotenv.config({
    path:'./env'
})


const app = express()
const port = process.env.PORT || 5000
        app.listen(port , ()=>{
            console.log(`app is running on port ${port}`);
        })

connectDB()






// ;(async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",()=>{
//         console.log("ERR :", error);
//         throw err
//        })
//        const port = process.env.PORT || 5000
//         app.listen(port , ()=>{
//             console.log(`app is running on port ${port}`);
//         })
//     }
//     catch(error){
//         console.log( "ERROR :", error);
//         throw err
        

//     }
// })