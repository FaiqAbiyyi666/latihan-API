// // const express = require("express");
// // const app = express();
// // const port = 3000;

// // third party
// const morgan = require("morgan");
// app.use(morgan("dev")); // third party middleware

// // express.json
// app.use(express.json()); // built-int middleware

// // application level middleware
// // const logger = function (req, res, next) {
// //   console.log(`${req.method} ${req.url}`);
// //   next();
// // };
// // app.use(logger); // application level middleware, digunakan ke semua endpoint

// const date = function (req, res, next) {
//   console.log(Date.now());
//   next();
// };

// app.get("/", function (req, res) {
//   iniError; // test error handler
//   res.send("Hello World!");
// });

// app.get("/products", function (req, res) {
//   res.json(["Apple", "Samsung", "One Plus"]);
// });

// // query
// app.get("/orders", date, function (req, res) {
//   // route level middleware
//   let paid = req.query.paid;
//   let orders = [
//     { id: 1, paid: true, user_id: 1 },
//     { id: 2, paid: false, user_id: 2 },
//     { id: 3, paid: true, user_id: 3 },
//   ];

//   if (paid) {
//     orders = orders.filter((i) => {
//       return i.paid == (paid == "true");
//     });
//   }

//   res.json(orders);
// });

// // localhost:3000/users -> semua user
// // localhost:3000/users/1 -> get user 1
// // localhost:3000/users/2 -> get user 2
// // localhost:3000/users/3 -> get user 3

// // params
// app.get("/orders/:id", function (req, res) {
//   let id = Number(req.params.id);
//   res.json({ id: id, paid: true, user_id: id });
// });

// // coba third party
// app.post("/orders", function (req, res) {
//   res.json(req.body);
// });

// // interval server error
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ err: err.message });
// });

// // 404 error handler
// app.use((req, res, next) => {
//   res
//     .status(404)
//     .json({ err: `are you lost? ${req.method} ${req.url} is not registered!` });
// });

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}`);
// });
