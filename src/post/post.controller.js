import Post from './post.model.js'

export const addPost = async (req, res) =>{
    try {
        const data = req.body

        const post = new Post(data)

        await post.save()

        return res.status(200).send(
            {
                succes: true,
                message: 'Post added successfully',
                post
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

export const getPosts = async(req, res) =>{
    try {
        const posts = await Post.find()

        if(posts.length === 0){
            return res.status(404).send(
                {
                    succes: false,
                    message: 'No publication found'
                }
            )
        }

        return res.status(200).send(
            {
                succes: true,
                message: 'Publications found',
                posts
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error getting posts',
                err
            }
        )
    }
}