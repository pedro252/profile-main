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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollButton = document.getElementById("scrollButton");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
  
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