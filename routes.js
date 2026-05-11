const express = require("express");
const router = express.Router();
const db = require("./db");

// ===============================
// HOME
// ===============================
router.get("/", (req, res) => {
  db.query("SELECT COUNT(*) AS total FROM daftar_hewan", (err, results) => {
    if (err) return res.status(500).send("Database error: " + err.message);

    res.render("home", {
      title: "Paws & Whiskers",
      jumlah: results[0].total,
    });
  });
});

// ===============================
// DAFTAR HEWAN
// ===============================
router.get("/hewan", (req, res) => {
  db.query("SELECT * FROM daftar_hewan ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).send("Database error: " + err.message);

    res.render("hewan", {
      title: "Daftar Hewan",
      hewan: results,
    });
  });
});

// ===============================
// FORM TAMBAH HEWAN
// ===============================
router.get("/hewan/add", (req, res) => {
  res.render("form", {
    title: "Tambah Data Hewan",
  });
});

// ===============================
// SIMPAN DATA BARU
// ===============================
router.post("/hewan", (req, res) => {
  const {
    jenis_hewan,
    spesies,
    jumlah,
    deskripsi,
    umur,
    kategori,
    kesehatan,
    makanan,
    habitat,
  } = req.body;

  const sql = `
    INSERT INTO daftar_hewan
    (
      jenis_hewan,
      spesies,
      jumlah,
      deskripsi,
      umur,
      kategori,
      kesehatan,
      makanan,
      habitat
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      jenis_hewan,
      spesies,
      jumlah,
      deskripsi,
      umur,
      kategori,
      kesehatan,
      makanan,
      habitat,
    ],
    (err) => {
      if (err) return res.status(500).send("Database error: " + err.message);

      res.redirect("/hewan");
    },
  );
});

// ===============================
// FORM EDIT
// ===============================
router.get("/hewan/edit/:id", (req, res) => {
  const sql = "SELECT * FROM daftar_hewan WHERE id = ?";

  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err.message);

    if (results.length === 0)
      return res.status(404).send("Data tidak ditemukan");

    res.render("edit", {
      title: "Edit Hewan",
      hewan: results[0],
    });
  });
});

// ===============================
// UPDATE DATA
// ===============================
router.post("/hewan/update/:id", (req, res) => {
  const {
    jenis_hewan,
    spesies,
    jumlah,
    deskripsi,
    umur,
    kategori,
    kesehatan,
    makanan,
    habitat,
  } = req.body;

  const sql = `
    UPDATE daftar_hewan
    SET
      jenis_hewan = ?,
      spesies = ?,
      jumlah = ?,
      deskripsi = ?,
      umur = ?,
      kategori = ?,
      kesehatan = ?,
      makanan = ?,
      habitat = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      jenis_hewan,
      spesies,
      jumlah,
      deskripsi,
      umur,
      kategori,
      kesehatan,
      makanan,
      habitat,
      req.params.id,
    ],
    (err) => {
      if (err) return res.status(500).send(err.message);

      res.redirect("/hewan");
    },
  );
});

// ===============================
// DELETE DATA
// ===============================
router.post("/hewan/delete/:id", (req, res) => {
  const sql = "DELETE FROM daftar_hewan WHERE id = ?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).send(err.message);

    res.redirect("/hewan");
  });
});

// ===============================
// DETAIL HEWAN
// ===============================
router.get("/hewan/:id", (req, res) => {
  const sql = "SELECT * FROM daftar_hewan WHERE id = ?";

  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send("Database error: " + err.message);

    if (results.length === 0)
      return res.status(404).send("Hewan tidak ditemukan");

    res.render("detail", {
      title: results[0].jenis_hewan,
      hewan: results[0],
    });
  });
});

module.exports = router;
