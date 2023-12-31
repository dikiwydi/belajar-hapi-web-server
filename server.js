const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const init = () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });
  server.route(routes);
  server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};
init();
