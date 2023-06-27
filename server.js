const Hapi = require("@hapi/hapi");

const init = () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });
  server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};
