let button = document.getElementById('theboxes');
button.addEventListener('click', createBox);

let clr = document.getElementById('thecolor');
clr.addEventListener('click', fillcolor);


function fillcolor() {

    let cl = document.getElementById('color').value;
    console.log(cl);
    let cldiv = document.getElementsByClassName('myDiv');
    console.log(cldiv);
    for (let i = 0; i <= cldiv.length; i++) {
        cldiv[i].style.backgroundColor = cl;
    }


}


var oldvalue = 0;
var i = 1;

function createBox() {
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');

        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldvalue = document.getElementById('box').lastElementChild.innerHTML;

    }
}