// option-3:get Element by Id and then set onclick


const btnMakeBlue=document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
