/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
};

export default isEmpty;
