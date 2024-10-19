import express, {Router} from "express";


const router = express.Router();

const mobil = [
    {
    merk: "Toyota",
    model: "Sport",
    warna: "awd",
    tahun: 213,
    },
    
    {
    merk: "Toyota",
    model: "Sportawd",
    warna: "awawdd",
    tahun: 21233,
    }
];

router.get("/",(req, res) => {
    res.send(mobil);
});

export default router;