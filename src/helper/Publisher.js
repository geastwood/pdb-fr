import Bian from 'bian';

export var format = publishers => {
  debugger;
  console.log(publishers.bian().uniqueBy('id').toValue());
}

export var uniq = (data, key) => {
  var list = [];
  return data.reduce((rst, item) => {
    if (list.indexOf(item[key]) === -1) {
      list.push(item[key]);
      return rst.concat(item);
    }
    return [];
  }, []);
};
