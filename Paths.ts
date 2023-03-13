interface Path {
    path: string,
    folder: string,
    view: string
}

export const paths: Path[] = [
    {
        path: "index.html",
        folder: "base",
        view: "/welcome"
    },
    {
        path: "welcome.html",
        folder: "base",
        view: "/welcome"
    },
    {
        path: "404.html",
        folder: "base",
        view: "/error"
    },
    {
        path: "logged-user.html",
        folder: "alumni",
        view: "logged-user"
    }
]

interface File {
    name: string
}

export const staticFiles: File[] = [
    {
        name: "leandro.jpg"
    },
    {
        name: "output.css"
    }
]