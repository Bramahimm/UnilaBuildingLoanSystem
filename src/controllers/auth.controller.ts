import { Request, Response } from "express";
import db from "../config/db";

export default {
  cekdatabase(req: Request, res: Response) {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "DB Error", error: err });
      }

      res.status(200).json({
        message: "Success retrieve data from MySQL",
        data: results,
      });
    });
  },
};
