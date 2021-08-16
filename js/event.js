document.body.style.backgroundColor = 'antiqueWhite';

//handle red button by function call
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//handle yellow button by setting function name
const yellowButton = document.getElementById('make-yellow');
yellowButton.onclick = makeYellow;

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}


//handle event using anonymous function
const greenButton = document.getElementById('make-green');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//handle by using add event listener
const mediumPurpleButton = document.getElementById('make-medium-purple');
mediumPurpleButton.addEventListener('click', makeMediumPurple);

function makeMediumPurple() {
    document.body.style.backgroundColor = 'mediumPurple';
}

//add eventListener
const peruButton = document.getElementById('make-peru');
peruButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'peru';
});


//direct shortcut
document.getElementById('make-pale-green').addEventListener('click', function () {
    document.body.style.backgroundColor = "paleGreen";
});