# RESTful API Node Server Music Streaming App 

This backend was initially forked from the following boilerplate and then altered to meet the project requirements:
https://github.com/hagopj13/node-express-boilerplate



## Manual Installation

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
rename .env.example to .env

# open .env and modify the environment variables (if needed)
```


## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using JWT and passport
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)


### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Artist routes**:\
`POST /v1/artists` - create an artist\
`GET /v1/artists` - get all artists\

**Albums routes**:\
`POST /v1/albums` - create an albums\
`GET /v1/albums` - get all albums\


