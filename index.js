// const express=require("express");
// const app=express();

// require('dotenv').config();
// const PORT=process.env.PORT || 4000;

//  const cookieParser=require(cookie-parser);
//  app.use(cookieParser);


// app.use(express.json());
// require("./config/database").connect();

// const user=require("./routes/user");

// app.use("/api/v1",user);

// //activate
// app.listen(PORT,()=>{
//     console.log(`App is Listening at ${PORT}`)
// })




// const express = require("express");
// const app = express();

// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// const cookieParser = require("cookie-parser"); //  Only once
// app.use(cookieParser());

// app.use(express.json());
// require("./config/database").connect();

// const user = require("./routes/user");
// app.use("/api/v1", user); //  Removed duplicate declaration

// // Activate server
// app.listen(PORT, () => {
//   console.log(`App is listening at ${PORT}`);
// });


const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());



const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//actuivate

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})