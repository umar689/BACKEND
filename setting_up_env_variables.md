# Environment Variables Guide (Windows + Node.js)

## What are Environment Variables?

Environment Variables are key-value pairs that store configuration data outside your source code.

Examples:

```env
PORT=8000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/bagify
JWT_SECRET=mysecretkey
```

Benefits:

* Keeps sensitive data out of source code
* Easy configuration changes
* Different settings for development and production
* Improves security

---

# Setting Environment Variables in Windows

## Method 1: Using PowerShell

### Temporary Variable

Available only in the current terminal session.

```powershell
$env:NODE_ENV="development"
```

Check:

```powershell
echo $env:NODE_ENV
```

---

### Permanent Variable

```powershell
[System.Environment]::SetEnvironmentVariable(
    "NODE_ENV",
    "development",
    "User"
)
```

Check:

```powershell
[System.Environment]::GetEnvironmentVariable(
    "NODE_ENV",
    "User"
)
```

---

## Method 2: Using CMD

### Permanent Variable

```cmd
setx NODE_ENV "development"
```

Check:

```cmd
echo %NODE_ENV%
```

Note:

After running `setx`, open a new terminal window.

---

## Method 3: Windows GUI

### Step 1

Press:

```text
Windows + R
```

Type:

```text
sysdm.cpl
```

### Step 2

Open:

```text
Advanced → Environment Variables
```

### Step 3

Click:

```text
New
```

Example:

```text
Variable Name: NODE_ENV
Variable Value: development
```

Click OK.

---

# Viewing Environment Variables

## PowerShell

Display all variables:

```powershell
Get-ChildItem Env:
```

Display one variable:

```powershell
echo $env:NODE_ENV
```

---

## CMD

Display all variables:

```cmd
set
```

Display one variable:

```cmd
echo %NODE_ENV%
```

---

# Using Environment Variables in Node.js

## Accessing Variables

```javascript
console.log(process.env.NODE_ENV);
```

Example:

```javascript
const port = process.env.PORT;

console.log(port);
```

---

# Using a .env File

## Install dotenv

```bash
npm install dotenv
```

---

## Create .env File

```env
PORT=8000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/bagify
JWT_SECRET=mysecretkey
```

---

## Load dotenv

At the top of app.js:

```javascript
require("dotenv").config();
```

---

## Use Variables

```javascript
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

console.log(port);
console.log(mongoURI);
```

---

# Example MongoDB Connection

```javascript
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
```

---

# Check Variables from Node.js

```bash
node -e "console.log(process.env.NODE_ENV)"
```

Output:

```text
development
```

---

# Security Best Practices

## Never Commit .env

Add `.env` to `.gitignore`.

```gitignore
.env
```

---

## Bad Practice

```javascript
const secret = "my-secret-key";
```

---

## Good Practice

```javascript
const secret = process.env.JWT_SECRET;
```

---

# Common Environment Variables

```env
PORT=8000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/bagify
JWT_SECRET=mysecretkey
CLOUDINARY_API_KEY=xxxxxxxx
CLOUDINARY_SECRET=xxxxxxxx
```

---

# Summary

| Task               | Command                       |
| ------------------ | ----------------------------- |
| Temporary Variable | `$env:NODE_ENV="development"` |
| Permanent Variable | `setx NODE_ENV "development"` |
| View All Variables | `Get-ChildItem Env:`          |
| View One Variable  | `echo $env:NODE_ENV`          |
| Node.js Access     | `process.env.NODE_ENV`        |
| Load .env          | `require("dotenv").config()`  |

Environment variables are the standard way to store configuration, secrets, API keys, database URLs, and application settings in modern Node.js applications.
