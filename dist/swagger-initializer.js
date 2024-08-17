// var realPassword = "his";
// var password = prompt("Password", "");
// if (password != realPassword) {
//   window.location.reload();
// }

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
                      email_or_nip: {
                        type: "string",
                        default: "admin@gmail.com",
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
        "/api/corporation/": {
          get: {
            tags: ["Corporation"],
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
        "/api/corporation/find": {
          get: {
            tags: ["Corporation"],
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
        "/api/corporation/create": {
          post: {
            tags: ["Corporation"],
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
                      address: {
                        type: "string",
                        default: "0",
                      },
                      npwp: {
                        type: "string",
                        default: "",
                      },
                      director_name: {
                        type: "string",
                        default: "",
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      fax: {
                        type: "string",
                        default: "",
                      },
                      notaris_number: {
                        type: "string",
                        default: "",
                      },
                      notaris_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                    },
                    required: ["*"],
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
        "/api/corporation/update": {
          post: {
            tags: ["Corporation"],
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
                      address: {
                        type: "string",
                        default: "0",
                      },
                      npwp: {
                        type: "string",
                        default: "",
                      },
                      director_name: {
                        type: "string",
                        default: "",
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      fax: {
                        type: "string",
                        default: "",
                      },
                      notaris_number: {
                        type: "string",
                        default: "",
                      },
                      notaris_date: {
                        type: "string",
                        default: "2024-01-01",
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
        "/api/corporation/delete": {
          get: {
            tags: ["Corporation"],
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
        "/api/jobs/": {
          get: {
            tags: ["Jobs"],
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
        "/api/jobs/find": {
          get: {
            tags: ["Jobs"],
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
        "/api/jobs/create": {
          post: {
            tags: ["Jobs"],
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
                      project_id: {
                        type: "number",
                        default: 0,
                      },
                      data: {
                        type: "string",
                        default: "JSON Stringify",
                      },
                    },
                    required: ["name", "project_id", "data"],
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
        "/api/jobs/update": {
          post: {
            tags: ["Jobs"],
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
                      project_id: {
                        type: "number",
                        default: 0,
                      },
                      data: {
                        type: "string",
                        default: "JSON Stringify",
                      },
                    },
                    required: ["name", "project_id", "data"],
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
        "/api/jobs/delete": {
          get: {
            tags: ["Jobs"],
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
        "/api/jobs/approve": {
          get: {
            tags: ["Jobs"],
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
        "/api/project/": {
          get: {
            tags: ["Project"],
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
        "/api/project/find": {
          get: {
            tags: ["Project"],
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
        "/api/project/create": {
          post: {
            tags: ["Project"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      activity_name: {
                        type: "string",
                        default: "",
                      },
                      package_name: {
                        type: "string",
                        default: "",
                      },
                      account_code: {
                        type: "string",
                        default: "",
                      },
                      account_description: {
                        type: "string",
                        default: "",
                      },
                      corporation_id: {
                        type: "number",
                        default: 0,
                      },
                      executor: {
                        type: "string",
                        default: "",
                      },
                      npwp: {
                        type: "string",
                        default: "",
                      },
                      director: {
                        type: "string",
                        default: "",
                      },
                      position: {
                        type: "string",
                        default: "",
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      fax: {
                        type: "string",
                        default: "",
                      },
                      notaris_number: {
                        type: "string",
                        default: "",
                      },
                      notaris_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      notaris_name: {
                        type: "string",
                        default: "",
                      },
                      rup_id: {
                        type: "string",
                        default: "",
                      },
                      catalog_id: {
                        type: "string",
                        default: "",
                      },
                      sppbj_number: {
                        type: "string",
                        default: "",
                      },
                      sppbj_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_date_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date_letter: {
                        type: "string",
                        default: "",
                      },
                      contract_month: {
                        type: "string",
                        default: "",
                      },
                      contract_day: {
                        type: "string",
                        default: "",
                      },
                      contract_add_number: {
                        type: "string",
                        default: "",
                      },
                      contract_add_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_date_add_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date_add_letter: {
                        type: "string",
                        default: "",
                      },
                      contract_add_month: {
                        type: "string",
                        default: "",
                      },
                      contract_add_day: {
                        type: "string",
                        default: "",
                      },
                      order_letter_number: {
                        type: "string",
                        default: "",
                      },
                      sp_date: {
                        type: "string",
                        default: "",
                      },
                      spmk_number: {
                        type: "string",
                        default: "",
                      },
                      spmk_date: {
                        type: "string",
                        default: "",
                      },
                      implementation_schedule_day: {
                        type: "string",
                        default: "",
                      },
                      start: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      end: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      kelurahan: {
                        type: "string",
                        default: "",
                      },
                      kecamatan: {
                        type: "string",
                        default: "",
                      },
                      sppbj_value_letter: {
                        type: "string",
                        default: "",
                      },
                      sppbj_value: {
                        type: "string",
                        default: "",
                      },
                      nilai_e_purchasing_ok: {
                        type: "number",
                        default: 0,
                      },
                      nilai_e_purchasing: {
                        type: "number",
                        default: 0,
                      },
                      nilai_pembulatan: {
                        type: "number",
                        default: 0,
                      },
                      contract_value: {
                        type: "number",
                        default: 0,
                      },
                      contract_value_letter: {
                        type: "string",
                        default: "",
                      },
                      business_classification: {
                        type: "string",
                        default: "",
                      },
                      volume: {
                        type: "string",
                        default: "",
                      },
                      unit: {
                        type: "string",
                        default: "",
                      },
                      addendum_type: {
                        type: "string",
                        default: "",
                      },
                      target_percentage: {
                        type: "number",
                        default: 0,
                      },
                      progress_plan: {
                        type: "number",
                        default: 0,
                      },
                      total_cumulative_progress_plan: {
                        type: "number",
                        default: 0,
                      },
                      actual_progress: {
                        type: "number",
                        default: 0,
                      },
                      total_cumulative_actual_progress: {
                        type: "number",
                        default: 0,
                      },
                      deviation: {
                        type: "number",
                        default: 0,
                      },
                    },
                    required: ["*"],
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
        "/api/project/update": {
          post: {
            tags: ["Project"],
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
                      activity_name: {
                        type: "string",
                        default: "",
                      },
                      package_name: {
                        type: "string",
                        default: "",
                      },
                      account_code: {
                        type: "string",
                        default: "",
                      },
                      account_description: {
                        type: "string",
                        default: "",
                      },
                      corporation_id: {
                        type: "number",
                        default: 0,
                      },
                      executor: {
                        type: "string",
                        default: "",
                      },
                      npwp: {
                        type: "string",
                        default: "",
                      },
                      director: {
                        type: "string",
                        default: "",
                      },
                      position: {
                        type: "string",
                        default: "",
                      },
                      email: {
                        type: "string",
                        default: "",
                      },
                      fax: {
                        type: "string",
                        default: "",
                      },
                      notaris_number: {
                        type: "string",
                        default: "",
                      },
                      notaris_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      notaris_name: {
                        type: "string",
                        default: "",
                      },
                      rup_id: {
                        type: "string",
                        default: "",
                      },
                      catalog_id: {
                        type: "string",
                        default: "",
                      },
                      sppbj_number: {
                        type: "string",
                        default: "",
                      },
                      sppbj_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_date_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date_letter: {
                        type: "string",
                        default: "",
                      },
                      contract_month: {
                        type: "string",
                        default: "",
                      },
                      contract_day: {
                        type: "string",
                        default: "",
                      },
                      contract_add_number: {
                        type: "string",
                        default: "",
                      },
                      contract_add_date: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      contract_date_add_number: {
                        type: "string",
                        default: "",
                      },
                      contract_date_add_letter: {
                        type: "string",
                        default: "",
                      },
                      contract_add_month: {
                        type: "string",
                        default: "",
                      },
                      contract_add_day: {
                        type: "string",
                        default: "",
                      },
                      order_letter_number: {
                        type: "string",
                        default: "",
                      },
                      sp_date: {
                        type: "string",
                        default: "",
                      },
                      spmk_number: {
                        type: "string",
                        default: "",
                      },
                      spmk_date: {
                        type: "string",
                        default: "",
                      },
                      implementation_schedule_day: {
                        type: "string",
                        default: "",
                      },
                      start: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      end: {
                        type: "string",
                        default: "2024-01-01",
                      },
                      kelurahan: {
                        type: "string",
                        default: "",
                      },
                      kecamatan: {
                        type: "string",
                        default: "",
                      },
                      sppbj_value_letter: {
                        type: "string",
                        default: "",
                      },
                      sppbj_value: {
                        type: "string",
                        default: "",
                      },
                      nilai_e_purchasing_ok: {
                        type: "number",
                        default: 0,
                      },
                      nilai_e_purchasing: {
                        type: "number",
                        default: 0,
                      },
                      nilai_pembulatan: {
                        type: "number",
                        default: 0,
                      },
                      contract_value: {
                        type: "number",
                        default: 0,
                      },
                      contract_value_letter: {
                        type: "string",
                        default: "",
                      },
                      business_classification: {
                        type: "string",
                        default: "",
                      },
                      volume: {
                        type: "string",
                        default: "",
                      },
                      unit: {
                        type: "string",
                        default: "",
                      },
                      addendum_type: {
                        type: "string",
                        default: "",
                      },
                      target_percentage: {
                        type: "number",
                        default: 0,
                      },
                      progress_plan: {
                        type: "number",
                        default: 0,
                      },
                      total_cumulative_progress_plan: {
                        type: "number",
                        default: 0,
                      },
                      actual_progress: {
                        type: "number",
                        default: 0,
                      },
                      total_cumulative_actual_progress: {
                        type: "number",
                        default: 0,
                      },
                      deviation: {
                        type: "number",
                        default: 0,
                      },
                    },
                    required: ["*"],
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
        "/api/project/delete": {
          get: {
            tags: ["Project"],
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
