import ('./styles/main.css');
import { objects } from './source.js';

let page1SelectedMenu = 0;
let $page1Image = document.getElementById("page1-image");
let $page1ArrowLeft = document.getElementById("page1-left");
let $page1ArrowRight = document.getElementById("page1-right");
let $page1Circles = document.querySelectorAll(".page1-circle");
let $page1MenusDivs = document.querySelectorAll(".page1-menu-item-div");
let $page1MenusItems = document.querySelectorAll(".page1-menu-item");
let $page1InfoText = document.querySelectorAll(".page1-info-text");



function change() {
    $page1Image.style.backgroundImage = objects[page1SelectedMenu].image;
    $page1Image.style.opacity = "100%";
};


function changeImage() {
    $page1Image.style.opacity = `0%`;
    setTimeout(change, 500); 
};


function changeClassesMenu(number, change) {
    if (change === "add") {
        $page1Circles[number].classList.add('page1-circle-selected');
        $page1MenusDivs[number].classList.add('page1-menu-item-div-selected');
        $page1MenusItems[number].classList.add('page1-menu-item-selected');
    } else if (change === "remove") {
        $page1Circles[number].classList.remove('page1-circle-selected');
        $page1MenusDivs[number].classList.remove('page1-menu-item-div-selected');
        $page1MenusItems[number].classList.remove('page1-menu-item-selected');  
    }
};


function redrawPage1(selectedPage) {
    changeImage();
    $page1Circles.forEach((item,number) => {
        $page1InfoText[0].innerHTML = objects[selectedPage].city;
        $page1InfoText[1].innerHTML = objects[selectedPage].area;
        $page1InfoText[2].innerHTML = objects[selectedPage].time;
        $page1InfoText[3].innerHTML = objects[selectedPage].cost;
        if (number === selectedPage) {
            changeClassesMenu(number, "add");
        } else {
            changeClassesMenu(number, "remove");
        };
    });
};


$page1ArrowRight.addEventListener('click', () => {
    page1SelectedMenu++;
    if (page1SelectedMenu > objects.length-1) page1SelectedMenu=0;
    redrawPage1(page1SelectedMenu);
});


$page1ArrowLeft.addEventListener('click', () => {
    page1SelectedMenu--;
    if (page1SelectedMenu < 0) page1SelectedMenu=2;
    redrawPage1(page1SelectedMenu);
});


$page1Circles.forEach((item, number) => {
    item.addEventListener('click', () => {
        page1SelectedMenu = number;
        redrawPage1(page1SelectedMenu);
    })
});


$page1MenusDivs.forEach((item, number) => {
    item.addEventListener('click', () => {
        page1SelectedMenu = number;
        redrawPage1(page1SelectedMenu);
    })
});


redrawPage1(page1SelectedMenu);



