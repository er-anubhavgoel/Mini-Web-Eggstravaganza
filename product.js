function fetchDB () {
    let p1 = fetch('https://fakestoreapi.com/products');
    console.log(p1);
    p1.then((response) => {
        console.log(response);
        let p2 = response.json();
        console.log(p2);
        
        p2.then((data) => {
            console.log(data);
            displayData(data);  // Passing array of objects to display function as argument
        })
    })

    p1.catch((err) => {
        console.log(err);
    })
}

fetchDB();

function displayData(products) {
    console.log(products);
    const bodyArticle = document.getElementById("bodyArticle")
    products.map((ele)=>{
        
        // ! Creating elements dynamically
        let cardContainer = document.createElement("section");
        let cardTitle = document.createElement("h1");
        let bodyElement = document.createElement("span");
        let productImage = document.createElement("img");
        let contentWrapper = document.createElement("article");
        let priceContainer = document.createElement("h3");

        // ! Adding content to element dynamically
        cardTitle.textContent = ele.title;
        priceContainer.innerHTML = `<br>&#8377; ${ele.price}`;
        
        // ! Setting attribute dynamically
        cardContainer.setAttribute("class", "container")
        bodyElement.setAttribute("class", "productBody")
        cardTitle.setAttribute("title", ele.description)
        productImage.setAttribute("src", ele.image)
        contentWrapper.append(cardTitle, priceContainer)

        // ! Appending other elements to cardContainer (Parent Element)
        cardContainer.append(productImage, contentWrapper);
        
        console.log(cardContainer);
        
        // ! Appending parent element to body to display on UI
        bodyArticle.append(cardContainer);
    });
};

function logout() {
    window.location.href = "./login.html"
}