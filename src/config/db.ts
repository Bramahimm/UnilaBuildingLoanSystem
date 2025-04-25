import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_peminjaman_gedung",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Koneksi ke database gagal:", err.message);
  } else {
    console.log("✅ Terhubung ke database MySQL");
  }
});

export default db;
