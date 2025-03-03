import express from 'express';
import { config } from 'dotenv';
config();

const blogGetHandle = express.Router()

blogGetHandle.get('/api/blog/edit/a',(req,res)=>{
    console.log("working")
});


export default blogGetHandle;