import * as express from "express";
import { DBDataSource } from "./database/datasource";

DBDataSource.initialize()
  .then(async () => {
    const app = express();

    app.listen(8080, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
