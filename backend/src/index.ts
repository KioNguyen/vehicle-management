import { AppDataSource } from "./data-source";
import * as express from "express";

AppDataSource.initialize()
.then(async () => {
  const app = express();

  app.listen(8080, () => {
    console.log(`Server listening on port ${8080}`);
  });
})
.catch((error) => console.log(error));