const truncate = (string, length) => {
  const DEFAULT_OMISSION = '...';
  if (string.length > length - DEFAULT_OMISSION.length) {
    return `${string.slice(0, (length - DEFAULT_OMISSION.length))}${DEFAULT_OMISSION}`;
  }
  return string;
};

export default truncate;
