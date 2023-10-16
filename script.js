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


// menubar active link setting
const menuBtn = document.querySelectorAll('.menu-bar li a');

const activePage = window.location.pathname;

menuBtn.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
})


// destination active link setting
const destNav = document.querySelectorAll('.destCon-sub--nav li a')
destNav.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
})

//crew active link setting
const crewNav = document.querySelectorAll('.crew-navBar li a')
crewNav.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('activeCrew')
    }
})

//tech active link setting
const techNav = document.querySelectorAll('.techNav  div a')
techNav.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('techActive')
    }
})