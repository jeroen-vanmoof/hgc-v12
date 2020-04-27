// searchable things

module.exports = function(collection) {
  return collection.getFilteredByTags(
    "about",
    "history",
    "lists",
    "notes",
    "projects",
    "site",
    "weeks",
    "writing");
};
