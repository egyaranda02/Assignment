const db = require("../models/index.js");
const { Op } = require('sequelize');
const e = require("express");

module.exports.getAllTransaction = async function (req, res) {
    try {
        const allTransaction = await db.Transaction.findAll();
        return res.status(200).json({
            success: true,
            data: allTransaction
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.inputTransaction = async function (req, res) {
    const {
        accountId,
        transactionDate,
        description,
        debitCreditStatus,
        amount
    } = req.body;
    try {
        const transaction = await db.Transaction.create({
            accountId,
            transactionDate,
            description,
            debitCreditStatus,
            amount
        });
        return res.status(200).json({
            success: true,
            message: "Transaction added!",
            data: transaction
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.getPoint = async function (req, res) {
    try {
        const transactions = await db.Account.findAll({
            order: [
                ['accountId', 'ASC']
            ],
            include: [
                {
                    model: db.Transaction,
                    attributes: ['description', 'amount']
                }
            ]
        })
        let data = [];
        transactions.forEach((account) => {
            let totalPoints = 0;
            account.Transactions.forEach((transaction) => {
                let tempAmount = transaction.amount;
                if (transaction.description == "Beli pulsa") {
                    if (transaction.amount > 30000) {
                        tempAmount -= 10000;
                        totalPoints += (20000 / 1000 * 1)
                        tempAmount -= 20000;
                        totalPoints += (tempAmount / 1000 * 2)
                    } else if (transaction.amount > 10000 && transaction.amount <= 30000) {
                        tempAmount -= 10000;
                        totalPoints += (tempAmount / 1000 * 1)
                    }
                } else if (transaction.description == "Bayar Listrik") {
                    if (transaction.amount > 100000) {
                        tempAmount -= 50000;
                        totalPoints += (50000 / 2000 * 1)
                        tempAmount -= 50000;
                        totalPoints += (tempAmount / 2000 * 2)
                    } else if (transaction.amount > 50000 && transaction.amount <= 100000) {
                        tempAmount -= 50000;
                        totalPoints += (tempAmount / 2000 * 1)
                    }
                }
            })
            const dataAcc = {
                account: account.accountId,
                name: account.name,
                totalPoint: totalPoints
            }
            data.push(dataAcc)
        })
        return res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports.printReport = async function (req, res) {
    try {
        const {
            accountId,
            StartDate,
            EndDate
        } = req.query
        const transactions = await db.Transaction.findAll({
            where: {
                accountId,
                transactionDate: {
                    [Op.and]: {
                        [Op.gte]: StartDate,
                        [Op.lte]: EndDate
                    }
                }
            }
        })
        return res.status(200).json({
            success: true,
            data: transactions
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}