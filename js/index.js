// Task 2 : Giving every h1 tag a color
const lightBlue = document.getElementsByTagName('h1');
for (const element of lightBlue) {
    element.style.color = 'lightblue';
}

// Task 3: Giving a background color to bagpack section
const bags = document.getElementById('bags');
bags.style.backgroundColor = 'tomato';
bags.style.borderRadius = '10px';
bags.style.paddingBottom = '10px';

// Task 4 : Give every card a border radius of 30px
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.classList.remove('rounded');
    card.style.borderRadius = '30px';
}

// task 5 & 6 : Buy now button to vanish after clicking
const buttons = document.getElementsByClassName("remove-button");
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// task 7 : Email button disabled
const email = document.getElementById('email');
email.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
    document.getElementById('email-text').value = '';
})

document.getElementById('email-text').addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        email.removeAttribute('disabled');
    } else {
        email.setAttribute('disabled', true);
    }
})

// 8. change any image by mouse enter
const images = document.getElementsByTagName('img');
for (const image of images) {
    image.addEventListener('mouseenter', function (event) {
        event.target.removeAttribute('src');

        event.target.setAttribute('src', 'images/logo.png');

    })
}

// 9. For double click background color change
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'mediumvioletred';
})