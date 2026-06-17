# dotenv vs config Package in Node.js

## Overview

Both `dotenv` and `config` are used for managing application configuration, but they serve different purposes.

| Feature                     | dotenv                     | config                           |
| --------------------------- | -------------------------- | -------------------------------- |
| Purpose                     | Load environment variables | Manage application configuration |
| Storage                     | `.env` file                | `config/*.json` files            |
| Best for Secrets            | ✅ Yes                      | ❌ No                             |
| Environment-specific Config | ⚠️ Manual                  | ✅ Built-in                       |
| Access Method               | `process.env.KEY`          | `config.get("KEY")`              |
| Industry Usage              | Very Common                | Common in larger projects        |

---

# 1. Using dotenv

## Install

```bash
npm install dotenv
```

## .env File

```env
PORT=8000
JWT_SECRET=mysecretkey
MONGO_URI=mongodb://localhost:27017/Bagify
```

## app.js

```js
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.JWT_SECRET);
```

### Output

```text
8000
mysecretkey
```

---

# 2. Using config Package

## Install

```bash
npm install config
```

## Folder Structure

```text
project/
│
├── config/
│   └── development.json
│
├── app.js
└── package.json
```

## config/development.json

```json
{
    "PORT": 8000,
    "DB_NAME": "Bagify"
}
```

## app.js

```js
const config = require("config");

console.log(config.get("PORT"));
```

### Output

```text
8000
```

---

# What Should Be Stored Where?

## Store in .env

Secrets and credentials:

```env
JWT_SECRET=mysecret
MONGO_URI=mongodb://localhost:27017/Bagify
CLOUDINARY_API_KEY=xxxx
EMAIL_PASSWORD=xxxx
```

Examples:

* JWT Secret
* Database URLs
* API Keys
* SMTP Passwords
* Cloudinary Secrets
* AWS Credentials

---

## Store in config Files

Application settings:

```json
{
    "port": 8000,
    "saltRounds": 10,
    "paginationLimit": 20,
    "maxFileSize": 5
}
```

Examples:

* Port Number
* Pagination Limits
* Salt Rounds
* Feature Flags
* Application Constants

---

# Using Both Together (Production Setup)

## .env

```env
JWT_SECRET=mysecret
MONGO_URI=mongodb://localhost:27017/Bagify
```

## config/development.json

```json
{
    "port": 8000,
    "saltRounds": 10
}
```

## app.js

```js
require("dotenv").config();

const config = require("config");

const PORT = config.get("port");
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
```

---

# Recommended Setup for Bagify

Since Bagify is currently a small-to-medium Express + MongoDB project, use only `dotenv` for now.

## .env

```env
PORT=8000
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://localhost:27017/Bagify
```

## app.js

```js
require("dotenv").config();
```

## Anywhere in Project

```js
process.env.PORT
process.env.JWT_SECRET
process.env.MONGO_URI
```

This is simple, clean, and follows common industry practices.

---

# Common Mistake

❌ Wrong

```json
{
    "SECRET": "process.env.JWT_SECRET"
}
```

This stores the literal string `"process.env.JWT_SECRET"`.

✅ Correct

```js
process.env.JWT_SECRET
```

The value is read directly from the `.env` file at runtime.

---

# Final Recommendation

For Bagify:

* Use `.env` for JWT Secret, Mongo URI, API Keys, Passwords, and other sensitive data.
* Skip the `config` package for now.
* Load dotenv once in `app.js`.
* Access values using `process.env`.

When the project becomes larger and requires multiple environments (development, staging, production), you can combine `config` and `dotenv`.
