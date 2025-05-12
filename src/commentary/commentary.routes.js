import { Router } from "express"
import { addCommentary, getCommentaries } from "./commentary.controller.js"

const api = Router()

api.get(
    '/',
    getCommentaries
)

api.post(
    '/',
    addCommentary
)


export default api