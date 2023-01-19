let addCount = document.getElementById('add');
let subCount = document.getElementById('subtract');
let count = 0

addCount.onclick = function() {addFunction()}
function addFunction() {
    count +1;
    document.getElementById('count').innerHTML= count += 1;
}

subCount.onclick = function() {subFunction()}
function subFunction() {
    count -1;
    document.getElementById('count').innerHTML= count -= 1;
}