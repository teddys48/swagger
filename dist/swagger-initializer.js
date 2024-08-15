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
          url: "https://ec2-13-210-200-151.ap-southeast-2.compute.amazonaws.com",
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
            tags: ["Auth"],
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
        "/api/auth/refresh-token": {
          get: {
            tags: ["Auth"],
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
        "/api/users/": {
          get: {
            tags: ["Users"],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/users/find": {
          get: {
            tags: ["Users"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/users/create": {
          post: {
            tags: ["Users"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      username: {
                        type: "string",
                        default: "",
                      },
                      password: {
                        type: "string",
                        default: "",
                      },
                      role_id: {
                        type: "number",
                        default: 1,
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      nip: {
                        type: "string",
                        default: "",
                      },
                      nrk: {
                        type: "string",
                        default: "",
                      },
                      perusahaan_id: {
                        type: "number",
                        default: 1,
                      },
                      instansi: {
                        type: "string",
                        default: "",
                      },
                      jabatan: {
                        type: "string",
                        default: "",
                      },
                      phone: {
                        type: "string",
                        default: "",
                      },
                      fullname: {
                        type: "string",
                        default: "",
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/users/update": {
          post: {
            tags: ["Users"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      username: {
                        type: "string",
                        default: "",
                      },
                      password: {
                        type: "string",
                        default: "",
                      },
                      role_id: {
                        type: "number",
                        default: 1,
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      nip: {
                        type: "string",
                        default: "",
                      },
                      nrk: {
                        type: "string",
                        default: "",
                      },
                      perusahaan_id: {
                        type: "number",
                        default: 1,
                      },
                      instansi: {
                        type: "string",
                        default: "",
                      },
                      jabatan: {
                        type: "string",
                        default: "",
                      },
                      phone: {
                        type: "string",
                        default: "",
                      },
                      fullname: {
                        type: "string",
                        default: "",
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/users/delete": {
          get: {
            tags: ["Users"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/role/": {
          get: {
            tags: ["Role"],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/role/find": {
          get: {
            tags: ["Role"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/role/create": {
          post: {
            tags: ["Role"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        default: "",
                      },
                      description: {
                        type: "string",
                        default: "",
                      },
                      menu: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            menu_id: {
                              type: "number",
                              default: 0,
                            },
                            action: {
                              type: "string",
                              default: "",
                            },
                          },
                        },
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/role/update": {
          post: {
            tags: ["Role"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        default: "",
                      },
                      description: {
                        type: "string",
                        default: "",
                      },
                      menu: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            menu_id: {
                              type: "number",
                              default: 0,
                            },
                            action: {
                              type: "string",
                              default: "",
                            },
                          },
                        },
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/role/delete": {
          get: {
            tags: ["Role"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/menu/": {
          get: {
            tags: ["Menu"],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/menu/find": {
          get: {
            tags: ["Menu"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "array",
                          items: {
                            type: "object",
                            properties: {},
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
        "/api/menu/create": {
          post: {
            tags: ["Menu"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        default: "",
                      },
                      menu_parent_id: {
                        type: "number",
                        default: 0,
                      },
                      icon: {
                        type: "string",
                        default: "",
                      },
                      sort: {
                        type: "number",
                        default: 0,
                      },
                      hidden_data: {
                        type: "boolean",
                        default: false,
                      },
                      description: {
                        type: "string",
                        default: "",
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/menu/update": {
          post: {
            tags: ["Menu"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    pproperties: {
                      name: {
                        type: "string",
                        default: "",
                      },
                      menu_parent_id: {
                        type: "number",
                        default: 0,
                      },
                      icon: {
                        type: "string",
                        default: "",
                      },
                      sort: {
                        type: "number",
                        default: 0,
                      },
                      hidden_data: {
                        type: "boolean",
                        default: false,
                      },
                      description: {
                        type: "string",
                        default: "",
                      },
                    },
                    required: ["username", "password", "role_id", "email"],
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
                          type: "string",
                          default: null,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/api/menu/delete": {
          get: {
            tags: ["Menu"],
            parameters: [
              {
                name: "id",
                in: "query",
              },
            ],
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
                          type: "string",
                          default: null,
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
    dom_id: "#swagger-ui",
    deepLinking: true,
    validatorUrl: null,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
