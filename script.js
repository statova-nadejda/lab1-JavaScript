//Задание 1
alert("Этот код выполнен из внешнего файла!");
console.log("Сообщение в консоли");

//Задание 2
let userName = "Nadya";
let birthYear = 2004;
let isStudent = true;
console.log("Person's name is "+ userName);
console.log("His year of birth is " + birthYear);
console.log("Is he/she a student? " + isStudent);

//Задание 3
let score = prompt("Введите ваш балл:");
   if (score >= 90) {
     console.log("Отлично!");
   } else if (score >= 70) {
     console.log("Хорошо");
   } else {
     console.log("Можно лучше!");
   }

   for (let i = 1; i <= 5; i++) {
     console.log(`Итерация: ${i}`);
   }