import Post from "../post/post.model"
import Commentary from './commentary.model'

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
                message: 'General error adding post',
                err
            }
        )
    }
}