import { Schema } from "mongoose";

const commentaryModel = Schema(
    {
        title:{
        type: String,
        required: [true, 'Title is required'],

        },
        description:{
            type: String,
            required: [true, 'Description is required'],
            maxLength: [125, 'Description cannot be more than 125 characters'],
        }
    }
)

export default model('Commentary', commentaryModel)