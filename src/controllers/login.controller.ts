import { Request, Response } from "express";
import db from "../config/db";

export default {
  login(req: Request, res: Response) {
    const { npm, password } = req.body;

    if (!npm || !password) {
      return res.status(400).json({ message: "NPM dan password wajib diisi." });
    }

    db.query(
      "SELECT * FROM users WHERE npm = ? AND password = ?",
      [npm, password],
      (err, results: any) => {
        if (err) {
          return res.status(500).json({ message: "DB error", error: err });
        }

        if ((results as any[]).length === 0) {
          return res.status(401).json({ message: "NPM atau password salah." });
        }

        res.status(200).json({ message: "Login berhasil", user: results[0] });
      }
    );
  },
};
