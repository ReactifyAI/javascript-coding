Array.prototype.myMap = function(callbackFn, thisArg) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  const arr = Object(this)
  const len = arr.length >>> 0

  const result = new Array(len) // pre-allocate array of same length

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callbackFn.call(thisArg, arr[i], i, arr)
    }
  }

  return result
}
