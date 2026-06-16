# Config Package in Node.js

## What is Config Package?

The `config` package in Node.js is used to manage application configuration settings separately from the source code. It allows developers to store environment-specific settings (development, testing, production) in dedicated configuration files.

---

# Installation

```bash
npm install config
```

---

# Project Structure

```text
project/
│
├── config/
│   ├── default.json
│   ├── development.json
│   └── production.json
│
├── app.js
└── package.json
```

---

# default.json

This file contains configuration values that are common across all environments.

```json
{
  "PORT": 3000,
  "DB_URL": "mongodb://localhost:27017/mydb",
  "JWT_SECRET": "mysecret"
}
```

---

# development.json

Configuration values specific to the development environment.

```json
{
  "PORT": 5000,
  "DB_URL": "mongodb://localhost:27017/devdb"
}
```

---

# production.json

Configuration values specific to the production environment.

```json
{
  "PORT": 8000,
  "DB_URL": "mongodb://production-server/db"
}
```

---

# Using Config in Node.js

```javascript
const config = require("config");

const port = config.get("PORT");
const dbUrl = config.get("DB_URL");

console.log(port);
console.log(dbUrl);
```

### Output (Development Environment)

```text
5000
mongodb://localhost:27017/devdb
```

---

# Selecting Environment

The `config` package automatically loads configuration files based on the value of the `NODE_ENV` environment variable.

## Linux / macOS

```bash
export NODE_ENV=production
node app.js
```

## Windows CMD

```cmd
set NODE_ENV=production
node app.js
```

## PowerShell

```powershell
$env:NODE_ENV="production"
node app.js
```

Now `production.json` will be loaded automatically.

---

# Real-World Example

## config/default.json

```json
{
  "JWT_KEY": "umar123",
  "MONGO_URI": "mongodb://localhost:27017/bagify"
}
```

---

## db.js

```javascript
const mongoose = require("mongoose");
const config = require("config");

mongoose.connect(config.get("MONGO_URI"));
```

---

## auth.js

```javascript
const jwt = require("jsonwebtoken");
const config = require("config");

const token = jwt.sign(
  { id: user._id },
  config.get("JWT_KEY")
);
```

---

# Checking if a Configuration Exists

```javascript
const config = require("config");

if (!config.has("JWT_KEY")) {
    console.log("JWT_KEY is missing");
}
```

---

# Why Use Config Package?

## Without Config

```javascript
const JWT_KEY = "abc123";
const PORT = 3000;
```

### Problems

- Sensitive values are hardcoded.
- Difficult to manage multiple environments.
- Configuration changes require code modifications.
- Less maintainable and less secure.

---

## With Config

```javascript
const config = require("config");

const JWT_KEY = config.get("JWT_KEY");
const PORT = config.get("PORT");
```

### Benefits

- Clean and organized code.
- Environment-specific configurations.
- Easy maintenance.
- Centralized configuration management.
- Better security practices.
- Improved scalability.

---

# Common Methods

## Get a Value

```javascript
config.get("PORT");
```

## Check if a Value Exists

```javascript
config.has("PORT");
```

---

# Interview Definition

The `config` package in Node.js is a configuration management library that allows developers to separate application settings from source code. It supports environment-specific configuration files such as development, testing, and production, making applications easier to maintain, secure, and deploy.

---

# Best Practices

1. Keep secrets out of source code.
2. Store configuration files inside a dedicated `config` folder.
3. Use different configuration files for different environments.
4. Never commit sensitive production secrets to public repositories.
5. Access configuration values using `config.get()` instead of hardcoding them.

---

# Summary

The `config` package helps manage application settings in a structured way. It separates configuration from business logic, supports multiple environments, improves maintainability, and makes Node.js applications easier to deploy and scale.