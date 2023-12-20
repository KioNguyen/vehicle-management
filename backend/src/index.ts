import './config';
import * as express from "express";

const app = express();
app.listen(process.env.PORT || 8080, async () => {
  console.log(`Server listening on port ${8080}`);
});

//error handling middleware
app.use(function (err, req, res, next) {
  console.log("hi");
  res.status(500).send('Something broke!');
});



