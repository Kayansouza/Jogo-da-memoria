const grid = document.querySelector('.grid');

const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const revealCard = ({target}) => {

   if( target.parentNode.className.includes('reveal-card')){
    return;
   }

    target.parentNode.classList.add('reveal-card')
}

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../imagens/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);

  return card;
};

const loadGame = () => {
  const duplicatecharacters = [...characters, ...characters];

  const shuffledArray = duplicatecharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

loadGame();
