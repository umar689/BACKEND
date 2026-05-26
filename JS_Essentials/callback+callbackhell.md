# JavaScript Callbacks & Callback Hell

---

# 1. Callback kya hota hai?

Callback ek function hota hai jo kisi dusre function ko argument ki tarah diya jata hai aur baad me execute hota hai.

Simple words me:

> "Pehle apna kaam karo, fir iss function ko chala dena."

---

# 2. Simple Callback Example

```js
function hello() {
    console.log("Hello bhai");
}

function test(callback) {
    callback();
}

test(hello);
```

---

# 3. Step by Step Explanation

## Step 1

```js
function hello() {
    console.log("Hello bhai");
}
```

Ye function sirf print karega:

```txt
Hello bhai
```

---

## Step 2

```js
function test(callback) {
    callback();
}
```

Yaha `callback` ek variable ki tarah hai jo function ko store karega.

---

## Step 3

```js
test(hello);
```

Yani:

```js
callback = hello
```

Fir:

```js
callback();
```

actually ban gaya:

```js
hello();
```

---

# 4. Output

```txt
Hello bhai
```

---

# 5. Real Life Example 🍕

```txt
Pizza banao,
fir mujhe call kar dena
```

- Pizza banana = Main kaam
- Call karna = Callback

---

# 6. Ek aur Callback Example

```js
function kaamKhatam() {
    console.log("Kaam ho gaya");
}

function kaam(callback) {
    console.log("Kaam chal raha hai...");
    
    callback();
}

kaam(kaamKhatam);
```

---

# Output

```txt
Kaam chal raha hai...
Kaam ho gaya
```

---

# 7. setTimeout Callback Example

```js
console.log("Start");

setTimeout(function () {
    console.log("2 second baad");
}, 2000);

console.log("End");
```

---

# Output

```txt
Start
End
2 second baad
```

---

# 8. Callback ki Simple Definition

## Callback:
> Function ko function me bhejna = Callback

Ya:

> Ek function jo baad me execute hota hai.

---

# 9. Callback Hell kya hota hai?

Jab callbacks ek dusre ke andar bohot zyada nested ho jaye aur code messy lagne lage, use Callback Hell bolte hain.

---

# 10. Simple Callback

```js
function step1(callback) {
    console.log("Step 1");
    callback();
}

step1(function () {
    console.log("Step 2");
});
```

Ye normal hai 👍

---

# 11. Callback Hell Example

```js
function step1(callback) {
    console.log("Step 1");

    callback();
}

function step2(callback) {
    console.log("Step 2");

    callback();
}

function step3(callback) {
    console.log("Step 3");
}

step1(function () {

    step2(function () {

        step3();

    });

});
```

---

# 12. Output

```txt
Step 1
Step 2
Step 3
```

---

# 13. Problem kya hai?

Code aise andar ghusta ja raha:

```txt
step1(
   function(){
      step2(
         function(){
            step3()
         }
      )
   }
)
```

Ye messy aur confusing lagta hai.

---

# 14. Real Life Callback Hell Example 🍔

```js
login(function () {

    getData(function () {

        updateProfile(function () {

            logout();

        });

    });

});
```

---

# 15. Isko bolte hain

- Callback Hell
- Pyramid of Doom

Kyuki code pyramid jaisa dikhta hai 😭

---

# 16. Problems of Callback Hell

## ❌ Read karna difficult
## ❌ Debugging hard
## ❌ Error handling tough
## ❌ Maintain karna mushkil

---

# 17. Callback Hell ka Solution

Modern JavaScript me use hota hai:

- Promises
- Async/Await

---

# 18. Promise Example

```js
login()
   .then(getData)
   .then(updateProfile)
   .then(logout);
```

---

# 19. Async/Await Example

```js
async function work() {
    await login();
    await getData();
    await updateProfile();
    await logout();
}
```

---

# 20. Callback vs Callback Hell

| Callback | Callback Hell |
|---|---|
| Simple function passing | Bohot zyada nested callbacks |
| Easy to read | Difficult to read |
| Small programs me useful | Large async code me messy |
| Manageable | Hard to debug |

---

# 21. Final Revision Notes 📌

## Callback
> Function ko function me pass karna.

## Callback Hell
> Bohot saare nested callbacks ki wajah se messy code.

## Pyramid of Doom
> Callback Hell ka dusra naam.

## Modern Solution
- Promises
- Async/Await

---

# 22. Interview Definitions 🔥

## Callback
> A callback is a function passed as an argument to another function to be executed later.

## Callback Hell
> Callback hell happens when multiple nested callbacks make code difficult to read and maintain.

---