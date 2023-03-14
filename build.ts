import edge from 'edge.js'
import { join } from 'path'
import { loggedUser, users } from './Users'
import { paths } from './Paths'
import fs from 'fs'

edge.mount(join(__dirname, 'views'))

const isProduction = (process.env.PRODUCTION === 'true')
const pathList = [
    { name: "logged user", path: '/logged-user' + (isProduction ? '.html' : "") }

]

paths.map(item => {
    edge.render(join(item.folder, item.view), {
        pathList: pathList,
        loggedUser: loggedUser,
        localhost: "127.0.0.1:3000"
    }).then((data) => {
        const file = new Blob([data], { type: 'text/plain' })
        fs.writeFile(join(__dirname, "build", item.path), data, err => {
            if (err) {
                console.error(err);
            }
        })
    })
})

console.log("~~~ build files created ~~~")


