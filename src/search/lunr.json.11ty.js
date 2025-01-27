var lunr = require('lunr');
var moment = require("moment");

class LunrIndex {

  data() {
    return {
      permalink: "/search/lunr.json",
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    var pages = data.collections.searchable;

    var builder = new lunr.Builder
    builder.pipeline.add(
      lunr.trimmer,
      lunr.stopWordFilter,
      lunr.stemmer
    )
    builder.searchPipeline.add(
      lunr.stemmer
    )

    builder.ref('ref');
    builder.field('title');
    builder.field('tags');
    builder.field('content');

    pages.forEach(function (doc, index) {
      builder.add({
        ref: index,
        title: doc.data.title,
        tags: doc.data["content-tags"],
        content: doc.templateContent
      });
    });

    var idx = builder.build()

    var docMap = {};
    pages.forEach(function (doc, index) {
      var title = 'Dataless';
      var meta = false;
      switch(doc.data.layout) {
        case 'note':
          title = 'Note from ' + moment(doc.date).format('MMMM Do, YYYY');
          break;
        case 'week':
          title = 'Week ' + doc.fileSlug;
          break;
        case 'writing':
          title = doc.data.title
          meta = moment(doc.date).format('MMMM Do, YYYY');
          break;
        default:
          title = doc.data.title || 'Untitled';
      }
      docMap[index] = {
        url: doc.url,
        title: title,
        meta: meta
      };
    });

    return JSON.stringify({
      index: idx,
      map: docMap
    });
  }

}

module.exports = LunrIndex;
