const has = (obj, path) => {
  const travel = (regexp) => String.prototype.split
    .call(path, regexp)
    .filter(Boolean)
    .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result !== undefined && result !== obj;
};

export default has;
