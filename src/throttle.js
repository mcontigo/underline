/* eslint-disable consistent-return */
const throttle = (func, timeWindow) => {
  let lastExecution = (new Date()).getTime() - timeWindow;

  return (...args) => {
    const now = (new Date()).getTime();
    if ((lastExecution + timeWindow) <= now) {
      lastExecution = now;
      return func.apply(this, args);
    }
  };
};

export default throttle;
