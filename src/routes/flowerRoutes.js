const express = require("express");
const router = express.Router();
const { getFlowers, addFlower, deleteFlower } = require("../controllers/flowerControllers");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });


router.get("/", getFlowers);
router.post("/", upload.single("image"), addFlower);
router.delete("/:id", deleteFlower);

module.exports = router;
