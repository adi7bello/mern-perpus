const router = require("express").Router();
let Buku = require("../models/buku.model");

router.route("/").get((req, res) => {
  Buku.find()
    .then((buku) => res.json(buku))
    .catch((err) => res.status(400).json("Error: " + err));
});

// TAMBAH BUKU
router.route("/add").post((req, res) => {
  const idBuku = req.body.idBuku;
  const judul = req.body.judul;
  const penerbit = req.body.penerbit;
  const jenisBuku = req.body.jenisBuku;

  const newBuku = new Buku({
    idBuku,
    judul,
    penerbit,
    jenisBuku,
  });

  newBuku
    .save()
    .then(() => res.json("Buku ditambah!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//TAMPIL BUKU
router.route("/:id").get((req, res) => {
  Buku.findById(req.params.id)
    .then((buku) => res.json(buku))
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE BUKU
router.route("/:id").delete((req, res) => {
  Buku.findByIdAndDelete(req.params.id)
    .then(() => res.json("Buku dihapus!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE BUKU
router.route("/update/:id").post((req, res) => {
  Buku.findById(req.params.id)
    .then((buku) => {
      buku.idBuku = req.body.idBuku;
      buku.judul = req.body.judul;
      buku.penerbit = req.body.penerbit;
      buku.jenisBuku = req.body.jenisBuku;

      buku
        .save()
        .then(() => res.json("Buku diperbaruhi!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
