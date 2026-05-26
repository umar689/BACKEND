# Reverse Proxy Explained

## Proxy kya hota hai?

Proxy ek middleman hota hai jo client aur server ke beech me kaam karta hai.

---

# Reverse Proxy kya hota hai?

Reverse Proxy bhi ek middle server hota hai jo user ki requests ko backend servers tak forward karta hai.

User ko actual backend server ka pata nahi hota.

---

# Normal Flow

```text
User  --->  Server
```

---

# Reverse Proxy Flow

```text
User ---> Reverse Proxy ---> Backend Server
```

---

# Real Life Example

Restaurant Example 🍔

- Customer = User
- Waiter = Reverse Proxy
- Chef = Backend Server

Customer directly chef se baat nahi karta.

Wo waiter ko order deta hai.

Waiter:
- order leta hai
- sahi chef ko bhejta hai
- food wapas laata hai

Exactly wahi reverse proxy karta hai.

---

# Reverse Proxy kyun use karte hain?

## 1. Load Balancing

Bahut saare users ki requests ko multiple servers me divide karta hai.

```text
User Requests
      ↓
 Reverse Proxy
   ↙   ↓   ↘
Server1 Server2 Server3
```

---

## 2. Security

Backend server directly public ke saamne nahi aata.

Reverse proxy server ko hide karta hai.

---

## 3. SSL / HTTPS Handling

HTTPS certificates aur encryption reverse proxy handle kar sakta hai.

---

## 4. Faster Performance (Caching)

Frequently used responses ko cache karke fast response deta hai.

---

## 5. Single Entry Point

Multiple backend services ko ek hi domain se manage kiya ja sakta hai.

Example:

```text
google.com/api
google.com/auth
google.com/chat
```

---

# Popular Reverse Proxy Servers

- Nginx
- Apache
- HAProxy
- Traefik

---

# Simple Nginx Reverse Proxy Example

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Meaning

- User request port 80 par aayegi
- Nginx us request ko backend app `localhost:3000` par forward kar dega

---

# Proxy vs Reverse Proxy

| Proxy | Reverse Proxy |
|---|---|
| Client side par hota hai | Server side par hota hai |
| Client ko hide karta hai | Server ko hide karta hai |
| Internet access ke liye use hota hai | Websites/apps me use hota hai |

---

# One-Line Definition

> Reverse Proxy ek middle server hota hai jo user requests ko backend servers tak forward karta hai.