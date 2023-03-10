import edge from 'edge.js'
import { join } from 'path'
import { IncomingMessage, createServer } from 'http'
import url from 'url'
import { loggedUser, users } from './Users'
import fs from 'fs'

edge.mount(join(__dirname, 'views'))


createServer(async (_req, res) => {

    const reqUrl = url.parse(_req.url!).pathname


    if (reqUrl === "/") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(
            await edge.render('welcome', {
                loggedUser: loggedUser,
            })
        )
    } else if (reqUrl === "/loggeduser") {
        res.writeHead(200, { 'content-type': 'text/html' })

        res.end(
            await edge.render('userRender', {
                loggedUser: loggedUser,
            })
        )
    } else if (reqUrl!.match("\.css$")) {
        let cssPath = join(__dirname, 'public', reqUrl!);
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);

    } else if (reqUrl!.match("\.jpg$")) {
        let cssPath = join(__dirname, 'public', reqUrl!);
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    }
}).listen(3000, () => {
    console.log('Listening on 127.0.0.1:3000')
})