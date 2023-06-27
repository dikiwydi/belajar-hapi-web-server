const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return `home page `;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return `halaman tidak bisa di akses dengan method tersebut`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return `halaman about`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return `halaman about tidak bisa di akses dengan mehtod tersebut`;
    },
  },
  {
    method: "GET",
    path: "/hello/{username?}",
    handler: (request, h) => {
      const { username = "strangers" } = request.params;
      return `halo ${username}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return `halaman tidak ada`;
    },
  },
];
module.exports = routes;
