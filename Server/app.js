const functions = require("firebase-functions");
const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

exports.app = functions.https.onRequest(app);
