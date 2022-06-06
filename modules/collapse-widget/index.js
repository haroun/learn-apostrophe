module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Collapse Widget',
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        required: true
      },
      detail: {
        type: 'string',
        required: true,
        textarea: true
      }
    }
  }
};
