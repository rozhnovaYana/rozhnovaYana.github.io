'use strict';
document.addEventListener("DOMContentLoaded", () => {
    function slider() {
        const slider = document.querySelector(".promo-slider"),
            slide = document.querySelectorAll(".promo-slider__slide"),
            sliderWrapper = document.querySelector("promo-slider__wrapper");
        const width = getComputedStyle(slider).width;
        slide.forEach(item => {
            item.style.width = width;
        });
        let n = 1;
        function nextSlide() {
            if (n == slide.length) {
                n = 0;
            }
            slide.forEach(item => {
                item.classList.remove("promo-slider__slide_active");   
            });
            
                slide[n].classList.add("promo-slider__slide_active");
                n++;
            
              
        }
        setInterval(nextSlide, 2500);

    }
    slider();
    //menu
    const humb = document.querySelector(".humburger"),
        menu = document.querySelector(".header-menu"),
        menuItem = document.querySelectorAll(".header-menu__item");
    humb.addEventListener("click", () => {
        if (humb.classList.contains("humburger_active")) {
            
            closeMenu();
        } else {
             menu.classList.add("header-menu_active");
            document.body.style.overflow = "hidden";
            humb.classList.add("humburger_active");
        }
        
       
    });
    menuItem.forEach(item => {
        item.addEventListener("click", () => {
            closeMenu();
        });
    });
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains("header-menu")) {
            closeMenu();
        }
    });
    function closeMenu() {
        menu.classList.remove("header-menu_active");
        document.body.style.overflow = "";
        humb.classList.remove("humburger_active");
    }
    document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
      closeMenu();
  }
});
    
});

