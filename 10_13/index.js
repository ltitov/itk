// function setMyNameToAllInputs() {
//     var newValue = "Artur";
//     oneEl.value = newValue;
//     twoEl.value = newValue;
//     threeEl.value = newValue;
// }

// function setMyLastNameToAllInputs() {
//     var newValue = "Titov";
//     oneEl.value = newValue;
//     twoEl.value = newValue;
//     threeEl.value = newValue;
// }
function changeValue(newValue) {
    oneEl.value = newValue;
    twoEl.value = newValue;
    threeEl.value = newValue;
}

function setError(idValue) {
    document.getElementById(idValue).className = "error";
}

function getSumm(a, b) {
    return a + b;
}

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');
// setMyNameToAllInputs();
// setMyLastNameToAllInputs();
// setMyNameToAllInputs();
changeValue("Test");
changeValue("google");
changeValue("Test");
// var oneEl = document.getElementById('one').className = "error";
// var twoEl = document.getElementById('two').className = "error";
// var threeEl = document.getElementById('three').className = "error";
// setError('one');
// setError('two');
// setError('three');
// setError('div-id');
// setError('textarea-id');


getSumm(34, 23);
getSumm(3434, 12);
getSumm(23, 23);

var result1 = getSumm(34, 23);
// console.log(result1);
var result2 = getSumm(3434, 12);
// console.log(result2);
var result3 = getSumm(23, 23);
// console.log(result3);

function sayHello(name) {
    alert('My name ' + name);
}

function timeoutError() {
    setError('two');
}

// setTimeout(timeoutError, 2000);

function hideElement(params) {
    document.getElementById(params).style = "display: none;";
}

// hideElement('two');
// hideElement('three');

function showElement(params) {
    document.getElementById(params).style = "display: block;";
}

showElement('three');

// setInterval(hideElement);
// setInterval(showElement);
// console.log(getSumm(+'12', + +'34'));

function removeFunc(id) {
    if (id != null) {
        document.getElementById(id).remove();
    }
}

// removeFunc('two');

function addClassFunc(id, classEl) {
    if (id != null) {
        document.getElementById(id).className = classEl;
    }
};

function zeroSize() {
    addClassFunc('wrapper', 'zero');
}

function normalSize() {
    addClassFunc('wrapper', 'normal');
}


setTimeout(() => {
    zeroSize();
}, 3000);

// addClassFunc('wrapper', 'lol');
// function setWidthZero(id) {
//     if (id != null) {
//         var el = document.getElementById(id);
//         el.className = 'zero';
//     }
// }
// function setWidthNormal(id) {
//     if (id != null) {
//         var el = document.getElementById(id);
//         el.className = 'normal';
//     }
// }
// function addClassToElement() {
//     setWidthZero('wrapper');
// }
// function addClassToElement() {
//     setWidthNormal('wrapper');
// }
// function addClassToElement(el) {
//     setWidthNormal('el');
// }



let zeroBtn = document.getElementById('zeroButton');
let normalBtn = document.getElementById('normalButton');

zeroBtn.addEventListener('click', zeroSize);

normalBtn.addEventListener('click', normalSize);