const { Client } = require("pg");
const express = require("express");

const PORT = process.env.PORT || 8080;
const DB_USER = process.env.DB_USER || "postgres";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "kristians-database";
const DB_PW = process.env.DB_PW || "password";
const DB_PORT = process.env.DB_PORT || 5432;

if (!process.env.DB_NAME || !process.env.DB_PW) {
  console.warn("Husk at sætte databasenavn, password og user via env vars.");
  console.warn("Sæt fx databasenavn sådan her (i bash):", `export DB_NAME="kristians-database"`);
  console.warn("Lige nu er databasenavn sat til:", DB_NAME);
} else {
  console.log("Postgres database:", DB_NAME);
  console.log("Postgres user:", DB_USER);
}

const app = express();
const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PW,
  port: DB_PORT
});
client.connect();

app.use(express.text());
app.use(express.static("public"))

app.post("/postgresql/query", async (req, res) => {
  console.log(DB_HOST, DB_NAME);
  try {
    queryData = await client.query(req.body);
    res.json({
      "ok": true,
      "data": queryData.rows,
    })
  } catch (error) {
    res.json({
      "ok": false,
      "message": error.message,
    })
  }
});

app.listen(PORT, () => console.log(`Serveren kører på http://localhost:${PORT}`));