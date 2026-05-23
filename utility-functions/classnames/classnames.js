function classNames(...args) {
  const classes = []

  args.forEach(arg => {

    // 1. Ignore falsey values (null, false, undefined, 0, '')
    if (!arg) return

    // 2. Handle Strings and Numbers
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg)
    }

    // 3. THE RECURSION: Flatten nested structures - Handle Arrays (Recursive call)
    else if (Array.isArray(arg)) {
      const inner = classNames(...arg)
      if (inner) classes.push(inner)
    }

    // 4. THE CONDITIONAL: Handle object logic
    else if (typeof arg === 'object') {
      for (const key in arg) {
        // Ensure the key belongs to the object and the value is truthy
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  })

  return classes.join(' ')
}

/**
 * 
 * Again, the "borrowed" method via .call ignores the object's own property named hasOwnProperty and uses the real one from the prototype, keeping your code from crashing.

Why .call?
The .call() method allows you to execute a function while setting the this context to whatever you want.

Object.prototype.hasOwnProperty is the function.

.call(arg, key) tells that function: "Run yourself, but use arg as this and look for key."
 */