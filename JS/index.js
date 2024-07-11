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

const meuObservador2 = new IntersectionObserver((entrada) => {
    entrada.forEach((entrar) => {
        if (entrar.isIntersecting) {
            entrar.target.classList.add('aparecer2')
        } else {
            entrar.target.classList.remove('aparecer2')
        }
    });
});

const elemento2 = document.querySelectorAll(".photo");

elemento2.forEach((elemento2) => meuObservador2.observe(elemento2));

const meuObservador3 = new IntersectionObserver((entrada) => {
    entrada.forEach((entrar) => {
        if (entrar.isIntersecting) {
            entrar.target.classList.add('aparecer2')
        } else {
            entrar.target.classList.remove('aparecer2')
        }
    });
});

const elemento3 = document.querySelectorAll(".photo2");

elemento3.forEach((elemento3) => meuObservador3.observe(elemento3));