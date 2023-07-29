# web-application-api
This is a simple API with a CRUD for users. The base code is written in <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> with
<a href="https://nestjs.com/" target="_blank">Nest.js</a> framework over <a href="https://nodejs.org/en" target="_blank">Node.js</a> platform.</p>

## Features
* API for CRUD of a users (managing name, e-mail, password and phone).
* Endpoint to download an users report.

## Documentation
* Featured by Open API specification (Swagger) you can see the documentation accessing /docs endpoint.

## Next Steps
- Features
  - Login page with JWT authentication
- Architecture
  - Error handler (using interceptor annotation)
  - Define table attributes limits (data size)
- Failover
  - Handle fail database connection using a connection pool
- Security
  - Apply request body data validation to prevent inject

## Installation

```bash
$ make install
```

## Running the app

```bash
# development
$ make dev

# production mode
$ make start
```

## Test

```bash
# unit tests
$ make test
```

## License

[MIT licensed](LICENSE).
