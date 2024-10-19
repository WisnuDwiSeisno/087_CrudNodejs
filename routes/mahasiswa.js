import express, {Router} from "express";


const router = express.Router();

const mahasiswa = [
    {
    Nama: "Baihaqi",
    NIM: "100",
    Alamat: "Sorong",
    Umur: 20,
    },
    
    {
    Nama: "Alvien",
    NIM: "078",
    Alamat: "Kontrakan Alvien",
    Umur: 20,
    }
];

router.get("/",(req, res) => {
    res.send(mahasiswa);
});

export default router;