// modules/topic/index.js
module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      _articles: {
        type: 'relationshipReverse',
        withType: 'article',
        reverseOf: '_topics'
      }
    }
  }
};
