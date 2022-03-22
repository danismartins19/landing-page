const btnMobile = document.getElementById('menu-toggle');

btnMobile.addEventListener('click', ()=>{
    const cabecalho = document.getElementById('cabecalho');
    cabecalho.classList.toggle('active');
})