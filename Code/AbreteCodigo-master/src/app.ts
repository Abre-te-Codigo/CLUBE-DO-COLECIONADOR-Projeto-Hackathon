import express from 'express'

import cors from 'cors'

import mongoose from 'mongoose'

import routes from './routes'

class App {
    public express: express.Application

    constructor () {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares () {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        mongoose.connect('mongodb+srv://abratecode:iFood@122@cluster0.gp44n.mongodb.net/abrate?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    }

    private routes (): void {
        this.express.use(routes)
    }



}

export default new App().express