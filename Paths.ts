interface Path {
    path: string,
    folder: string,
    view: string
}

export const pathList: Path[] = [
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