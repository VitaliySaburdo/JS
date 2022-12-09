// const form = document.querySelector(".form");
// const list = document.querySelector(".list");
// const btn = document.querySelector(".more");
// let currentpage = 0;
// let currentquery = "";

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   currentpage = 0;
//   list.innerHTML = "";
//   currentquery = event.currentTarget.search.value.trim();
//   if (currentquery === "") {
//     return;
//   }
//   getEvents(currentquery, currentpage);
// });

// btn.addEventListener("click", (event) => {
//   getEvents(currentquery, currentpage);
// });

// function fetchEvents(query, page) {
//   const KEY = "pRjaEUzqon1FzYGHVAM8Y2NcWFyaDfyR";
//   const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
//   const searchParams = new URLSearchParams({
//     apikey: KEY,
//     keyword: query,
//     page,
//   });
//   return fetch(`${BASE_URL}?${searchParams}`)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error("Not found");
//       }
//       return resp.json();
//     })
//     .catch((err) => console.log(err.message));
// }

// function getEvents(query, page) {
//   fetchEvents(query, page).then((json) => {
//     // console.log(json);
//     if (json.page.totalElements === 0) {
//       btn.classList.add("more");
//       alert("Ничего не найдено");
//       return;
//     }
//     const arr = json._embedded.events;
//     console.log(json);
//     // console.log(arr);
//     renderEvents(arr);
//     currentpage += 1;
//     if (json.page.totalPages > 1) {
//       btn.classList.remove("more");
//     }
//     if (json.page.number + 1 === json.page.totalPages) {
//       btn.classList.add("more");
//     }
//   });
// }

// function renderEvents(arr) {
//   const li = arr
//     .map(
//       (el) => `<li>
//         <img src="${el.images[0].url}" alt"${el.name} width="320"><span> ${el.name}</span>
//     </li>`
//     )
//     .join("");
//   list.insertAdjacentHTML("beforeend", li);
// }

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = (time) => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   return new Promise((resolve) => resolve(updatedUsers));
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, "Mango", logger);
// // toggleUserState(users, "Lux", logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         //   onSuccess(transaction.id, delay);
//         resolve([transaction.id, delay]);
//       } else {
//         //   onError(transaction.id);
//         reject(transaction.id);
//       }
//     });
//   }, delay);
//   return promise;
// };

// const logSuccess = (transaction) => {
//   console.log(`Transaction ${transaction[0]} processed in ${transaction[1]}ms`);
// };

// const logError = (id) => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Работает так
//  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
