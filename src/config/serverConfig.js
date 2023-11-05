import dotenv from "dotenv"
import path from "path"
const __dirname = path.resolve();
dotenv.config({path:path.resolve(__dirname,"../../.env")});

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
export { PORT, MONGO_URL }