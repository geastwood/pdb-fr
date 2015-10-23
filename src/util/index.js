export function group(arr) {
  return arr.reduce((rst, key) => {
    if (rst[key]) {
      rst[key].count++;
    } else {
      rst[key] = {count: 1};
    }
    return rst;
  }, {})
}

export function entry(obj, prop) {
  return Object.keys(obj).map(key => ({name: key, value: obj[key][prop]}));
}