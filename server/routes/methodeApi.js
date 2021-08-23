const express = require("express");
const router = express.Router();

const Table = require("../models/tableModel")


router.get("/table", async (req, res) => {
    try{
        const table = await Table.find()
       res.json(table)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.post("/table", async (req, res) =>{
    const table = new Table ( {
        meta: req.body.meta,
        tableHead : req.body.tableHead,
        tableBody : req.body.tableBody
    })

    try{
        const savedTable = await table.save()
        res.json(savedTable)
    } catch (err) {
        res.json({Message: err})
    }
})

router.delete("/table/:tableId", async (req, res) => {
    try{
        const removedTable = await Table.remove({ _id: req.params.talbeId })
        res.json(removedTable)
    } catch (err) {
        res.json({Message: err})
    }
})


router.patch("/table/:tableID", async (req, res) => {
    try{
        const table = await Table.updateOne(
            { _id: req.params.tableID },
            {$set: {
                meta: req.body.meta,
                tableHead : req.body.tableHead,
                tableBody : req.body.tableBody}
            }
        )
        res.json(table)
    }catch (err) {
        res.json({message: err})
    }
})


//frontend api
router.get("/stories", async (req, res) => {
    try{
        const storiesTable = await Table.find({ _id: "60ff3af402792c3ab8178fca"})
        res.json(storiesTable)
    } catch (err) {
        res.json({Message: err})
    }
})


router.get("/messages", async (req, res) => {
    try{
        const messagesTable = await Table.find({ _id: "60ff3b6302792c3ab8178fcc"})
        res.json(messagesTable)
    } catch (err) {
        res.json({Message: err})
    }
})


module.exports = router
