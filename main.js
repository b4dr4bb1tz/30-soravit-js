let uploads = [];
let idCounter = 0;
let checkItem = 0;

const createBtnEl = document.getElementById("createBtn");

document.getElementById("form").addEventListener("submit",(event) => {
    event.preventDefault();

    const imageUrlEl = document.getElementById("imageUrl").value;
    const productNameEl = document.getElementById("productName").value;
    const productPriceEl = parseFloat(document.getElementById("productPrice").value);


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

function displayUpload(upload){

    const displaySection = document.getElementById("displaySection");
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-lg";

    card.innerHTML = `<div class="flex ">
    <label class="inline-flex items-center mt-2 text-2xl px-2 aligh-center">
    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" ${upload.checkItems ? 'checked' : ''}>
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