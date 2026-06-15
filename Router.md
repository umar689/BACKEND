# Express.js Routes Complete Notes

## What are Routes?

Routes define how an application responds to a client request for a particular URL and HTTP method.

Example:

```js
app.get("/", (req, res) => {
    res.send("Home Page");
});
```

When user visits:

```
localhost:3000/
```

Output:

```
Home Page
```

---

# Why Use Routes?

Without routes, all code stays inside `app.js`.

```js
app.get("/profile", ...);
app.get("/shop", ...);
app.get("/cart", ...);
app.post("/login", ...);
app.post("/register", ...);
```

As the project grows, `app.js` becomes huge and difficult to manage.

To solve this problem we use **Express Router**.

---

# Creating a Router

Create a file:

```
routes/userRouter.js
```

```js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("All Users");
});

module.exports = router;
```

---

# Importing Router in app.js

```js
const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter");

app.use("/users", userRouter);

app.listen(3000);
```

---

# How app.use() Works

```js
app.use("/users", userRouter);
```

Express automatically prefixes all routes inside `userRouter` with `/users`.

Example:

```js
router.get("/", ...)
```

becomes:

```
/users
```

---

# Multiple Routes in One Router

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users Page");
});

router.get("/profile", (req, res) => {
    res.send("Profile Page");
});

router.get("/settings", (req, res) => {
    res.send("Settings Page");
});

module.exports = router;
```

URLs:

```
/users
/users/profile
/users/settings
```

---

# Multiple Routers

Project Structure:

```
project/
│
├── app.js
│
└── routes/
    ├── userRouter.js
    ├── productRouter.js
    └── ownerRouter.js
```

### app.js

```js
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const ownerRouter = require("./routes/ownerRouter");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/owners", ownerRouter);
```

URLs:

```
/users
/products
/owners
```

---

# GET Route

Used to fetch data.

```js
router.get("/profile", (req, res) => {
    res.send("Profile Data");
});
```

Request:

```
GET /users/profile
```

---

# POST Route

Used to send data.

```js
router.post("/register", (req, res) => {
    res.send("User Registered");
});
```

Request:

```
POST /users/register
```

---

# Route Parameters

Dynamic values inside URL.

```js
router.get("/:id", (req, res) => {
    res.send(req.params.id);
});
```

Request:

```
/users/123
```

Output:

```
123
```

### Multiple Params

```js
router.get("/:id/:name", (req, res) => {
    res.send(req.params);
});
```

Request:

```
/users/101/Umar
```

Output:

```json
{
  "id": "101",
  "name": "Umar"
}
```

---

# Query Parameters

```js
router.get("/search", (req, res) => {
    console.log(req.query);
    res.send("Searching...");
});
```

Request:

```
/search?name=umar&age=21
```

Output:

```js
{
    name: "umar",
    age: "21"
}
```

Access:

```js
req.query.name
req.query.age
```

---

# Router Middleware

```js
router.use((req, res, next) => {
    console.log("Router Middleware");
    next();
});
```

```js
router.get("/profile", (req, res) => {
    res.send("Profile");
});
```

Middleware runs before every route of that router.

---

# Route Specific Middleware

```js
function isLoggedIn(req, res, next) {
    console.log("Checking Login");
    next();
}

router.get("/profile", isLoggedIn, (req, res) => {
    res.send("Profile");
});
```

Flow:

```
Request
   ↓
isLoggedIn()
   ↓
Route Handler
```

---

# Router Chaining

```js
router
    .route("/user")
    .get((req, res) => {
        res.send("GET User");
    })
    .post((req, res) => {
        res.send("POST User");
    });
```

---

# Real Project Example (Bagify)

## userRouter.js

```js
router.get("/login");
router.post("/register");
router.get("/profile");
router.post("/uploadpic");
router.get("/logout");
```

---

## productRouter.js

```js
router.get("/shop");
router.post("/create");
router.get("/:id");
router.post("/addtocart");
```

---

## ownerRouter.js

```js
router.get("/admin");
router.post("/createproduct");
router.get("/allusers");
```

---

# Difference Between app and router

| app | router |
|------|---------|
| Entire application | Small module |
| app.get() | router.get() |
| app.post() | router.post() |
| app.use() | router.use() |

Example:

```js
const app = express();
```

Creates the whole application.

```js
const router = express.Router();
```

Creates a mini application/module.

---

# Interview Questions

### Q1. Why do we use Express Router?

To separate routes into different files and keep code clean and scalable.

---

### Q2. Difference between app.get() and router.get()?

`app.get()` works on the entire application.

`router.get()` works only inside a router module.

---

### Q3. What is req.params?

Used to access route parameters.

```js
req.params.id
```

---

### Q4. What is req.query?

Used to access query string values.

```js
/search?name=umar
```

```js
req.query.name
```

---

# One Line Summary

```js
const router = express.Router();
```

Router allows us to split application routes into separate files, making the project clean, modular, and scalable.