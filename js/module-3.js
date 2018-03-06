// Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

// Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].

// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./"; 
// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:

// hello
// javascript
// trainer

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const letters = alphabet.split('');
const firstLineKeybord = letters.slice(letters.indexOf('q'), letters.indexOf(']')+1);
const secondLineKeybord = letters.slice(letters.indexOf('a'), letters.indexOf("'")+1);
const thirdLineKeybord = letters.slice(letters.indexOf('z'), letters.indexOf('/')+1);
const keyboard = [firstLineKeybord, secondLineKeybord, thirdLineKeybord];
console.log (keyboard);

const hello = (keyboard[1][5]) + (keyboard[0][2]) + (keyboard[1][8]) + (keyboard[1][8]) + (keyboard[0][8]); 
console.log(hello);

const javascript = (keyboard[1][6]) + (keyboard[1][0]) + (keyboard[2][3]) + (keyboard[1][0]) + 
(keyboard[1][1]) + (keyboard[2][2]) + (keyboard[0][3])  + (keyboard[0][7]) + (keyboard[0][9]) + 
(keyboard[0][4]); 
console.log(javascript);

const trainer = (keyboard[0][4]) + (keyboard[0][3]) + (keyboard[1][0]) + (keyboard[0][7]) + 
(keyboard[2][5]) + (keyboard[0][2]) + (keyboard[0][3]); 
console.log(trainer);