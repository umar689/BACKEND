# JavaScript Spread Operator (`...`)

## Introduction

The **Spread Operator** in JavaScript is written as:

```js
...
```

It is used to **expand** or **spread out** values from:

- Arrays
- Objects
- Strings

Think of it like:

> "Open the container and spread all values out."

---

# Syntax

```js
...variable
```

Example:

```js
const arr = [1, 2, 3];

console.log(...arr);
```

Output:

```js
1 2 3
```

---

# 1. Spread Operator with Arrays

## Example: Expanding Array

```js
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output:

```js
1 2 3
```

The array gets opened and values come out separately.

---

# 2. Copying Arrays

## Without Spread Operator

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output:

```js
[1, 2, 3, 4]
```

Problem:
Both variables point to the same array in memory.

---

## With Spread Operator

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

Output:

```js
[1, 2, 3]
[1, 2, 3, 4]
```

✅ Spread operator creates a new copy.

---

# 3. Merging Arrays

```js
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

console.log(merged);
```

Output:

```js
[1, 2, 3, 4]
```

---

# 4. Adding Elements Inside Array

```js
const nums = [2, 3];

const result = [1, ...nums, 4];

console.log(result);
```

Output:

```js
[1, 2, 3, 4]
```

---

# 5. Converting String into Array

```js
const str = "hello";

const chars = [...str];

console.log(chars);
```

Output:

```js
["h", "e", "l", "l", "o"]
```

---

# 6. Spread Operator with Objects

## Copy Object

```js
const user = {
  name: "Umar",
  age: 22
};

const copyUser = { ...user };

console.log(copyUser);
```

Output:

```js
{
  name: "Umar",
  age: 22
}
```

---

# 7. Merge Objects

```js
const user = {
  name: "Umar"
};

const details = {
  age: 22,
  city: "Aligarh"
};

const finalUser = {
  ...user,
  ...details
};

console.log(finalUser);
```

Output:

```js
{
  name: "Umar",
  age: 22,
  city: "Aligarh"
}
```

---

# 8. Override Object Properties

```js
const user = {
  name: "Umar",
  age: 20
};

const updatedUser = {
  ...user,
  age: 22
};

console.log(updatedUser);
```

Output:

```js
{
  name: "Umar",
  age: 22
}
```

✅ Last value overrides previous value.

---

# 9. Spread Operator in Function Calls

```js
const nums = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...nums));
```

Output:

```js
6
```

---

# 10. Finding Maximum Number

```js
const nums = [10, 50, 20];

console.log(Math.max(...nums));
```

Output:

```js
50
```

---

# 11. Combining Multiple Arrays

```js
const a = [1];
const b = [2];
const c = [3];

const result = [...a, ...b, ...c];

console.log(result);
```

Output:

```js
[1, 2, 3]
```

---

# 12. Nested Array Copy Problem

```js
const arr1 = [[1, 2], [3, 4]];

const arr2 = [...arr1];

arr2[0][0] = 100;

console.log(arr1);
```

Output:

```js
[[100, 2], [3, 4]]
```

Reason:
Spread operator creates only a **shallow copy**.

---

# 13. Spread Operator in React

Very commonly used in React.

## Updating State

```js
setUser({
  ...user,
  age: 22
});
```

---

# Spread vs Rest Operator

Both use `...`

But purpose is different.

---

## Spread Operator → Expands Values

```js
const arr = [1, 2, 3];

console.log(...arr);
```

---

## Rest Operator → Collects Values

```js
function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3);
```

Output:

```js
[1, 2, 3]
```

---

# Real-Life Analogy

Imagine a pizza box 🍕

Without spread:

```js
[pizza]
```

With spread:

```js
...pizza
```

Now every slice comes out separately.

---

# Advantages of Spread Operator

- Easy array copy
- Easy object copy
- Easy merging
- Cleaner code
- Very useful in React
- Reduces manual loops

---

# Limitations

- Creates shallow copy only
- Nested objects/arrays still share reference

---

# Most Common Interview Questions

## Q1: Difference between Spread and Rest Operator?

### Spread Operator
Expands values.

```js
console.log(...[1,2,3]);
```

### Rest Operator
Collects values.

```js
function test(...nums) {
  console.log(nums);
}
```

---

## Q2: Does Spread Operator create deep copy?

❌ No

It creates only shallow copy.

---

## Q3: Can Spread Operator work on Objects?

✅ Yes

```js
const obj2 = { ...obj1 };
```

---

# Practice Questions

## Question 1

```js
const a = [1, 2];
const b = [...a, 3];

console.log(b);
```

Answer:

```js
[1, 2, 3]
```

---

## Question 2

```js
const obj = {
  name: "Ali"
};

const newObj = {
  ...obj,
  age: 20
};

console.log(newObj);
```

Answer:

```js
{
  name: "Ali",
  age: 20
}
```

---

## Question 3

```js
const nums = [5, 10, 15];

console.log(Math.max(...nums));
```

Output:

```js
15
```

---

# Important Notes

- Spread operator works with iterable objects.
- Arrays, strings, and objects commonly use spread.
- Very useful in modern JavaScript and React.

---

# One-Line Revision

```text
Spread Operator (...) = Expands values from arrays, objects, or strings
```