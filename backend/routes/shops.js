const express = require("express");
const router = express();

const {
    getShops,
    getShop,
    createShop,
    deleteShop,
    updateShop
} = require('../controllers/shopController')

// get all shops
router.get("/", getShops)

// get a single shop
router.get("/:id", getShop)

// post a new shop
router.post("/", createShop)

// delete a shop
router.delete("/:id", deleteShop)

// update a shop
router.patch("/:id", updateShop)

module.exports = router;