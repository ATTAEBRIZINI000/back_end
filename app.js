const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

   const postRouter = require("./routers/post");
   const adminRouter = require("./routers/admin");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use("uploads", express.static("uploads"));

app.use(cors());
app.use((req,res,next) => {
  res.headersSent("Access-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Headers","Origin, X-requested-With, Content-Type , Accept , Authorization");
  if(req.method === "OPTIONS"){
    req.header("Access-Control-Allow-Methods","PUT , POST , PATCH , DELETE , GET")
return res.status(200).json({});  }
next();
})


    app.use("/post",postRouter) ;
    app.use("/admin",adminRouter);


//-----------------------------Handling errors---------------------//
app.use((req, res, next) => {
  const error = new Error(`error 404 rout not found`);
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});


module.exports = app;
