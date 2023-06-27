const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "home page";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "maaf halam tidak bisa di akses dengan method tersbut";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "about page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "halman tidak bisa di akses dengan method tersebut";
        },
    },
    {
        method: "GET",
        path: "/hello/{username?}",
        handler: (request, h) => {
            const { username = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang === "id") {
                return `hai ${username}`;
            } else {
                return `hallo ${username}`;
            }
        },
    },
    {
        method: "POST",
        path: "/login",
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `welcome ${username}`;
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "halaman tidak di temukan";
        },
    },
];

module.exports = routes;
