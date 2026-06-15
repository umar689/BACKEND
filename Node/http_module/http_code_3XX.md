# HTTP Status Codes – 301, 307, 308

# 301 Moved Permanently

## Meaning

Requested resource permanently new URL par shift ho chuki hai.

Browser future requests ke liye new URL yaad rakh leta hai.

## Example

```http id="1wdk7x"
HTTP/1.1 301 Moved Permanently
Location: https://newsite.com
```

## Common Use Cases

* Website domain change
* HTTP → HTTPS redirect
* Old page → new page redirect

## Simple Explanation

Client:

> “Old page kholo.”

Server:

> “Ye page permanently yaha shift ho gaya.”

---

# 307 Temporary Redirect

## Meaning

Resource temporarily dusre URL par available hai.

Important:
Request method same rehta hai.

Agar POST request thi, to redirect ke baad bhi POST hi rahegi.

## Example

```http id="1jk0ru"
HTTP/1.1 307 Temporary Redirect
Location: /temporary-page
```

## Common Use Cases

* Temporary maintenance
* Temporary server routing
* Load balancing

## Simple Explanation

Client:

> “Ye page kholo.”

Server:

> “Abhi temporary yaha jao.”

---

# 308 Permanent Redirect

## Meaning

Permanent redirect hai, but request method change nahi hota.

POST request redirect ke baad bhi POST hi rehti hai.

## Example

```http id="hd4m7q"
HTTP/1.1 308 Permanent Redirect
Location: https://newsite.com
```

## Common Use Cases

* Permanent API endpoint move
* Secure permanent redirects
* Modern HTTP redirects

## Simple Explanation

Client:

> “Old API kholo.”

Server:

> “Permanent new address use karo, aur same method use karna.”

---

# Important Difference

| Code | Permanent? | Method Changes?             |
| ---- | ---------- | --------------------------- |
| 301  | Yes        | Sometimes method may change |
| 307  | No         | Method same rehta hai       |
| 308  | Yes        | Method same rehta hai       |

---

# Easy Trick to Remember

* **301** → Permanent move 📦
* **307** → Temporary move ⏳
* **308** → Permanent move + method safe 🔒

---

# Example with POST Request

Suppose client sends:

```http id="9p3klt"
POST /submit
```

## With 301

Browser kabhi-kabhi POST ko GET me convert kar deta hai.

## With 307

POST request redirect ke baad bhi POST hi rahegi.

## With 308

Permanent redirect hoga, aur POST same rahegi.
