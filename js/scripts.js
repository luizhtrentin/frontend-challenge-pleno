

window.addEventListener("load", function () {
    //swipers
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

    });
    // end swipers

    //header transition
    document.addEventListener("scroll", () => {
        let element = document.getElementById("header");
        let logo1 = document.getElementById('logo1');
        let logo2 = document.getElementById('logo2');
        if (window.pageYOffset === 0) {
            element.classList.add("header1");
            element.classList.remove("header2");
            logo1.style.display = "block";
            logo2.style.display = "none";
        } else {
            element.classList.add("header2");
            element.classList.remove("header1");
            logo1.style.display = "none";
            logo2.style.display = "block";
        }
    });

    //Ancôras
    const menuItems = document.querySelectorAll('.menu a')
    
    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function scrollToPosition(to) {
        smoothScrollTo(0, to, 1000);
    }

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.currentTarget);
        scrollToPosition(to);
    }

    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== 'undefined' ? duration : 400;
    
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
    
        const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };
    
    

    //fecha e abre menu mobile
    let hamburguer = document.getElementById('hamburguer');
    let close = document.getElementById('close');
    let menu = document.getElementById('menu');
    let outside = document.getElementById('outside');

    close.addEventListener("click", function () {
        menu.style.display = 'none';
        outside.style.display = 'none';
    });

    outside.addEventListener("click", function () {
        menu.style.display = 'none';
        outside.style.display = 'none';
    });

    hamburguer.addEventListener("click", function () {
        menu.style.display = 'block';
        outside.style.display = 'block';
    });

});