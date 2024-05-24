let uploads = [];
let idCounter = 0;
let checkItem = 0;
let totalCart = [];
let totalPrice = 0;
//ไม่มี totalcart รับค่า
const createBtnEl = document.getElementById("createBtn");

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const imageUrlEl = document.getElementById("imageUrl").value;
  const productNameEl = document.getElementById("productName").value;
  const productPriceEl = parseFloat(
    document.getElementById("productPrice").value
  );

  const newUpload = {
    id: idCounter++,
    name: productNameEl,
    price: productPriceEl,
    url: imageUrlEl,
    checkItems: false,
  };

  console.log(newUpload);

  uploads.push(newUpload);

  displayUpload(newUpload);

  // document.getElementById("form").reset();
});

function displayUpload(upload) {
  const displaySection = document.getElementById("displaySection");
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow-lg";

  card.innerHTML = `<div class="flex ">
    <label class="inline-flex items-center mt-2 text-2xl px-2 aligh-center">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" data-id="${upload.id}" onchange="checkItems(event)">
    </label>
        <img src="${upload.url}" alt="${upload.name}" class="w-1/5 aspect-[4/3] rounded-md mb-4 object-cover"/>
        <div class="flex-col">
        <p class="text-gray-700 font-semibold text-l text-balance overflow-hidden my-2 p-2">Name: ${upload.name}</p>
        <p class="text-gray-700 font-semibold text-l text-balance overflow-hidden my-2 p-2">Price: $${upload.price}</p>
        </div>
        </div>
        `;
  displaySection.appendChild(card);
}

function checkItems(event) {
  const checkbox = event.target;
  const uploadId = parseInt(checkbox.getAttribute("data-id"));
  const upload = uploads.find((upload) => upload.id === uploadId);

  if (upload) {
    upload.checkItems = checkbox.checked;
  }
}

document.querySelector("#addToCart").addEventListener("click", () => {
  totalCart = uploads.filter((upload) => {
    return upload.checkItems;
  });

  displayUploadCheck();
});

function displayUploadCheck(upload) {
  const displayCal = document.getElementById("displayCal");
  displayCal.innerHTML = "";
  totalCart.forEach(function (upload) {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-lg";

    card.innerHTML = `<div class="flex ">
        <img src="${upload.url}" alt="${upload.name}" class="w-1/5 aspect-[4/3] rounded-md mb-4 object-cover"/>
        <div class="flex-col">
        <p class="text-gray-700 font-semibold text-l text-balance overflow-hidden my-2 p-2">Name: ${upload.name}</p>
        <p class="text-gray-700 font-semibold text-l text-balance overflow-hidden my-2 p-2">Price: $${upload.price}</p>
        </div>
        </div>
        `;
    displayCal.appendChild(card);
  });
  totalCheck();
}

function totalCheck() {
  const totalCartCheck = document.createElement("div");
  totalCartCheck.innerHTML = `<button type="submit" class="md:flex flex bg-slate-400 rounded-md px-4 py-2 m-4" onClick="calPrice()" >Total Check</button>`;
  displayCal.appendChild(totalCartCheck);
}

function calPrice() {
  const calPricecheck = document.createElement("div");
  totalPrice = totalCart.reduce((totalP, product) => product.price + totalP, 0);
  calPricecheck.innerHTML = `<p class="text-red-700 font-bold text-2xl p-10 m-7">You have to pay : ${totalPrice}</p>`;
  displayCal.appendChild(calPricecheck);
}
