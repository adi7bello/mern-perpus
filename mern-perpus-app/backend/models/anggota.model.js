const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const anggotaSchema = new Schema(
  {
    idAnggota: { type: String, required: true },
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    tanggalLahir: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Anggota = mongoose.model("Anggota", anggotaSchema);

module.exports = Anggota;
