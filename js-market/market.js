const cars = [
  {
    id: 1,
    car: "toyota",
    type: "corola",
    img: "https://autoua.net/media/uploads/toyota/dsc_1292_00001.jpg",
    price: 18000,
  },
  {
    id: 2,
    car: "honda",
    type: "accord",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    price: 20000,
  },
  {
    id: 3,
    car: "hundai",
    type: "sonata",
    img: "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2021/10/13/07/4955140/ac90b0b71b3a9eee91e75e46aa3949cd7bb7a432.jpg",
    price: 27000,
  },
  {
    id: 4,
    car: "ford",
    type: "mustang",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2016_Ford_Mustang_%28FM%29_GT_coupe_%282018-09-03%29_01.jpg",
    price: 19000,
  },
];

const carList = document.querySelector(".list");
const formSerch = document.querySelector(".js-serch-form");

formSerch.addEventListener("submit", onSerch);

function createMarkup(cars) {
  return cars
    .map(
      ({ car, type, img, price, id }) => `<li data-id=${id}>
        <img src="${img}" alt="${car}" class="img">
        <h2>${car}</h2>
        <h2>${type}</h2>
        <p>${price}</p>
    </li>`
    )
    .join("");
}

carList.insertAdjacentHTML("beforeend", createMarkup(cars));

function onSerch(evt) {
  evt.preventDefault();
  const { serchQuery, serchKey } = evt.currentTarget.elements;
  const currentCar = cars.filter((car) =>
    car[serchKey.value]
      .toLowerCase()
      .includes(serchQuery.value.trim().toLowerCase())
  );
  if (currentCar.length) {
    carList.innerHTML = market(currentCar);
  } else {
    carList.innerHTML = `<img
        src="https://kaplunoff.com/wp-content/uploads/2018/12/52.jpg"
        alt="error 404"
      ></img>`;
  }
}
