import express from "express"
// import  PORT  from "./config/serverConfig.js"
import Connection from "./config/database.js";
import NoteService from "./services/Notes-service.js";
import bodyParser   from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3000
app.listen(3000,async()=>{
    console.log(`Server is running on port ${PORT} `);
    await Connection();
    const serv = new NoteService();
    const res = await serv.create({content : "Hey there this note is sending from service to repository to model to database"})
    console.log(res);

})