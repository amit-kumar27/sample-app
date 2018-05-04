import * as express from 'express';
import {xhrErrorHandler} from "../middleware/error";


export const api = express.Router();

api.use(xhrErrorHandler);
