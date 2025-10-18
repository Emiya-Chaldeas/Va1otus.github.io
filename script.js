// Lightweight interactivity: mobile menu toggle + small header effect
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn && menuBtn.addEventListener('click', ()=>{
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// simple header shrink on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 40) header.style.backdropFilter = 'blur(6px)';
  else header.style.backdropFilter = 'blur(4px)';
});
