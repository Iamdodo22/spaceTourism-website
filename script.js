"use strict";

const menuOpenBtn = document.querySelector('.menuOpen');
const menuCloseBtn = document.querySelector('.menuClose');
const menuBar = document.querySelector('.menu-bar');

menuOpenBtn.addEventListener('click', (e)=>{
    menuBar.style.display='block';
    menuCloseBtn.style.display='block';
    menuOpenBtn.style.opacity=0;
})
menuCloseBtn.addEventListener('click', (e)=>{
    menuBar.style.display='none';
    menuCloseBtn.style.display='none';
    menuOpenBtn.style.opacity=1;

    
})