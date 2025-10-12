'use strict';

const phonebook = {
  Ricardo: '+380674206767',
  Borys: '+380938881351',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };