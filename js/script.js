const buttonCardViewTile = document.querySelector('.card-view-button-tile')
const buttonCardViewStandart = document.querySelector('.card-view-button-standart')
const buttonCardViewCompact = document.querySelector('.card-view-button-compact')
const courses = document.querySelector('.cards')

const buttonThemeLight = document.querySelector('.button-theme-light');
const buttonThemeDark = document.querySelector('.button-theme-dark');
const buttonThemeTexture = document.querySelector('.button-theme-texture');
const sortItems = document.querySelectorAll('.sort-item');
const cards = document.querySelectorAll('.cards-item');
let hashtags = document.querySelectorAll('.hashtag');

const buttonCardViewTileHandler = () =>{
    courses.classList.remove('standart')
    courses.classList.remove('compact')
    courses.classList.add('tile')
}
const buttonCardViewStandartHandler = () =>{
    courses.classList.add('standart')
    courses.classList.remove('compact')
    courses.classList.remove('tile')
}
const buttonCardViewCompactHandler = () =>{
    courses.classList.remove('standart')
    courses.classList.add('compact')
    courses.classList.remove('tile')
}

const buttonThemeLightHandler = () => {
    document.documentElement.dataset['themeName'] = 'light';
};
const buttonThemeDarkHandler = () => {
    document.documentElement.dataset['themeName'] = 'dark';
};
const buttonThemeTextureHandler = () => {
    document.documentElement.dataset['themeName'] = 'texture';
};

for (let sortItem of sortItems) {
    sortItem.addEventListener('click', function(){
     const order = [...cards].sort( function (a, b) {
       let raitingA = +a.querySelector(sortItem.dataset.sort).innerHTML;
       let raitingB = +b.querySelector(sortItem.dataset.sort).innerHTML;
 
       return raitingB - raitingA;
     });
     for (let i = 0; i < order.length; i++){
       order[i].style.order = i;
     }
   });
 }

 for(let hashtag of hashtags){
  hashtag.addEventListener("click", function(){
    for(let card of cards){
      card.classList.remove('visually-hidden');
    }
    if(hashtag.innerText.toLowerCase() == "all"){
      return
    }
    for(let card of cards){

      let cardHashtag = card.dataset.hashtag.toLowerCase().split(/[ ,]+/);
      if(cardHashtag.includes(hashtag.innerText.toLowerCase())){

      }
      else(
        card.classList.add('visually-hidden')
      )
    }
  })
 }

 let search = document.querySelector('#search');

 search.addEventListener('input', function(){
  for(let card of cards){
    card.classList.remove('visually-hidden');
  }
  for(let card of cards){
  if(card.innerText.toLowerCase().includes(search.value.toLowerCase())){

  }
  else{
  card.classList.add('visually-hidden')
  }
  }
})

 
const init = () => {
    buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
    buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);
    buttonThemeTexture.addEventListener('click', buttonThemeTextureHandler);

    buttonCardViewTile.addEventListener('click', buttonCardViewTileHandler);
    buttonCardViewStandart.addEventListener('click', buttonCardViewStandartHandler);
    buttonCardViewCompact.addEventListener('click', buttonCardViewCompactHandler);
};
init();

