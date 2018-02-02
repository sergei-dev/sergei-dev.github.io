$(document).ready(function() {
    function scrolls(element) { 
    const slider = document.querySelector(element); 
    let isDown = false; 
    let startX; 
    let scrollLeft; 

    slider.addEventListener('mousedown', (e) => { 
    isDown = true; 
    slider.classList.add('active'); 
    startX = e.pageX - slider.offsetLeft; 
    scrollLeft = slider.scrollLeft; 
    }); 

    slider.addEventListener('mouseleave', () => { 
    isDown = false; 
    slider.classList.remove('active'); 
    }); 

    slider.addEventListener('mouseup', () => { 
    isDown = false; 
    slider.classList.remove('active'); 
    }); 

    slider.addEventListener('mousemove', (e) => { 
    if (!isDown) return; 
    e.preventDefault(); 
    const x = e.pageX - slider.offsetLeft; 
    const walk = (x - startX) * 3; 
    slider.scrollLeft = scrollLeft - walk; 
    }); 
    } 

    scrolls('.tabs-navigation ul');
    scrolls('#categories-scroll2');
    scrolls('#categories-scroll-city');
    scrolls('#categories-scroll-weather-btn');
    scrolls('#weather-scroll');
});