const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Fetching from cache');
      }
      return cache[n];
    }
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Calculating result');
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
};

export default memoize;
