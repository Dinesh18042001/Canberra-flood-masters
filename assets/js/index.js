$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,              
    autoplayTimeout: 3000,      
    autoplayHoverPause: true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});



let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};




