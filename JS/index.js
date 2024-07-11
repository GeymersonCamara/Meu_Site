const myObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((elements) => myObserve.observe(elements));

const meuObservador = new IntersectionObserver((entrada) => {
    entrada.forEach((entrar) => {
        if (entrar.isIntersecting) {
            entrar.target.classList.add('aparecer')
        } else {
            entrar.target.classList.remove('aparecer')
        }
    });
});

const elemento = document.querySelectorAll(".text");

elemento.forEach((elemento) => meuObservador.observe(elemento));