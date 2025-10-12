'use strict';

const fn = () => {
  const p1 = { name: 'Borys' };
  let p2 = { name: 'Borys' };

  p1.name = 'Paton';
  p2.name = 'Paton';

  p1 = { name: 'Yevhen Paton' }; //константа, викликає помилку
  p2 = { name: 'Borys Paton' }; //змынна, можна перезаписати

  console.dir({ p1, p2 });
};

