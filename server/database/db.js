
import mongoose from 'mongoose';




const Connection = async(username,password) =>{

   const URL = `mongodb+srv://${username}:${password}@blog-app.hdkm8.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
   try{

    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log(`database created`);

   }
   catch(error){
    console.log(`error while creating`,error);
   }
}


export default Connection;

