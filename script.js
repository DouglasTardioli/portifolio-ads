
const sobre = document.querySelector('#sobre-mim');
const portifolio = document.querySelector('#portifolio');
const formacao = document.querySelector('#formacao');
const contato = document.querySelector('#contato');
const secaoSobre = document.querySelector('#secao-sobre');
const secaoFormacao = document.querySelector('#secao-formacao');
const secaoContato = document.querySelector('#secao-contato');
const secaoPortifolio = document.querySelector('#secao-portifolio');


sobre.addEventListener('click', () => {
  secaoSobre.scrollIntoView({ behavior: 'smooth' });
});
formacao.addEventListener('click', () => {
  secaoFormacao.scrollIntoView({ behavior: 'smooth' });
});
contato.addEventListener('click', () => {
  secaoContato.scrollIntoView({ behavior: 'smooth' });
});
portifolio.addEventListener('click', () => {
  secaoPortifolio.scrollIntoView({ behavior: 'smooth' });
});


const icon = document.getElementById("icon-menu");
const back = document.getElementById("icon-back")



icon.addEventListener("click", () => {

  const nav = document.getElementById("menu");

  nav.classList.toggle("show");
  icon.classList.add("icon-hidden")
});

back.addEventListener("click", () => {
  const nav = document.getElementById("menu");

  nav.classList.remove("show")
  icon.classList.remove("icon-hidden")
})

const cardData = [
  { title: 'Dark Mode', content: 'Efeito dark para mudança da cor da tela e icones', img: "assets/efeito-dark.png" },
  { title: 'Landing Page', content: 'Landing Page de um salão de beleza', img: "assets/landing-page.png" },
  { title: 'Tela de login', content: 'Tela de Login para acessar um sistema de camping', img: "assets/tela-login.png" },
  { title: 'Temperatura', content: 'App para busca de temperatura', img: "assets/temperatura.png" },
  { title: 'NFT', content: 'site para divulgação de NFTs', img: "assets/nft.png" },
  { title: 'Landing Coffee', content: 'Site para compra de cafés', img: "assets/landing-coffee.png" },
  
];

const cardContainer = document.getElementById('card-container');


const cardsHTML = cardData.map((card, index) => `
  <div class="card">
      <img src=${card.img}>
      <h2>${card.title}</h2>
      <p>${card.content}</p>
  </div>
`).join('');

cardContainer.innerHTML = cardsHTML;