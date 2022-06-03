module.exports = {
  fields: {
    add: {
      authorName: {
        label: 'Author name',
        type: 'string'
      },
      body: {
        label: 'Blog post body',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      }
    },
    group: {
      blogFields: { label: 'Blog fields', fields: [ 'authorName', 'body' ] }
    }
  }
};
