import ChangeTabsContent from "./changeTabsContent.js";
import ChangeTabsContentMobile from "./changeTabsContentMobile.js";
import StartInteractiveElements from "./StartInteractiveElements.js";
import MobileMenu from "./mobileMenu.js";
import StickyHeader from "./stickyHeader.js";
import ScrollSpy from "./scrollSpy.js";

new StickyHeader();

let tabsMobile = document.querySelectorAll('.js-tabs-mobile');
if(tabsMobile.length > 0){
    tabsMobile.forEach(element => {
        new ChangeTabsContentMobile(element);
    });
}

let tabsContainer = document.querySelectorAll(".js-tabs");
if(tabsContainer.length > 0){
    tabsContainer.forEach(element => {
        new ChangeTabsContent(element);
    });
}

let mobile_menus = document.querySelectorAll('.js-mobile-menu');
if(mobile_menus !== null){
    mobile_menus.forEach(mobile_menu => {
        new MobileMenu(mobile_menu);
    });
}

let header_navigation = document.querySelectorAll('.js-scroll-spy');
if(header_navigation !== null){
    header_navigation.forEach(element => {
       new ScrollSpy(element);
    });
}

window.addEventListener('scroll', () => {
    let interactiveElements = document.querySelectorAll('.interactive-element');
    if(interactiveElements.length > 0){
        interactiveElements.forEach(element => {
            new StartInteractiveElements(element);
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
    let interactiveElements = document.querySelectorAll('.interactive-element');
    if(interactiveElements.length > 0){
        interactiveElements.forEach(element => {
            new StartInteractiveElements(element);
        });
    }
});



