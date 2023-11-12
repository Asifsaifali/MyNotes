import router from "./v1/index.js";
import express from 'express'


const v1Route = router
const route1 = express.Router();
route1.use('/v1',v1Route);
export default route1;