const actionTypes = {
  Giphy: {
    getGiphyTrends: null,
    getGiphyTrendsSuccess: null,
    getLoadMore: null,
    getLoadMoreSuccess: null,
  },
};

function generateValue(obj, ns = []) {
  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      return generateValue(obj[k], ns.concat(Symbol([k]).toString()));
    }
    obj[k] = ns.concat(Symbol([k]).toString()).join('_');
    return obj;
  });
}

generateValue(actionTypes);

export default actionTypes;
