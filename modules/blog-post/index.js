const { fields } = require('./schema.js');

module.exports = {
  extend: '@apostrophecms/piece-type',
  fields,
  // init: (self) => {
  //   console.log(self.fieldsGroups);
  // }
};
