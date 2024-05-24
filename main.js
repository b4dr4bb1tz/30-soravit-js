let uploads = [];
let idCounter = 0;
let checkItem = 0;

const createBtnEl = document.getElementById("createBtn");

document.getElementById("form").addEventListener("submit",(event) => {
    event.preventDefault();

    const imageUrlEl = document.getElementById("imageUrl").value;
    const productNameEl = document.getElementById("productName").value;
    const productPriceEl = document.getElementById("productPrice").value;


    const newUpload = {
        id: idCounter++,
        name: productNameEl,
        price: productPriceEl,
        url: imageUrlEl,
        checkItems: false
    }

    console.log(newUpload);
    
    uploads.push(newUpload);
    
    displayUpload(newUpload);

    document.getElementById("form").reset();

});

function displayUpload(uploads){

    const displaySection = document.getElementById("displaySection");
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-lg";

    card.innerHTML = `<img src="${uploads.imageUrlEl} alt="${uploads.productNameEl}" class="w-full aspect-[4/3] rounded-md mb-4 object-cover"/>
    <p class="text-gray-700 font-semibold text-2xl text-balance overflow-hidden my-4 p-4">${uploads.productNameEl}</p>
    <label class="inline-flex items-center mt-2 text-2xl px-4">
        <span class="ml-2 text-gray-700 font-semibold">Check</span>
        </label>`;
        displaySection.appendChild(card);
}