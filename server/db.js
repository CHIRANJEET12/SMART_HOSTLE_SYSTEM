import pg from "pg";
import env from "dotenv";
env.config();


const db = new pg.Client({
  user:"postgres",
  host:process.env.HOST,
  database:process.env.DATABASE,
  password:process.env.PASSWORD,
  port:5432
});

db.connect();

export default db;