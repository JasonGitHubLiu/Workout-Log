const Exercises = require('../models/postModel')
const Comments = require('../models/commentModel')


module.exports.seed = async (req, res) => {
    // await Exercises.deleteMany({})
    // await Exercises.create(posts)
    res.redirect('/posts')
}

module.exports.index = async (req, res) => {
    try {
        console.log('inside index')
        console.log(req.user)
        const posts = await Exercises.find({user:req.user}).sort({ createdAt: 1 })
        res.status(200).json(posts)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    console.log('inside delete')
    try {
        // first find the post, store it in a variable, then delete it from database
        const post = await Exercises.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        await Comments.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: post.comments 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedPost = await Exercises.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPost)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const post = await Exercises.create(req.body)
        res.status(200).json(post)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const post = await Exercises.findById(req.params.id).populate('comments')
        res.status(200).json(post)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


