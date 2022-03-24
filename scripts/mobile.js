const btnMobile = document.getElementById('menu-toggle');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const cabecalho = document.getElementById('cabecalho');
    cabecalho.classList.toggle('active');
}