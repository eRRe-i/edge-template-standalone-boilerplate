const express = require("express");
import { Request, Response } from 'express'
import edge from 'edge.js'
import { join } from 'path'

import { loggedUser, users } from './Users'
import { pathList } from './Paths';


const app = express();
const router = express.Router();

edge.mount(join(__dirname, 'views'))

app.use(express.static(join(__dirname, '')))

app.get(['/', '/welcome'], async (req: Request, res: Response) => {
    const data = await edge.render('base/welcome', {
        pathList: pathList
    })
    res.send(data)
})
app.get('/test-user', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/test-user', {
        loggedUser: loggedUser
    })
    res.send(data)
})
app.get('*', async (req: Request, res: Response) => {
    const data = await edge.render('base/error', {
        pathList: pathList
    })
    res.send(data)
});


app.listen(8080, () => {
    console.log('~~ Listening on port 8080 ~~')
})

// module.exports.handler = serverless(app)