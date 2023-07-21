import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection=()=>{
    const url=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gmailclone.xfaw5ie.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(url,
        {
          useNewUrlParser: true
        })
        .then(() => {
          console.log('Connected to database !!');
        })
        .catch((err)=>{
          console.log('Connection failed !!'+ err.message);
        });
}
export default Connection;




////https://cloud.mongodb.com/