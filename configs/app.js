'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors' 
import { limiter } from '../middlewares/rate.limit.js'
import postRoutes from '../src/post/post.routes.js'
import commentaryRoutes from '../src/commentary/commentary.routes.js'

const configs = (app)=> {
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(limiter)
    app.use(helmet())
    app.use(morgan('dev'))

}

const routes = (app)=> {
    app.use('/Post', postRoutes)
    app.use('/Comentary', commentaryRoutes)
}

export const initServer = async()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`server running in port ${process.env.PORT}`)
    } catch (err) {
        console.error('Server init failed', err)
    }
}