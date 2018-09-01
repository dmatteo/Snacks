export default (func) => {
  const memoizedFunc = function () {
    let result
    const key = arguments[0]
    if (memoizedFunc.cache[key] !== undefined) {
      result = memoizedFunc.cache[key]
    } else {
      result = func.apply(null, arguments)
      memoizedFunc.cache[key] = result
    }
    return result
  }
  memoizedFunc.cache = {}
  return memoizedFunc
}
