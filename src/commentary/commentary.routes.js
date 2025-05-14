import { Router } from "express"
import { addCommentary, getPostCommentaries } from "./commentary.controller.js"

const api = Router()


api.post(
    '/',
    addCommentary
)

api.get(
    '/:postId',
    getPostCommentaries
)

export default api