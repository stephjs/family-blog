const memberTempArr = [
  { id: '1', name: 'Steph', age: 26, isPet: false, hobbyIds: ['1', '2'] },
  { id: '2', name: 'Teddy', age: 2, isPet: true, hobbyIds: ['1', '3'] },
  { id: '3', name: 'Lexi', age: 8, isPet: true, hobbyIds: ['1'] },
  { id: '4', name: 'Carla', age: 23, isPet: false, hobbyIds: ['1', '2', '3'] },
];

const hobbyTempArr = [
  { id: '1', name: 'ball', catchphrase: 'go fetch' },
  { id: '2', name: 'chess', catchphrase: 'check mate' },
  { id: '3', name: 'zooming', catchphrase: 'come back' },
];

const postTempArr = [
  { id: '1', title: 'My first post', content: 'hello, world!', authorId: '1' },
  {
    id: '2',
    title: 'Second post',
    content: 'i am back baby....',
    authorId: '1',
  },
  {
    id: '3',
    title: 'introducing carla',
    content: 'hi i am carla!',
    authorId: '4',
  },
];

module.exports = {
  memberTempArr,
  hobbyTempArr,
  postTempArr,
};
