# JavaScript Closures

---

# Objectives

### 1.Explain what a closure is

### 2.Explain how a closure works

### Practice using a closure

### Describe use cases for closures in JavaScript

---

```javascript
Let's talk about one of my favorite characters in the Austin Powers movies: Fat Bastard and his gluttonous appetite. If you haven't seen those movies yet, you should do so now. If it makes you feel better, pretend they're required viewing for this course!

In the movie, Fat Bastard wants to eat Mini-Me. Let's make this dream come true for our chubby assassin friend.
```

### What's for dinner?

---

```javascript
We'll represent Fat Bastard using a function that takes one argument, the thing he's going to eat:
```

---

```javascript
function fatBastard(meal) {}
```

---

```javascript
Next, we'll add a way for Fat Bastard to tell us what he's having for dinner, by returning a function. We can then assign the returned function to a variable, and call it when we want to know what type of food we gave Fat Bastard for dinner.
```

---

```javascript
function fatBastard(meal) {
  function whatsForDinner() {
    // whatsForDinner() is the inner function, a closure
    if (meal === "Mini-Me") {
      // whatsForDinner() uses argument provided to the parent function
      console.log("The wee man is in my belly!");
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  return whatsForDinner;
}
```

---

```javascript
whatsForDinner() is an inner function of the fatBastard() function, and as such, it has access to all of the variables defined in its parent function (along with any variables in its own scope, if it has any). This means that we can access the meal argument in our whatsForDinner() function. However, meal isn't accessible outside of the fatBastard() function, giving us some semblance of 'private' variables. This is one possible use case for closures.

As you can see, we're not executing the whatsForDinner() function here, we're merely returning it. We can then run the whatsForDinner() function at a later point in time, when we're curious about what exactly is in Fat Bastard's belly.

The reason whatsForDinner() still has access to the variables within its parent function long after the parent function has executed is because whatsForDinner() is a 'closure'.
```

---
