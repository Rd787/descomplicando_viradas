/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-header, .animate-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Ativa animação de fade para acesso vitalício
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".animate-fade");
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Ativa animação nos títulos ao rolar
document.addEventListener("DOMContentLoaded", function () {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sectionHeadings.forEach(element => {
        headingObserver.observe(element);
    });
});

// Função para rolar para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibe o botão ao rolar
window.addEventListener("scroll", function() {
    const scrollBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});


  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

if (window.innerWidth > 768) {
    particlesJS("particles-js", { /* Configuração completa */ });
} else {
    particlesJS("particles-js", {
        particles: { number: { value: 20 }, /* Menos partículas para mobile */ }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".btn-social");
    socialIcons.forEach(icon => {
        icon.setAttribute("title", icon.getAttribute("aria-label"));
    });
});

// Função para exibir seções com efeitos de fade e slide
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in, .slide-in-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

// Verificação se DOM está carregado
document.addEventListener("DOMContentLoaded", function() {
    // Caso queira adicionar alguma ação extra quando os cards são clicados
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("click", function() {
            // Você pode adicionar funcionalidades extras ao clique, como abrir um modal customizado
            console.log("Card clicado: " + item.getAttribute("data-tooltip"));
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});

if (window.innerWidth > 768) {
    particlesJS("particles-js", { /* Configuração original */ });
} else {
    particlesJS("particles-js", {
        particles: { number: { value: 20 }, /* Menos partículas para mobile */ }
    });
}

if (window.innerWidth > 768) {
    particlesJS("particles-js", {
        // Configuração completa para desktops
    });
} else {
    particlesJS("particles-js", {
        particles: { number: { value: 10 } }, // Menos partículas para mobile
        move: { speed: 1 } // Reduz a velocidade para economizar recursos
    });
}

