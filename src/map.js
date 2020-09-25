const map = (obj, func) => {
  if (Array.isArray(obj)) {
    return obj.map(func);
  }
  return Object.values(obj).map(func);
};

export default map;
