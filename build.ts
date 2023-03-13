import edge from 'edge.js'
import { join } from 'path'
import { loggedUser, users } from './Users'
import { pathList } from './Paths'
import fs from 'fs'

edge.mount(join(__dirname, 'views'))

const paths = [
    { name: "logged user", path: "/logged-user" }

]

pathList.map(item => {
    edge.render(join(item.folder, item.view), {
        pathList: paths,
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


