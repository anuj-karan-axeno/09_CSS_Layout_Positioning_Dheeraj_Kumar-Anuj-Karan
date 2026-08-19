const cards_data = [
    {
        img: './assests/panda.jpg',
        title: "My Panda",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
    },
    {
        img: './assests/lion.jpg',
        title: "Lion",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
    },
    {
        img: './assests/elephant.jpg',
        title: "Elephant",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
    },
    {
        img: './assests/cat.jpg',
        title: "Cat",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
    }
]

const stack_container_element = document.querySelector('.stack')

const stackCards = []

function showCardsInStack() {
    stackCards.forEach((card, index) => {
      
        card.className = `stack__card stack-card-${index}`
    })
}

cards_data.forEach((card, index) => {

    const stack_card = document.createElement("article")
    stack_card.classList.add(`stack__card`)
    stack_card.classList.add(`stack-card-${index}`)

    stack_card.innerHTML = `
         <img src=${card.img} alt=${card.title} class="stack__card__img">
            <div class="stack__card__text-content">

                <h3 class="stack__card__title">${card.title}</h3>
                <p class="stack__card__description">${card.description}</p>
            </div>
    `

    stack_container_element.appendChild(stack_card)



    stackCards.push(stack_card)

    stack_card.addEventListener('click', () => {
        const cardPlace = stackCards.indexOf(stack_card)

        stackCards.splice(cardPlace, 1)
        stackCards.push(stack_card)

        showCardsInStack()
    })
})

