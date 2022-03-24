const btnMobile = document.getElementById('menu-toggle');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const cabecalho = document.getElementById('cabecalho');
    cabecalho.classList.toggle('active');
}

let linksMenu = document.querySelectorAll('.cabecalho-menuitem');

for(link of linksMenu){
    link.addEventListener('click', ()=>{
        cabecalho.classList.remove('active');
    });
}