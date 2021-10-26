var sideMenuIsOpen = false;

(function () {
    "use strict";
    const openParagraph = document.querySelector('.open');
    const closedParagraph = document.querySelector('.closed');

    const menuButton = document.querySelector('#menu-button');
    menuButton.addEventListener("click", toggleSidebar); 

    if (isOpen()) {
        openParagraph.style.display = "block";
    }
    else {
        closedParagraph.style.display = "block";
    }
})();


function isOpen() {
    const date = new Date();
    const hour = date.getHours();
    const isOpen = hour < 16 && hour > 8;
    const isWeekend = (date.getDay() === 6) || (date.getDay() === 0);
    return isOpen && isWeekend;
}

function toggleSidebar() {
    const sideNav = document.querySelector("aside");
    const menuButton = document.querySelector("#menu-button img");
    sideMenuIsOpen = !sideMenuIsOpen;
    if(sideMenuIsOpen) {
        sideNav.style.left = "0";
        menuButton.src = "img/menu-close.png";
    }
    else {
        sideNav.style.left = "-250px";
        menuButton.src = "img/menu-open.png";
    }
    
    // sideNav.style.display = "block";
    
    // menuButton.onclick = function(){
    //     if(sideNav.style.right == "-250px"){
    //         sideNav.style.right = "0px";
    //         menu.src = "kuvat/close.png";
    //     }
    //     else{
    //         sideNav.style.right = "-250px";
    //         menu.src = "kuvat/menu.png";
    //     }
    // }
}