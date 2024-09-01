document.getElementById('card-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    const title = document.getElementById ('card-title').value;
    const description = document.getElementById ('card-description').value;
    const imageUrl = document.getElementById ('card-image').value || 'https://picsum.photos/200';
    const bgColor = document.getElementById ('card-bg-color').value;
    const borderColor = document.getElementById ('card-border-color').value;

    console.log({
        title: title,
        description: description,
        imageUrl: imageUrl,
        bgColor: bgColor,
        borderColor: borderColor,
    })

 const cardContainer = document.getElementById ('cards-container');

 const newCard = document.createElement('div');

 newCard.className = "card-review";
 newCard.style.backgroundColor = bgColor;
 newCard.style.borderColor = borderColor;

 newCard.innerHTML = 
 `<img src = "${imageUrl}" alt = "Card image">
    <div class = "card-review-content">
        <p class = "card-review-title"> ${title}</p>
        <p class = "card-review-description">${description}</p>
    </div>`;
 
 cardContainer.append(newCard)

    newCard.addEventListener('mouseenter', () => {
        newCard.style.transform = "scale(1.05)"
    }), 
    newCard.addEventListener('mouseleave', () =>{
        newCard.style.transform = ""
    })

 document.getElementById('card-form').reset()

})

