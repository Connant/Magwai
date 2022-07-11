
// Шаблон карточки

function Tempalte() {
  const card = document.createElement('li');
  const img = document.createElement('img');
  const cardsContent = document.createElement('div');
  const mainTitle = document.createElement('h3');
  const title = document.createElement('h4');
  const cardsInfo = document.createElement('p');
  const author = document.createElement('p');
  const button = document.createElement('button');

  card.classList.add('cards__item');
  img.classList.add('cards__img-json');
  cardsContent.classList.add('cards__content');
  mainTitle.classList.add('cards__title');
  title.classList.add('cards__secondary-title');
  cardsInfo.classList.add('cards__text');
  author.classList.add('cards__author');
  button.classList.add('cards__link');

  cardsContent.append(mainTitle, title, cardsInfo, author, button);
  card.append(img, cardsContent);

  button.textContent = 'Continue reading';


  return card
}

// Функция загрузки новых карточек

async function loaderCard() {
  const button = document.querySelector('.cards__btn-block');
  const list = document.querySelector('.cards__list');

  async function api() {
    let get = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    let data = await get.json();
    return data
  }

  const date = await api();


  let defaultCount = 0;
  let newCardsCount = 0;

  button.addEventListener('click', function () {
    const data = new Date();
    defaultCount = 0;

    for (let i = newCardsCount || 0; i < date.length; i++) {

      if (defaultCount < 6) {
        newCardsCount++;
        const card = Tempalte();

        // в json нет изображений, поэтому я решила добавить уже имеющееся, чтобы выглядело лучше

        card.children[1].children[0].textContent = date[i].userId;
        card.children[1].children[1].textContent = date[i].id;
        card.children[1].children[2].textContent = date[i].title;
        card.children[1].children[3].textContent = date[i].body;
        card.children[1].children[3].textContent = `Posted by Eugenia, on July ${data.getDay()}, on July 24, 2019}`;

        list.append(card)
        defaultCount++;
      }
    }

  })
}

loaderCard()
