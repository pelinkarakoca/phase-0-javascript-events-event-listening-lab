const input = document.getElementById('button');

const clickMe = () => alert('I was clicked');

function addingEventListener() {
    input.addEventListener('click', clickMe);
}

addingEventListener();

