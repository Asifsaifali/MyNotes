import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://asifsaifali:asif9661@cluster0.udqwqkr.mongodb.net/NoteApp?retryWrites=true&w=majority"
const Connection = async()=>{
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("Connected to Database");
}

export default Connection;