var arrowL = document.getElementById('arrow-left');
var arrowR = document.getElementById('arrow-right');
var active = 0;
arrowL.addEventListener('click', kurang);
arrowR.addEventListener('click', tambah);



function kurang() {
    var x = document.getElementsByClassName('pro-card');
    x[active].classList.remove("active");
    var y = active - 1;
    x[y].classList.add('active');
    active -= 1;
}

function tambah() {
    var x = document.getElementsByClassName('pro-card');
    x[active].classList.remove("active");
    var y = active + 1;
    x[y].classList.add('active');
    active += 1;
}
