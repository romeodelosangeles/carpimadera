// DWD 2021

(() => {
const $btnMenu = document.querySelector(".btn-menu"),
      $headerMenu = document.querySelector(".header-menu");
        
    $btnMenu.addEventListener("click", (e) => {
        e.preventDefault();   
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $headerMenu.classList.toggle("visible");    
    });

$headerMenu.addEventListener("click", (e) => {
        e.preventDefault();
        if(!e.target.matches) return false;
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $headerMenu.classList.toggle("visible");   
});

})();