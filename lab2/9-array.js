'use strict';

const phonebook = [
  { name: 'Ricardo', phone: '+380674206767' },
  { name: 'Borys', phone: '+380938881351' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
