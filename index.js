
const ClassNames = {
    buttonDown: 'down-button',
    buttonUp: 'up-button',
    sidebar: 'sidebar',
    slidesContainer: 'slides-container',
    slide: 'slide',
    sidebarItem: 'sidebar__item',
};

const Selector = {
    buttonDown: `.${ClassNames.buttonDown}`,
    buttonUp: `.${ClassNames.buttonUp}`,
    sidebar: `.${ClassNames.sidebar}`,
    slidesContainer: `.${ClassNames.slidesContainer}`,
    slide: `.${ClassNames.slide}`,
    sidebarItem: `.${ClassNames.sidebarItem}`,
};

const CONTROLS_DOWN = 'down';
const CONTROLS_UP = 'up';

let sidebarContainer = document.querySelector(Selector.sidebar);
let slidesContainer = document.querySelector(Selector.slidesContainer);

let counter = 0;
let slidesNumber = slidesContainer.querySelectorAll(Selector.slide).length;

slidesContainer.style.top = `${-(slidesNumber - 1) * 100}vh`;

function setControllers() {
    let buttonDown = document.querySelector(Selector.buttonDown);
    let buttonUp = document.querySelector(Selector.buttonUp);

    buttonDown.addEventListener('click', () => {
        onControlsClick(CONTROLS_DOWN);
    });
    buttonUp.addEventListener('click', () => {
        onControlsClick(CONTROLS_UP);
    });
}

function onControlsClick(direction) {
    if (direction === CONTROLS_DOWN) {
        counter = (counter + 1) % slidesNumber;
        
        sidebarContainer.style.transform = `translateY(-${counter * 100}vh)`;
        slidesContainer.style.transform = `translateY(${counter * 100}vh)`;
    } else {
        counter = (counter - 1) % slidesNumber;

        sidebarContainer.style.transform = `translateY(-${Math.abs(counter) * 100}vh)`;
        slidesContainer.style.transform = `translateY(${Math.abs(counter) * 100}vh)`;
    }
}


setControllers();