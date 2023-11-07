import route from "./v1/index.js";
import express from 'express'


const v1Route = route
const route1 = express.Router();
route.use('/v1',v1Route);
export default route1;