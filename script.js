// // Seleciona o botão e a seção que você quer ir
// const botao = document.querySelector('#botao');
// const secao = document.querySelector('#secao');

// // Adiciona um evento de clique no botão
// botao.addEventListener('click', function() {
//   // Usa o método scrollIntoView para ir até a seção com uma transição suave
//   secao.scrollIntoView({ behavior: 'smooth' });
// });


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

