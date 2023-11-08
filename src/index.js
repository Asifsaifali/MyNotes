import express from "express"
import routes from './routes/index.js'
// import  PORT  from "./config/serverConfig.js"
import Connection from "./config/database.js";
import NoteService from "./services/Notes-service.js";
import bodyParser   from "body-parser";
const app = express();
const ApiRoute = routes;

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/Notes/api',ApiRoute);

const PORT = 3000
app.listen(3000,async()=>{ 
    console.log(`Server is running on port ${PORT} `);
    await Connection();
    const serv = new NoteService();
    const res = await serv.destroy('6547b830ff922eabee92e943')
    console.log(res);

})