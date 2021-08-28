const express = require("express");
const router = express.Router();

const Story = require("../models/storyModel")
const Message = require("../models/messageModel")
const Map =  require("../models/mapModel")



//stories
router.get("/stories", async (req, res) => {
    try{
        const stories = await Story.find()
       res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.get("/stories/:postID", async (req, res) => {
    try{
        const stories = await Story.find({ _id: req.params.postID })
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/stories", async (req, res) =>{
    const story = new Story ( {
        author: req.body.author,
        title: req.body.title,
        subtitle: req.body.subtitle,
        story: req.body.story,
        img: req.body._title + ".jpg",
        link: "/" + req.body._title,
    })

    try{
        const savedStory = await story.save()
        res.json(savedStory)
    }catch (err) {
        res.json({message: err})
    }
})


router.delete("/stories/:postId", async (req, res) => {
    try{
        const removedPost = await Story.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({message: err})
    }
})



router.patch("/stories/:postID", async (req, res) => {
    try{
        const stories = await Story.updateOne(
            { _id: req.params.postID },
            {$set: {
                author: req.body.author,
                title: req.body.title,
                subtitle: req.body.subtitle,
                story: req.body.story,
                img: req.body._title + ".jpg",
                link: "/" + req.body._title,
            }
            }
        )
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})


//messages
router.get("/messages", async (req, res) => {
    try{
        const messages = await Message.find()
       res.json(messages)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.get("/messages/:postID", async (req, res) => {
    try{
        const messages = await Message.find({ _id: req.params.postID })
        res.json(messages)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/messages", async (req, res) =>{
    const message = new Message ( {
        author: req.body.author,
        email: req.body.email,
        betreff: req.body.betreff,
        message: req.body.message
    })

    try{
        const savedMessage = await message.save()
        res.json(savedMessage)
    }catch (err) {
        res.json({Message: err})
    }
})


router.delete("/messages/:postId", async (req, res) => {
    try{
        const removedMessage = await Message.remove({ _id: req.params.postId })
        res.json(removedMessage)
    } catch (err) {
        res.json({Message: err})
    }
})



router.patch("/messages/:postID", async (req, res) => {
    try{
        const stories = await Message.updateOne(
            { _id: req.params.postID },
            {$set: {
                author: req.body.author,
                email: req.body.email,
                betreff: req.body.betreff,
                message: req.body.message
            }
            }
        )
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})

//MAP

router.get("/map", async (req, res) => {
    try{
        const data = await Map.find()
        res.json(data)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.get("/map/:postID", async (req, res) => {
    try{
        const data = await Map.find({ _id: req.params.postID })
        res.json(data)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/map", async (req, res) =>{
    const data = new Map ( {
        name: req.body.name,
        adress: req.body.adress,
        position: req.body.position,
        openingHours: req.body.openingHours,
    })

    try{
        const newData = await data.save()
        res.json(newData)
    }catch (err) {
        res.json({Message: err})
    }
})


router.delete("/map/:postId", async (req, res) => {
    try{
        const data = await Map.remove({ _id: req.params.postId })
        res.json(data)
    } catch (err) {
        res.json({Message: err})
    }
})



router.patch("/map/:postID", async (req, res) => {
    try{
        const data = await Map.updateOne(
            { _id: req.params.postID },
            {$set: {
                name: req.body.name,
                adress: req.body.adress,
                position: req.body.position,
                openingHours: req.body.openingHours,

            }
            }
        )
        res.json(data)
    }catch (err) {
        res.json({message: err})
    }
})


module.exports = router