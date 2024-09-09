// for banner 
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



// for nav scroll
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};




//  for nav manu
$(document).ready(function() {
    $(".custom-dropdown-toggle").click(function(e) {
        e.preventDefault();
    
        var $dropdownMenu = $(this).next(".custome-dropdown-menu");

        $(".custome-dropdown-menu").not($dropdownMenu).slideUp(200);

        $dropdownMenu.slideToggle(200);
    });

    $(document).click(function(e) {
        var $target = $(e.target);

        if (!$target.closest('.dropdown').length) {
            $(".custome-dropdown-menu").slideUp(200);
        }
    });
    $(".dropdown").click(function(e) {
        e.stopPropagation();
    });
});

