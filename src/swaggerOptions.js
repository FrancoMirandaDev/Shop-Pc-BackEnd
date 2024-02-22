export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop PC Backend",
      version: "1.0.0",
      description: "A eccommerce backend API for Shop PC",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};
