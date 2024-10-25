import express, {Router} from "express";


const router = express.Router();

const motor = [
    {
    Nama: "Honda Astrea",
    Seri: "Grand Bulus",
    Tahun: "1998",
    Warna: "Merah",
    },
    
    {
    Nama: "Vario",
    Seri: "Karbu",
    Tahun: "2007",
    Warna: "Pink",
    }
];

router.get("/",(req, res) => {
    res.send(motor);
});

export default router;