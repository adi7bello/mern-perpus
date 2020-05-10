const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bukuSchema = new Schema({
  idBuku: { type: String, required: true },
  judul: { type: String, required: true },
  penerbit: { type: String, required: true },
  jenisBuku: { type: String, required: true },
});

const Buku = mongoose.model("Buku", bukuSchema);

module.exports = Buku;
