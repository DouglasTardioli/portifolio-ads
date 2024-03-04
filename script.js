
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

