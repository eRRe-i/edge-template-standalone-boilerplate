interface Path {
    folder: string,
    view: string,
    path?: string,
}

export const pathList = [
    {
        folder: "alumni",
        view: "/test-user"
    }
]

export const netlifyBasePathList: Path[] = [
    {
        folder: "base",
        view: "/welcome",
        path: "index.html"
    },
    {
        folder: "base",
        view: "/welcome",
        path: "welcome.html"
    },
    {
        folder: "base",
        view: "/error",
        path: "404.html"
    },
]
