import ChangeTabsContent from "./changeTabsContent.js";
import ChangeTabsContentMobile from "./changeTabsContentMobile.js";
import StartInteractiveElements from "./StartInteractiveElements.js";

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

window.addEventListener('DOMContentLoaded', () => {
    let interactiveElements = document.querySelectorAll('.interactive-element');
    if(interactiveElements.length > 0){
        interactiveElements.forEach(element => {
           new StartInteractiveElements(element);
        });
    }
});

window.onscroll = function(){stickyStart()};

let header = document.querySelector('#header');
let sticky = header.offsetTop;

function stickyStart() {
    if(window.pageYOffset > sticky){
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

let sections = document.querySelectorAll('[data-navigation]');
let nav_links = document.querySelectorAll('.header__navigation-link');

function isScrolledIntoView(el){
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop <= 400) && (elemBottom >= 400);
    if(isVisible){
        nav_links.forEach(link => {
            let href = link.getAttribute('href');
            let id = el.getAttribute('data-navigation');
            link.classList.remove('header__navigation-link--active');
            if(href == id){
                link.classList.add('header__navigation-link--active');
            } else if(id == 'main-section'){
                link.classList.remove('header__navigation-link--active');
            }
        })
    }
};

window.addEventListener('scroll', () => {
    let interactiveElements = document.querySelectorAll('.interactive-element');
    if(interactiveElements.length > 0){
        interactiveElements.forEach(element => {
            new StartInteractiveElements(element);
        });
    }

    sections.forEach(section => {
        isScrolledIntoView(section);
    });
});

function toggleMenu(){
    let menu = document.querySelector('#mobile-menu');
    let mask = document.querySelector('#mask');
    let wrapper = document.querySelector('#wrapper');
    let content = document.querySelector('#content');
    document.querySelector('.js-hamburger').classList.toggle("active");
    menu.classList.toggle("toggled");
    mask.classList.toggle('shown');
    content.classList.toggle("toggled");
    if(menu.classList.contains("toggled")) {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
        document.querySelector('html').style.overflow = 'auto';
    }
}

let hamburger = document.querySelector('.js-hamburger');
if(hamburger !== null){
    hamburger.addEventListener('click', event => {
        event.preventDefault();
        toggleMenu();
    });
}

let mobile_close = document.querySelector('.js-mobile-close');
if (mobile_close != null) {
    mobile_close.addEventListener('click', function(e) {
        let menu = document.querySelector('#mobile-menu');
        if (menu != null && menu.classList.contains('toggled')) {
            let mask = document.querySelector('#mask');
            e.preventDefault();
            document.body.style.overflow = 'initial';
            document.querySelector('html').style.overflow = 'initial';
            menu.classList.remove('toggled');
            mask.classList.remove('shown');
            document.querySelector('.js-hamburger').classList.toggle("active");
        }
    });
}

