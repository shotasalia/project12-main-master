function search() {
  console.log("search function called");
    let text = document.getElementById("searchBox").value;
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear previous results
    fetch("./card.json")
        .then(response => response.json())
        .then((data) => {
            const filteredData = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
            createCard(filteredData);
        })
        .catch((error) => {
            console.log(error);
        });
  }
