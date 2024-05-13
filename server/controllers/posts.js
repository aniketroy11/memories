import PostMessage from '../models/postSchema.js'

export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async(req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post);
    try {
       await newPost.save();
       console.log(newPost);
       res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json( { message:error.message });
    }
}

