const questionsInEng = [
  {
    hint: 'One of them is true, but the other one is false.',
    options: [
      {
        text: 'In this room there is a lady, and in the other room there is a tiger',
        isCorrect: false,
      },
      {
        text: 'In one of these rooms there is a lady, and in one of these rooms there is a tiger',
        isCorrect: true,
      },
    ],
  },
  {
    hint: 'Both statements are either true or both false.',
    options: [
      {
        text: 'At least one of these rooms contains a lady',
        isCorrect: false,
      },
      { text: 'A tiger is in the other room', isCorrect: true },
    ],
  },
  {
    hint: 'Both statements are either true or both false.',
    options: [
      {
        text: 'Either a tiger is in this room, or a lady is in the other room',
        isCorrect: true,
      },
      { text: 'A lady is in the other room', isCorrect: true },
    ],
  },
  {
    hint: 'If a princess is in the left room, the statement on the sign is true; if a tiger, the statement is false. The statement on the right sign is false if a princess is in the room, and true if a tiger is in the room. It is possible that both rooms contains ladies or both rooms contain tigers, or that one room contains a lady and the other a tiger.',
    options: [
      { text: 'Both rooms contain ladies', isCorrect: false },
      { text: 'Both rooms contain ladies', isCorrect: true },
    ],
  },
  {
    hint: 'If a princess is in the left room, the statement on the sign is true; if a tiger, the statement is false. The statement on the right sign is false if a princess is in the room, and true if a tiger is in the room. It is possible that both rooms contains ladies or both rooms contain tigers, or that one room contains a lady and the other a tiger.',
    options: [
      {
        text: 'At least one of the rooms contains a lady',
        isCorrect: true,
      },
      { text: 'The other room contains a lady', isCorrect: false },
    ],
  },
  {
    hint: 'If a princess is in the left room, the statement on the sign is true; if a tiger, the statement is false. The statement on the right sign is false if a princess is in the room, and true if a tiger is in the room. It is possible that both rooms contains ladies or both rooms contain tigers, or that one room contains a lady and the other a tiger.',
    options: [
      { text: 'It makes no difference which room you pick', isCorrect: false },
      { text: 'There is a lady in the other room', isCorrect: true },
    ],
  },
  {
    hint: 'If a princess is in the left room, the statement on the sign is true; if a tiger, the statement is false. The statement on the right sign is false if a princess is in the room, and true if a tiger is in the room. It is possible that both rooms contains ladies or both rooms contain tigers, or that one room contains a lady and the other a tiger.',
    options: [
      {
        text: 'It does make a difference which room you pick',
        isCorrect: true,
      },
      { text: 'You are better off choosing the other room', isCorrect: false },
    ],
  },
  {
    hint: "If the princess is in the left room, the statement on the sign of this door will be true, and if there's a tiger, it will be false. For the right room, it's the opposite. It is not necessary to know which sign is where.",
    options: [
      { text: 'A tiger is in this room', isCorrect: false },
      { text: 'Tigers are in both rooms', isCorrect: true },
    ],
  },
  {
    hint: 'There are tigers in two rooms, and a princess in one room. At least one of these statements is true.',
    options: [
      { text: 'A tiger is in this room', isCorrect: true },
      { text: 'A lady is in this room', isCorrect: false },
      { text: 'A tiger is in room II', isCorrect: false },
    ],
  },
  {
    hint: 'There are tigers in two rooms, and a princess in one room. This time the sign on the door behind which the princess is located tells the truth, and at least one of the other two signs is false.',
    options: [
      { text: 'A tiger is in room II', isCorrect: true },
      { text: 'A tiger is in this room', isCorrect: false },
      { text: 'A tiger is in room I', isCorrect: false },
    ],
  },
  {
    hint: 'In one room there is a princess, in another - a tiger, and the third room is empty. Moreover, the sign on the door of the room with the princess is true, the sign on the door with the tiger is false, and the sign on the door of the empty room can be either true or false.',
    options: [
      { text: 'Room III is empty', isCorrect: true },
      { text: 'A tiger is in room I', isCorrect: false },
      { text: 'This room is empty', isCorrect: false },
    ],
  },
  {
    hint: 'There is a princess in only one of the rooms; in each of the other eight rooms, there is either a tiger or no one at all. Moreover, the statement on the sign of the room where the princess is located is true, the signs on the doors of the rooms with tigers contain false information, and the sign on the door of the empty rooms can say anything.',
    options: [
      {
        text: 'The lady is in a room with an odd number',
        isCorrect: false,
      },
      { text: 'This room is empty', isCorrect: false },
      {
        text: 'Either statement V is true, or statement VII is false',
        isCorrect: false,
      },
      { text: 'Statement I is false', isCorrect: false },
      { text: 'Statement II or statement IV is true', isCorrect: false },
      { text: 'Statement III is false', isCorrect: false },
      { text: 'There is no lady in room I', isCorrect: true },
      {
        text: 'There is a tiger in this room, and room IX is empty',
        isCorrect: false,
      },
      {
        text: 'There is a tiger in this room, and statement VI is false',
        isCorrect: false,
      },
    ],
  },
];

export default questionsInEng;
