const db = require("../models/index.js");

module.exports.getAllAccount = async function (req, res) {
    try {
        const findAccount = await db.Account.findAll();
        return res.status(200).json({
            success: true,
            data: findAccount
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.addAccount = async function (req, res) {
    const name = req.body.name;
    try {
        const account = await db.Account.create({
            name
        })
        return res.status(200).json({
            success: true,
            message: "Account added!",
            data: account
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}