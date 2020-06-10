// let lang = 'ru';
// if (lang === 'ru') {
//     var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang === 'en') {
//     aar = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// console.log(arr);
//switch
// let lang = 'ru';
// switch (lang) {
//     case 'ru':
//         var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//         break;
//     case 'en':
//         arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
//         break;
// }
// console.log(arr);
// массив
// let lang = 'ru';
// let arr = {
//     'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
//     'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// console.log(arr[lang]);
let namePerson = prompt('Имя?', 'Артем');
let message = (namePerson === 'Артем') ? 'Директор' : 
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент';
console.log(message);


