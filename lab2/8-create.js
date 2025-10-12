'use strict';

const createUser = (name, city) => ({ name, city });

console.log(createUser('Mykyta', 'Kyiv'));

module.exports = { createUser };
