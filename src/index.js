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
    const res = await serv.destroy('6547b830ff922eabee92e943')
    console.log(res);

})