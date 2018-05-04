import * as express from 'express';
export function ping(req:express.Request, res:express.Response, next:express.NextFunction){
  res.sendStatus(200);
}