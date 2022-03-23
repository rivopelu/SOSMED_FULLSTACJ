
const PostMessage = require ('../models/postMessage')

exports.getPosts = async(req, res) => {
    try {
        const postMessage = await PostMessage.find();

        // console.log(PostMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


exports.createPost = (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post);
    try {
        newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}