import * as express from "express";
import { ping } from "../middleware/ping";
import { ngApp } from "../middleware/app";

export function pages(router: express.Express) {
      router.use("/ping", ping);
      
      router.use("/", (req, res, next) => {
            if (req.path === "" || req.path === "/") {
                   next();
            } else {
              res.sendStatus(404);
            }
      }, ngApp);
}
