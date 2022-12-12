import $ from 'jquery'

let maxBtn = document.getElementById("max");
let lang =document.getElementById("lang");
let min = document.getElementById('min')
let bottom = document.getElementById('bottom');
let topi = document.getElementById('top');

maxBtn.addEventListener("click" , function(){

    lang.style.display = 'none';
    min.style.display = 'block';
    maxBtn.style.display = 'none';
    bottom.style.height = '92%';
    topi.style.height = '8%';
    
})

min.addEventListener("click" , function(){

    lang.style.display = 'flex';
    min.style.display = 'none';
    maxBtn.style.display = 'block';
    bottom.style.height = '85%';
    topi.style.height = '15%';

})

$(document).ready(function () {
    $('#menu ul li a').click(function (ev) {
        $('#menu ul li').removeClass('selected');
        $(ev.currentTarget).parent('li').addClass('selected');
    });
});