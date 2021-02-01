const express = require("express");
const app = express();

//DaTa
const connectDB = require("./config/connectDB");
connectDB();
//middlewar
app.use(express.json());
//require
const authRouter = require("./routes/auth");
// use router
app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`the server is ranning in port ${port}`)
);
