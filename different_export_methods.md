# Different Methods of Exports in Node.js

Node.js uses the CommonJS module system by default. We can export functions, objects, variables, and classes using several methods.

---

# 1. Export a Single Function

## File: math.js

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

## Import

```js
const add = require("./math");

console.log(add(2, 3));
```

---

# 2. Export Multiple Functions Using Properties

## File: math.js

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports.add = add;
module.exports.subtract = subtract;
```

## Import

```js
const { add, subtract } = require("./math");

console.log(add(5, 3));
console.log(subtract(5, 3));
```

---

# 3. Export an Object

## File: math.js

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

## Import

```js
const { add, subtract } = require("./math");
```

OR

```js
const math = require("./math");

math.add(1, 2);
math.subtract(5, 3);
```

---

# 4. Export Variables

## File: config.js

```js
const PORT = 3000;

module.exports.PORT = PORT;
```

## Import

```js
const { PORT } = require("./config");

console.log(PORT);
```

---

# 5. Export a Class

## File: User.js

```js
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

module.exports = User;
```

## Import

```js
const User = require("./User");

const user = new User("Umar");
user.greet();
```

---

# 6. Export Anonymous Function

## File: logger.js

```js
module.exports = function(message) {
    console.log(message);
};
```

## Import

```js
const logger = require("./logger");

logger("Server Started");
```

---

# 7. Shorthand Export (Most Common)

## File: generateToken.js

```js
function genToken(user) {
    return "token";
}

module.exports = { genToken };
```

## Import

```js
const { genToken } = require("./generateToken");
```

Equivalent to:

```js
module.exports = {
    genToken: genToken
};
```

---

# Important Notes

## Single Export

```js
module.exports = genToken;
```

Import:

```js
const genToken = require("./generateToken");
```

---

## Named Export

```js
module.exports.genToken = genToken;
```

Import:

```js
const { genToken } = require("./generateToken");
```

---

# Recommended Style

For utility files with multiple functions:

```js
module.exports = {
    genToken,
    verifyToken,
    hashPassword
};
```

For files containing only one function or class:

```js
module.exports = genToken;
```

These two styles are the most commonly used in professional Node.js projects.
