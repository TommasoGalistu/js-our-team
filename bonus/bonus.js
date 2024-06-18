// nome array: arrayMembri

// variabile contenitore card
let containerCard = document.querySelector('.contCard');

for (let i = 0; i < arrayMembri.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="img/${arrayMembri[i].foto}" alt="foto di ${arrayMembri[i].nome}">              
    <h3>${arrayMembri[i].nome}</h2>
    <p>${arrayMembri[i].ruolo}</p>`

    containerCard.append(card)
}

console.log(arrayMembri[0])

