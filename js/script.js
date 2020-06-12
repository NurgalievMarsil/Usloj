let lang = 'ru';
{
  let arrRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let arrEn = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  if (lang === 'ru') {
      console.log(arrRu);
  }
  if (lang === 'en') {
      console.log(arrEn);
  }
}
{
  let arrRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let arrEn = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  switch (lang) {
      case 'ru':
          console.log(arrRu);
          break;
      case 'en':
          console.log(arrEn);
          break;
  }
}
{
  let arr = {
      ru: ['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
      en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
  };
  console.log(arr[lang]);
}
let namePerson = prompt('Имя?', 'Артем');
let message = (namePerson === 'Артем') ? 'Директор' : 
  (namePerson === 'Максим') ? 'преподаватель' :
  'студент';
console.log(message);


