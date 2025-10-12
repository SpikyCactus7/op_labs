'use strict';

const fn = () => 
{
  console.log(a);
  var a = 7;
  console.log(a);
};

fn();

module.exports = { fn };
