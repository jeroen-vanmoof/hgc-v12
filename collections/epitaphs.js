// pages with an epitaph

module.exports = function(collection) {
  var pages = collection.getAll();
  var epitaphs = pages
    .filter(function(item) {
      return !!(item.data.epitaph) && !(item.data.excludeFromFeed);
    });

  epitaphs.sort(function(a, b) {
      return (a.date - b.date);
    });

  return epitaphs;
};
