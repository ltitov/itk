// setTimeout(function () {
//     var firstNameEl = document.getElementById('first-name');
//     firstNameEl.value = 'Dmitry';
//     var lastNameEl = document.getElementById('last-name');
//     lastNameEl.value = 'Google';
//     var radioEl = document.getElementById('famale').checked = 'true';
//     // radioEl.checked;
//     var checkBoxEl = document.getElementById('input-checkbox');
//     checkBoxEl.checked = 'true';
//     var avatarEl = document.getElementById('avatar');
//     avatarEl.src = 'https://picsum.photos/100/100';
//     var citiesEl = document.getElementById('cities');
//     citiesEl.value = 'Kiev';
//     var aboutMeEl = document.getElementById("about-me");
//     aboutMeEl.value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laudantium.';
// }, 1000);

// let firstNameElem = document.getElementsByClassName('first-name');
// firstNameElem[0].value = 'Dima';
// let lastNameElem = document.getElementsByClassName('last-name');
// lastNameElem[0].value = 'Google';
// let sexElem = document.getElementsByClassName('famale');
// console.log(sexElem[0].checked = 'true');

let buttonEl = document.getElementById('button');


function changeImg() {
    let avatarEl = document.getElementById('avatar');
    avatarEl.src = 'https://picsum.photos/100/100';

}
buttonEl.addEventListener('click', changeImg);