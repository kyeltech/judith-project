// import axios from 'axios';

const func = {
  add: (num1, num2) => num1 + num2,
  null: null,
  checkvalue: x => x,
  createuser: () => {
    const user = {first: 'kyel'};
    user.last = 'benjamin';
    return user;
  },
  weight: (first, second) => first + second,
  admin: () => {
    const username = ['john', 'kyel', 'dami'];
    return username;
  },
  //   fetchUsers: () => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/users/1')
  //       .then(res => res.data)
  //       .catch(err => 'error ');
  //   },
};

module.exports = func;
