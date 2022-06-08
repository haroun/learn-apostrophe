module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      body: {
        label: 'Article text',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      _topics: {
        type: 'relationship',
        label: 'Blog post topic',
        withType: 'topic',
        builders: {
          project: {
            title: 1,
            _url: 1
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'body', '_topics' ]
      }
    }
  }
};
