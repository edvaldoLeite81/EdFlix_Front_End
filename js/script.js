window.addEventListener('scroll', function () {
    var imgDetail = document.querySelector('.imgDetail');
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 0;
    var upArrow = this.document.querySelector("#arrowUp")

    if (scrolled) {
        navbar.classList.add('navbar-scrolled');
        upArrow.style.display = "block";
        imgDetail.style.opacity = '0.3';
        
    } else {
        navbar.classList.remove('navbar-scrolled');
        upArrow.style.display = "none"
        imgDetail.style.opacity = '0.5';
    }
});


//botao menu movel escurece o bg 
var btnMenu = document.querySelector('#btnMenu');
var n = new Number(0);
btnMenu.addEventListener("click", function () {
    var navbar = document.querySelector('.navbar');

    if (n.valueOf() == 0) {
        navbar.classList.add('navbar-scrolled');
        n = 1;
    } else {

        var coordenadaY = 0; // Coordenada vertical desejada
        window.scrollBy({
            top: coordenadaY - 1,
            behavior: 'smooth',
        });
        navbar.classList.remove('navbar-scrolled');
        n = 0;
    }
    console.log("valor de n:" + n.valueOf());
    console.log("Botão clicado!");
});

//botao menu movel escurece o bg 
var upArrow = this.document.querySelector("#arrowUp")
upArrow.addEventListener("click", function () {
   
        var coordenadaY = 0; // Coordenada vertical desejada
        window.scrollTo({
            top: coordenadaY,
            behavior: 'smooth',
        });
       
});