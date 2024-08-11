window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    spec: {
      openapi: "3.0.0",
      info: {
        title: "KMPRO API",
      },
      servers: [
        {
          url: "http://api.example.com/v1",
          description:
            "Optional server description, e.g. Main (production) server",
        },
        {
          url: "http://staging-api.example.com",
          description:
            "Optional server description, e.g. Internal staging server for testing",
        },
      ],
      paths: {
        "/user2": {
          get: {
            summary: "Returns a list of users.",
            tags: ["auth"],
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
        "/users": {
          get: {
            summary: "Returns a list of users.",
            tags: ["auth"],
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
