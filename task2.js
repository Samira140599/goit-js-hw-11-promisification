'use strict'
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
const toggleUserState = user => {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(user);
    },2000);
  });
};

const updatedUsers = users.map(user => toggleUserState(user));
const logger = updatedUsers => console.table(updatedUsers);

  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
  