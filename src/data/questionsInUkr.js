const questionsInUkr = [
  {
    hint: 'На одній – правда, на другій – ні.',
    options: [
      {
        text: 'У цій кімнаті принцеса, в іншій сидить тигр',
        isCorrect: false,
      },
      {
        text: 'В одній із цих кімнат знаходиться принцеса; крім того, в одній із цих кімнат сидить тигр',
        isCorrect: true,
      },
    ],
  },
  {
    hint: 'Можливо, обидва твердження істинні, а можливо, обидва помилкові.',
    options: [
      {
        text: 'Принаймні в одній із цих кімнат знаходиться принцеса',
        isCorrect: false,
      },
      { text: 'Тигр сидить в іншій кімнаті', isCorrect: true },
    ],
  },
  {
    hint: 'Можливо, обидва твердження істинні, а можливо, обидва помилкові.',
    options: [
      {
        text: 'Або в цій кімнаті сидить тигр, або принцеса знаходиться в іншій кімнаті',
        isCorrect: true,
      },
      { text: 'Принцеса в іншій кімнаті', isCorrect: true },
    ],
  },
  {
    hint: 'Якщо в лівій кімнаті принцеса, то твердження на табличці істинне, якщо ж тигр, хибне. Твердження на правій табличці хибне, якщо в кімнаті принцеса, та істинне, якщо в кімнаті сидить тигр.',
    options: [
      { text: 'В обох кімнатах є принцеси', isCorrect: false },
      { text: 'В обох кімнатах є принцеси', isCorrect: true },
    ],
  },
  {
    hint: 'Якщо в лівій кімнаті принцеса, то твердження на табличці істинне, якщо ж тигр, хибне. Твердження на правій табличці хибне, якщо в кімнаті принцеса, та істинне, якщо в кімнаті сидить тигр.',
    options: [
      {
        text: 'Принаймні в одній із кімнат знаходиться принцеса',
        isCorrect: true,
      },
      { text: 'Принцеса - в іншій кімнаті', isCorrect: false },
    ],
  },
  {
    hint: 'Якщо в лівій кімнаті принцеса, то твердження на табличці істинне, якщо ж тигр, хибне. Твердження на правій табличці хибне, якщо в кімнаті принцеса, та істинне, якщо в кімнаті сидить тигр.',
    options: [
      { text: 'Що не вибереш — все одно', isCorrect: false },
      { text: 'Принцеса - в іншій кімнаті', isCorrect: true },
    ],
  },
  {
    hint: 'Якщо в лівій кімнаті принцеса, то твердження на табличці істинне, якщо ж тигр, хибне. Твердження на правій табличці хибне, якщо в кімнаті принцеса, та істинне, якщо в кімнаті сидить тигр.',
    options: [
      { text: 'Що вибрати – велика різниця', isCorrect: true },
      { text: 'Краще вибрати іншу кімнату', isCorrect: false },
    ],
  },
  {
    hint: "Якщо принцеса у лівій кімнаті, то твердження на табличці буде істинним, а якщо там тигр, то хибним. Для правої ж кімнати все навпаки. Де яка табличка знати не обов'язково.",
    options: [
      { text: 'У цій кімнаті сидить тигр', isCorrect: false },
      { text: 'В обох кімнатах сидять тигри', isCorrect: true },
    ],
  },
  {
    hint: 'У двох кімнатах тигр, у одній принцеса. Принаймні одне з цих тверджень є істинним.',
    options: [
      { text: 'У цій кімнаті сидить тигр', isCorrect: true },
      { text: 'У цій кімнаті є принцеса', isCorrect: false },
      { text: 'Тигр сидить у другій кімнаті', isCorrect: false },
    ],
  },
  {
    hint: 'У двох кімнатах тигр, у одній принцеса. Цього разу табличка біля дверей, за якою знаходиться принцеса, каже правду, а із двох інших написів щонайменше одна є помилковою.',
    options: [
      { text: 'Тигр сидить у другій кімнаті', isCorrect: true },
      { text: 'Тигр сидить у цій кімнаті', isCorrect: false },
      { text: 'Тигр сидить у першій кімнаті', isCorrect: false },
    ],
  },
  {
    hint: 'В одній із кімнат сидить принцеса, у другій — тигр, а третя кімната порожня. При цьому напис біля дверей кімнати, в якій знаходиться принцеса, істинний, напис біля дверей, за якими сидить тигр, - помилковий, а те, що написано на табличці біля порожньої кімнати, може виявитися як істинним так і помилковим.',
    options: [
      { text: 'Третя кімната пуста', isCorrect: true },
      { text: 'Тигр сидить у першій кімнаті', isCorrect: false },
      { text: 'Ця кімната пуста', isCorrect: false },
    ],
  },
  {
    hint: 'Тільки в одній із кімнат знаходиться принцеса; у кожній з решти восьми кімнат або сидить тигр, або взагалі нікого немає. До того ж, твердження на табличці біля кімнати, де знаходиться Принцеса, істинне, таблички на дверях кімнат з тиграми містять неправдиві відомості, а біля дверей порожніх кімнат може бути написано будь-що.',
    options: [
      {
        text: 'Принцеса знаходиться в кімнаті з непарним номером',
        isCorrect: false,
      },
      { text: 'Ця кімната порожня', isCorrect: false },
      {
        text: "Або п'яте твердження істинне, або сьоме твердження хибне",
        isCorrect: false,
      },
      { text: 'Перше твердження хибне', isCorrect: false },
      { text: 'Друге  або четверте твердження істинне', isCorrect: false },
      { text: 'Третє твердження хибне', isCorrect: false },
      { text: 'У першій кімнаті принцеси немає', isCorrect: true },
      {
        text: "У цій кімнаті сидить тигр, дев'ята кімната порожня",
        isCorrect: false,
      },
      {
        text: 'У цій кімнаті сидить тигр, і шосте твердження хибне',
        isCorrect: false,
      },
    ],
  },
];

export default questionsInUkr;