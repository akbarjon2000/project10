const section = document.querySelector('section');
const line = document.querySelector('.line');
const input = document.querySelector('input');
section.addEventListener('mouseover', function () {
    line.style.width = '50px';
})
section.addEventListener('mouseleave', function () {
    line.style.width = '35px';
})
input.addEventListener('click', function () {
    input.style.border = '';
})