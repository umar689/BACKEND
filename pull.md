# MongoDB `$pull` Operator - Complete Guide

## Introduction

`$pull` MongoDB ka update operator hai jo kisi array se matching elements ko remove karta hai.

Syntax:

```js
{
    $pull: {
        <arrayField>: <valueOrCondition>
    }
}
```

---

# 1. Removing a Primitive Value from an Array

## Document

```js
{
    name: "Umar",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB"]
}
```

## Query

```js
db.users.updateOne(
    { name: "Umar" },
    {
        $pull: {
            skills: "CSS"
        }
    }
);
```

## Result

```js
{
    name: "Umar",
    skills: ["HTML", "JavaScript", "MongoDB"]
}
```

MongoDB array ke andar `"CSS"` ko dhundega aur remove kar dega.

---

# 2. Using `$pull` with Mongoose

## User Schema

```js
const userSchema = new mongoose.Schema({
    name: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});
```

## Document

```js
{
    _id: "u1",
    name: "Umar",
    post: [
        ObjectId("p1"),
        ObjectId("p2"),
        ObjectId("p3")
    ]
}
```

## Remove a Post ID

```js
await userModel.findByIdAndUpdate(
    user._id,
    {
        $pull: {
            post: req.params.postId
        }
    }
);
```

## Result

```js
post: [
    ObjectId("p1"),
    ObjectId("p3")
]
```

---

# 3. Removing Multiple Matching Values

## Document

```js
{
    numbers: [1, 2, 2, 3, 2, 4]
}
```

## Query

```js
db.collection.updateOne(
    {},
    {
        $pull: {
            numbers: 2
        }
    }
);
```

## Result

```js
{
    numbers: [1, 3, 4]
}
```

MongoDB saare matching values remove karta hai.

---

# 4. Array of Objects

## Document

```js
{
    name: "Umar",
    posts: [
        {
            postId: 1,
            content: "Hello"
        },
        {
            postId: 2,
            content: "World"
        },
        {
            postId: 3,
            content: "MongoDB"
        }
    ]
}
```

## Delete Object by Field

```js
db.users.updateOne(
    {},
    {
        $pull: {
            posts: {
                postId: 2
            }
        }
    }
);
```

## Result

```js
{
    name: "Umar",
    posts: [
        {
            postId: 1,
            content: "Hello"
        },
        {
            postId: 3,
            content: "MongoDB"
        }
    ]
}
```

---

# 5. Multiple Conditions

## Query

```js
db.users.updateOne(
    {},
    {
        $pull: {
            posts: {
                postId: 2,
                content: "World"
            }
        }
    }
);
```

MongoDB sirf wahi object remove karega jo dono conditions satisfy kare.

---

# 6. Removing Subdocuments by `_id`

## Document

```js
{
    posts: [
        {
            _id: ObjectId("a1"),
            content: "First"
        },
        {
            _id: ObjectId("a2"),
            content: "Second"
        }
    ]
}
```

## Query

```js
await userModel.updateOne(
    { _id: user._id },
    {
        $pull: {
            posts: {
                _id: req.params.postId
            }
        }
    }
);
```

## Result

```js
{
    posts: [
        {
            _id: ObjectId("a1"),
            content: "First"
        }
    ]
}
```

---

# 7. Using Comparison Operators

## Document

```js
{
    marks: [10, 20, 30, 40, 50]
}
```

## Remove Values Greater Than 30

```js
db.students.updateOne(
    {},
    {
        $pull: {
            marks: {
                $gt: 30
            }
        }
    }
);
```

## Result

```js
{
    marks: [10, 20, 30]
}
```

---

# 8. Common Comparison Operators

| Operator | Meaning              |
| -------- | -------------------- |
| `$gt`    | Greater Than         |
| `$gte`   | Greater Than Equal   |
| `$lt`    | Less Than            |
| `$lte`   | Less Than Equal      |
| `$eq`    | Equal                |
| `$ne`    | Not Equal            |
| `$in`    | Value exists in list |
| `$nin`   | Value not in list    |

Example:

```js
$pull: {
    marks: {
        $in: [10, 20]
    }
}
```

Result:

```js
marks: [30, 40, 50]
```

---

# 9. `$pull` vs `$pop`

## `$pull`

Removes matching values.

```js
$pull: {
    skills: "CSS"
}
```

---

## `$pop`

Removes first or last element.

First element:

```js
$pop: {
    skills: -1
}
```

Last element:

```js
$pop: {
    skills: 1
}
```

---

# 10. `$pull` vs `$push`

## Add to Array

```js
$push: {
    post: post._id
}
```

## Remove from Array

```js
$pull: {
    post: post._id
}
```

---

# 11. `$pullAll`

Removes multiple exact values.

## Document

```js
{
    skills: ["HTML", "CSS", "JS", "MongoDB"]
}
```

## Query

```js
db.users.updateOne(
    {},
    {
        $pullAll: {
            skills: ["CSS", "JS"]
        }
    }
);
```

## Result

```js
{
    skills: ["HTML", "MongoDB"]
}
```

---

# 12. Real-World Example (Social Media App)

## Delete Post and Remove Reference

```js
app.post('/deletepost/:postId', async (req, res) => {

    const post = await postModel.findById(req.params.postId);

    await userModel.findByIdAndUpdate(
        post.user,
        {
            $pull: {
                post: req.params.postId
            }
        }
    );

    await postModel.findByIdAndDelete(req.params.postId);

    res.redirect('/profile');
});
```

---

# Important Notes

### `$pull` removes ALL matching elements

```js
[1,2,2,2,3]
```

Removing `2`:

```js
$pull: {
    arr: 2
}
```

Result:

```js
[1,3]
```

---

### Works only on arrays

Valid:

```js
skills: []
posts: []
comments: []
```

Invalid:

```js
name: "Umar"
age: 23
```

---

### Mongoose Alternative

```js
user.post.pull(postId);
await user.save();
```

Equivalent MongoDB Query:

```js
$pull: {
    post: postId
}
```

---

# Quick Revision

```js
// Primitive
$pull: {
    skills: "CSS"
}

// Object
$pull: {
    posts: {
        postId: 2
    }
}

// By _id
$pull: {
    posts: {
        _id: postId
    }
}

// Greater Than
$pull: {
    marks: {
        $gt: 50
    }
}

// In Array
$pull: {
    marks: {
        $in: [10,20]
    }
}
```

## Rule

* Array of primitives → `$pull: { array: value }`
* Array of objects → `$pull: { array: { condition } }`
* Subdocuments → `$pull: { array: { _id: id } }`
* Multiple matches → All matching elements are removed
