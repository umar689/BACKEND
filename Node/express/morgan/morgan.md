# Morgan Middleware in Express.js

## What is Morgan?

Morgan ek HTTP request logger middleware hai jo Express.js application me aane wali har request ki information terminal me print karta hai. Ye debugging aur monitoring ke liye bahut useful hai.

---

## Installation

```bash
npm install morgan
```

---

## Basic Usage

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);
```

---

## Example Output

Agar browser me `/` route hit kiya jaye, terminal me kuch is tarah ka log dikhega:

```bash
GET / 200 5.123 ms - 11
```

---

## Common Morgan Formats

### 1. dev

```js
app.use(morgan('dev'));
```

Development ke liye readable logs.

### 2. tiny

```js
app.use(morgan('tiny'));
```

Minimal information show karta hai.

### 3. short

```js
app.use(morgan('short'));
```

Short aur concise logs.

### 4. combined

```js
app.use(morgan('combined'));
```

Detailed Apache-style logs generate karta hai.

---

## Uses of Morgan Middleware

* HTTP requests ko log karna
* Route debugging
* API monitoring
* Status codes track karna
* Response time measure karna
* Server activity monitor karna

---

## Interview/Viva Definition

Morgan ek HTTP request logging middleware hai jo Express application me aane wali requests ki details jaise method, URL, status code aur response time ko terminal me display karta hai. Iska use debugging aur monitoring ke liye kiya jata hai.

---

## Comment Style Notes

```js
// Morgan middleware HTTP requests ko log karta hai.
// Har request ki method, URL, status code aur response time
// terminal me show karta hai jisse debugging aur monitoring
// easy ho jati hai.

app.use(morgan('dev'));
```
