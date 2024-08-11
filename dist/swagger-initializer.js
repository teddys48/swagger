window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    spec: {
      openapi: "3.0.0",
      info: {
        title: "KMPRO API",
      },
      requestInterceptor: (x) => {
        x.headers.Origin = "*";
        return x;
      },
      responseInterceptor: (x) => {
        x.headers.Origin = "*";
        return x;
      },
      components: {
        // schemas: ["./src/validation"],
        securitySchemes: {
          bearer: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearer: [],
        },
      ],
      servers: [
        {
          url: "https://ec2-3-25-193-79.ap-southeast-2.compute.amazonaws.com",
          description: "Production",
        },
        // {
        //   url: "http://staging-api.example.com",
        //   description:
        //     "Optional server description, e.g. Internal staging server for testing",
        // },
      ],
      paths: {
        "/api/auth/login": {
          post: {
            summary: "Login",
            tags: ["Auth"],
            description: "Login",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      username: {
                        type: "string",
                        default: "admin",
                      },
                      password: {
                        type: "string",
                        default: "admin",
                      },
                    },
                    required: ["username", "password"],
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Success",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        code: {
                          type: "number",
                          default: "00",
                        },
                        message: {
                          type: "string",
                          default: "success",
                        },
                        data: {
                          type: "object",
                          properties: {
                            access_token: {
                              type: "string",
                              default: "kklaNSkalnskl",
                            },
                            refresh_token: {
                              type: "string",
                              default: "kklaNSkalnskl",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/": {
          get: {
            summary: "Returns a list of users.",
            tags: ["Test"],
            description: "Optional extended description in CommonMark or HTML.",
            responses: {
              200: {
                description: "A JSON array of user names",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    dom_id: "#swagger-ui",
    deepLinking: true,
    validatorUrl: null,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
