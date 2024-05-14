//  library and framework

//  liberary ==> it is a collection if code which is uzsx to perform a specific task.
//  framework ===> it is collection liberaries , inside framworks wr can use diffrent libraries.
//  no need to write the code from scratch as basic structures has already been defind.
// Express Js== it si a framework of NodeJs . it is simle ,fast and minimalistic and we can insert diffrent functionalites using middlewares , also if helps us to follw MVC architecture m==model , view==layout , c==controllers

// other example of frameworks of NodeJs ara koa.js menteor .js nest.js

//  to istall nodemon globally
//  npm i/install nodemon -g

//1st =create package.json file using "npm" init -y
//2nd step= install express npm i/install express

// 3rd step =import express package
let express = require("express");
// console.log(express)

// 4th step== invoking/calling top level function
let app = express();

// 6th  step == creating endpoin
app.get("/", (req, res) => {
  res.send("Hello Developer");
});
app.get("/form", (req, res) => {
  res.send("form page");
});

// 5th step == listen
app.listen(9000, err => {
  if (err) throw err;
  console.log(`server is running at https://localhost:9000`);
});
