const express = require("express");
const app = express();
const port = 3000;

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "latihanapi",
  user: "postgres",
  password: "lama12345",
  port: 5432,
});

app.use(express.json());

app.get("/", function (req, res) {
  res.send("testing");
});

app.get("/employees", async function (req, res, next) {
  try {
    let data = await pool.query(`SELECT * FROM employees`);
    res.json(data.rows);
  } catch (err) {
    next(err);
  }
});

app.post("/employees", async function (req, res, next) {
  let name = req.body.name;
  let department = req.body.department;
  let salary = req.body.salary;
  let is_available = req.body.is_available;

  try {
    let data = await pool.query(
      `INSERT INTO employees 
        (name, department, salary, is_available) VALUES ($1,$2,$3,$4)`,
      [name, department, salary, is_available]
    );
    res.json(data.rowCount);
  } catch (err) {
    next(err);
  }
});

app.get("/employees/:id", async function (req, res) {
  let id = req.params.id;
  let data = await pool.query(`SELECT * FROM employees WHERE id=$1`, [id]);
  res.send(data.rows);
});

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
