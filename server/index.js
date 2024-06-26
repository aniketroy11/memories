import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:"10mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes)
const CONNECTION_URL = 'mongodb+srv://aniketroy11:aniket11202706@cluster0.o4jkyxq.mongodb.net/'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.messsage));



