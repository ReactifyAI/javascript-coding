Array.prototype.myForEach = function(callbackFn, thisArgs) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  const arr = Object(this)
  
  const len = arr.length >>> 0

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      callbackFn.call(thisArgs, arr[i], i, arr) // Fire and Forget
    }
  }
}
