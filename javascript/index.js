// pasted from https://dev.to/programliftoff/create-a-basic-webpage-with-css-and-javascript--104i

document.getElementById('date').innerHTML = new Date().toDateString();

const input = prompt("What's your name?");
alert(`Your name is ${input}`);
