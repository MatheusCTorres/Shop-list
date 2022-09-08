const Shop = require("../models/ShopModel")
const mongoose = require("mongoose")

// get all shops
const getShops = async (req, res) => {
    const shops = await Shop.find({})

    res.status(200).json(shops)
}

// get a single shop
const getShop = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such shop" })
    }

    const shop = await Shop.findById(id)

    if (!shop) {
        return res.status(404).json({ error: "No such shop" })
    }

    res.status(200).json(shop)
}

// create a new shop
const createShop = async (req, res) => {
    const { title, amount } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push("title")
    }

    if (!amount) {
        emptyFields.push("amount")
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "please fill in all the fields", emptyFields })
    }

    // add to database
    try {
        const shop = await Shop.create({ title, amount })
        res.status(200).json(shop)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a shop
const deleteShop = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such shop" })
    }

    const shop = await Shop.findOneAndDelete({ _id: id })

    if (!shop) {
        return res.status(400).json({ error: "No such shop" })
    }

    res.status(200).json(shop)
}

// update a shop
const updateShop = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such shop" })
    }

    const shop = await Shop.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!shop) {
        return res.status(400).json({ error: "No such shop" })
    }

    res.status(200).json(shop)
}

module.exports = {
    getShops,
    getShop,
    createShop,
    deleteShop,
    updateShop
}