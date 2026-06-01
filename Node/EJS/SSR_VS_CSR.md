# Difference Between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)

| Feature | Server-Side Rendering (SSR) | Client-Side Rendering (CSR) |
|----------|----------------------------|----------------------------|
| Where HTML is generated | On the **server** | In the **browser (client)** |
| Initial page load | Faster content display | Slower initial display |
| SEO | Better for SEO | Not as SEO-friendly |
| Server workload | More load on server | Less load on server |
| Browser workload | Less | More |
| User sees | Fully rendered page | Empty/loading page first, then content |
| Example Technologies | Express + EJS, PHP, Django, Next.js (SSR mode) | React, Angular, Vue (CSR mode) |

---

## Server-Side Rendering (SSR)

### How it works

1. User requests a page.
2. Server generates the complete HTML.
3. Browser receives ready-made HTML and displays it.

```text
Browser ---> Server
         Request

Browser <--- Server
      Complete HTML
```

### Example

```js
app.get('/', (req, res) => {
    res.render('home');
});
```

Here, the server renders the EJS page before sending it to the browser.

### Advantages

- Better SEO
- Faster initial page load
- Works even if JavaScript is disabled

### Disadvantages

- More load on the server
- Every request requires rendering on the server

---

## Client-Side Rendering (CSR)

### How it works

1. Browser downloads a basic HTML file and JavaScript.
2. JavaScript fetches data.
3. Browser generates the page content.

```text
Browser ---> Server
         Request

Browser <--- Server
      HTML + JS

JS generates UI in browser
```

### Example (React)

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

React renders the UI inside the user's browser.

### Advantages

- Better user interaction after loading
- Reduces server workload
- Smooth page transitions

### Disadvantages

- Slower initial load
- SEO can be challenging
- Requires JavaScript to be enabled

---

## Quick Interview Answer

**Server-Side Rendering (SSR)** renders HTML on the server and sends a fully rendered page to the client, resulting in better SEO and faster initial content display.

**Client-Side Rendering (CSR)** sends JavaScript to the browser, which generates the page content on the client side, providing a more interactive user experience after loading.