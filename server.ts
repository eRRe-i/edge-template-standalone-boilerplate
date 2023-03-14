const express = require("express");
import { Request, Response } from 'express'
import edge from 'edge.js'
import { loggedUser, users } from './Users'
import { join } from 'path'


const app = express();
const router = express.Router();

edge.mount(join(__dirname, 'views'))

const isProduction = false
// (process.env.PRODUCTION === 'true')
const pathList = [
    { name: "test-user", path: '/test-user' + (isProduction ? '.html' : '') }
]

app.use(express.static(join(__dirname, '')))

app.get(['/', '/welcome'], async (req: Request, res: Response) => {
    const data = await edge.render('base/welcome', {
        pathList: pathList,
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
        pathList: pathList,
    })
    res.send(data)
});


app.listen(8080, () => {
    console.log('~~ Listening on port 8080 ~~')
})

// module.exports.handler = serverless(app)