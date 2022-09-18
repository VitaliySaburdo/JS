// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// const sum = prompt('Введите сумму');
// const procent = prompt('Введите сумму чаевых в %');

// if (sum == null || procent == null) {
//   alert('Canceled');
// } else {
//   const parsSum = Number.parseFloat(sum);
//   const parsProcent = Number.parseFloat(procent);

//   if (
//     Number.isNaN(parsSum) ||
//     parsSum <= 0 ||
//     Number.isNaN(parsProcent) ||
//     parsProcent < 0 ||
//     parsProcent > 100
//   ) {
//     alert('Invalid input data');
//   } else {
//     const tip = (parsProcent * parsSum) / 100;
//     const sumTip = parsSum + tip;

//     alert(
//       `Контрольная сумма: ${parsSum} \n Чаевые: ${parsProcent}% \n Количество чаевых: ${tip.toFixed(
//         2
//       )} \n Общая сумма к оплате: ${sumTip.toFixed(2)}`
//     );
//   }
// }

// const message = prompt('Введите сообщение');
// if (message === null || message === '') {
//   alert('Отмена');
// } else {
//   if (message.length % 2 === 0) {
//     alert(`${message[message.length / 2 - 1]} ${message[message.length / 2]}`);
//   } else {
//     alert(`${message[(message.length + 1) / 2 - 1]}`);
//   }
// }

const a = [1, 2, 3]
const b = [5, [6, 7]]
const c = 4

let array = []

const result = a.concat(b, c);

console.log

result
