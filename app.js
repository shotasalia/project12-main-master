

    // ===========================================================
    
    let userFromLocal=JSON.parse(localStorage.getItem("login"))
    let text=document.getElementById("text")
    console.log(userFromLocal)
    
   
    
    
    // const createCard=(dataFunc) =>{
    //     let container = document.getElementById("card-container");

    //     dataFunc.forEach(value => {
    //         let card = document.createElement("div");
    //         card.classList.add("card");
    //         card.innerHTML = `
    //             <img src="${value.image}" alt="${value.title}">
    //             <h2>${value.title}</h2>
    //             <p>${value.paragraph}</p>
    //             <p class="price">${value.price}</p>
    //             <button onclick="viewPackage(${value.id})">View Package</button>
    //         `;
    //         container.appendChild(card);
    //     });
    // }
    // fetch("./card.json")
    //         .then(response => response.json())
    //         .then((data) => {
    //             createCard(data)

    //         })
    //         .catch((error)=>{
    //            console.log(error)
    //         }) 



let page = 1;
const perPage = 4;
let allCards = [];
function getPageNumber(page) {
    paginate(allCards, page);
}


const createCard = (dataFunc) => {
    let container = document.getElementById("card-container");
    container.innerHTML = ""; // Clear previous cards

    dataFunc.forEach(value => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${value.image}" alt="${value.title}">
            <h2>${value.title}</h2>
            <p>${value.paragraph}</p>
            <p class="price">${value.price}</p>
            <button onclick="viewPackage(${value.id})">View Package</button>
        `;
        container.appendChild(card);
    });
};

function viewPackage(packageId) {
    window.location.href = `product-page.html?id=${packageId}`;
}

function paginate(data, page) {
    page = page || window.location.search.split('page=')[1] || 1;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const addPageUrl = `?page=${page}`;
    window.history.pushState({}, '', addPageUrl);
    createCard(data.slice(start, end));
}

function next() {
    if (page * perPage < allCards.length) {
        page++;
        paginate(allCards);
    }
}

function prev() {
    if (page > 1) {
        page--;
        paginate(allCards);
    }
}

fetch("./card.json")
    .then(response => response.json())
    .then((data) => {
        allCards = data;
        paginate(allCards);
    })
    .catch((error) => {
        console.log(error);
    });

// ✅ Make functions accessible to the HTML buttons
window.next = next;
window.prev = prev;



//    ==============================================================         

function viewPackage(packageId) {
    window.location.href = `product-page.html?id=${packageId}`;
}

// =============================================================

// =======================
