import express from "express";
import bodyParser from "body-parser";
import userRouter from './routes/users.js';
const app = express();

app.use(bodyParser.json());



app.use('/' , userRouter);


app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
});

