const express = require("express")
const {
    getShops,
    getShop,
    createShop,
    deleteShop,
    updateShop
} = require("../controllers/shopController")

const router = express.Router()

// GET all shops
router.get("/", getShops)

// GET a single shop
router.get("/:id", getShop)

// POST a new shop
router.post("/", createShop)

// DELETE a shop
router.delete("/:id", deleteShop)

// UPDATE a shop
router.patch("/:id", updateShop)

module.exports = router