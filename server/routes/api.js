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

router.post("/newStory", async (req, res) =>{
    const story = new Story ( {
        title:req.body.title,
        body: req.body.body,
    })

    try{
        const savedStory = await story.save()
        res.json(savedStory)
    }catch (err) {
        res.json({Message: err})
    }
})


module.exports = router