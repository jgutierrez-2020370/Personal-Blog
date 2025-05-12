import { Router } from "express"
import { addPost, getPosts } from "./post.controller.js"

const api = Router()

api.get(
    '/',
    getPosts
)

api.post(
    '/',
    addPost
)

export default api