// Efeito scroll usando a biblioteca scrillreveal
window.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({ reset: true });
  
    sr.reveal('.background', { delay: 100 });
    sr.reveal('.container-text', { delay: 100 });
    sr.reveal('.grid-layout', { delay: 100 });
    sr.reveal('.container-experiencia', { delay: 100 });
    sr.reveal('.card-content', { delay: 100 });
    sr.reveal('.container-habilidades',{ delay: 100 });
    sr.reveal('.hab-grid', { delay: 100 });
  });
  


// Botao para scrolltop

window.addEventListener('scroll', function() {
    var btnTopo = document.getElementById('btn-topo');
  
    if (window.scrollY > 500) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  var btnTopo = document.getElementById('btn-topo');
  btnTopo.addEventListener('click', scrollToTop);
  
  //  Evento de clique no link "Home"
  const homeLink = document.querySelector('a[href="#s-about"]');
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    const gridLayout = document.querySelector('.grid-layout');
    gridLayout.scrollIntoView({ behavior: 'smooth' });
  });
 //experiencia
const experienciaLink = document.getElementById('experiencia-link');
experienciaLink.addEventListener('click', (event) => {
    event.preventDefault();
    const sExpSection = document.getElementById('s-exp');
    sExpSection.scrollIntoView({ behavior: 'smooth' });
});

//Habilidade

const habilidadelink = document.getElementById('habilidade-link');
habilidadelink.addEventListener('click', (event) =>{
  event.preventDefault();
  const gridHabilidade = document.querySelector('container-habilidades');
  sExpSection.scrollIntoView({behavior: 'smooth'});
});


// // expandir card

// // Função para exibir a mensagem "Olá mundo"
// function exibirMensagem(element) {
//   // Encontra o elemento de texto dentro do card
//   var cardText = element.parentNode.querySelector('.card-text');

//   // Verifica se a classe 'expanded' está presente no elemento de texto
//   var isExpanded = cardText.classList.contains('expanded');

//   // Se estiver expandido, remove a classe 'expanded' e redefine o texto do botão
//   if (isExpanded) {
//     cardText.classList.remove('expanded');
//     element.innerHTML = 'Learn more';
//   } else { // Se não estiver expandido, adiciona a classe 'expanded' e redefine o texto do botão
//     cardText.classList.add('expanded');
//     element.innerHTML = 'Olá mundo';
//   }
// }

// Obtém todos os botões "Learn more" e adiciona o evento de clique a cada um deles
var expandButtons = document.querySelectorAll('.expand-button');
expandButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    exibirMensagem(this);
  });
});



  