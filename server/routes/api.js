const express = require("express");
const router = express.Router();

const Story = require("../models/storyModel")


router.get('/', (req, res) => res.send('API is working propperly'))


router.get("/stories", async (req, res) => {
    try{
        const stories = await Story.find()
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/stories", async (req, res) =>{
    const story = new Story ( {
        title:req.body.title,
        name: req.body.name,
    })

    try{
        const savedStory = await story.save()
        res.json(savedStory)
    }catch (err) {
        res.json({Message: err})
    }
})


router.delete("/stories/:postId", async (req, res) => {
    try{
        const removedPost = await Story.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({Message: err})
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

router.patch("/stories/:postID", async (req, res) => {
    try{
        const stories = await Story.updateOne(
            { _id: req.params.postID },
            {$set: {
                title:req.body.title,
                name: req.body.name,}
            }
        )
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})

module.exports = router