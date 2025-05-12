import Post from "../post/post.model.js"
import Commentary from './commentary.model.js'

export const addCommentary = async(req, res)=>{
    try {
        const {postId, ...data} = req.body

        const post = await Post.findById(postId)

        if(!post) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'Post not found'
                }
            )
        }

        const commentary = new Commentary(
            {
                ...data,
                post: [post._id]
            }
        )

        await commentary.save()

        return res.status(200).send(
            {
                success: true,
                message: 'commentary added succesfully',
                commentary
            }
        )

    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error adding commentary',
                err
            }
        )
    }
}

export const getCommentaries = async(req, res)=>{
    try {
        const comnentaries = await Commentary.find()
            .populate('post')

        if(!comnentaries) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'Commentaries not found'
                }
            )
        }

        return res.status(200).send(
            {
                success: true,
                message: 'Commentaries found',
                comnentaries
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error getting commentaries',
                err
            }
        )
    }
}