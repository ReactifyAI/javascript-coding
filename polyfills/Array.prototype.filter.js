Array.prototype.filter = function(callbackFn, thisArg) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  const arr = Object(this)
  const len = arr.length >>> 0

  const result = []

  for (let i = 0; i < len; i++) {
    if (i in arr && callbackFn.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i])
    }
  }

  return result
}