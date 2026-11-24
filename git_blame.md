# Git Blame

## What is Git Blame?

`git blame` is used to find **who modified each line of a file, when it was modified, and which commit introduced the change.**

## 1. Basic Syntax

```bash
git blame filename
```

**Example:**

```bash
git blame server.js
```

**Meaning:** Displays the modification history of every line in `server.js`.

## 2. Understanding Output

Example:

```text
a1b2c3d4 (Umar 2026-11-20 10:30) const express = require('express');
b2c3d4e5 (Ali  2026-11-21 12:00) const app = express();
c3d4e5f6 (Umar 2026-11-22 14:00) app.listen(4000);
```

Output contains:

- **Commit Hash:** Identifies the commit associated with the line.
- **Author:** Person who last modified the line.
- **Date:** Date of the commit.
- **Code:** Actual source code.

## 3. Useful Git Blame Commands

| Command | Meaning |
|---|---|
| `git blame server.js` | Show history of every line |
| `git blame -L 10,20 server.js` | Show history of lines 10–20 |
| `git blame -w server.js` | Ignore whitespace changes |
| `git blame -e server.js` | Show author's email |
| `git blame -C server.js` | Detect lines copied from other files |

## 4. Real-World Use Case

Suppose you find this code:

```javascript
const MAX_CONCURRENT = 24;
```

You want to know:

- Who introduced this value?
- When was it introduced?
- Which commit introduced it?

Run:

```bash
git blame crowd_worker.py
```

Find the relevant line to identify its last modifying commit.

## 5. Important Note

`git blame` does not mean someone is at fault.

It is simply a Git tool used to track the modification history of individual lines of code.
