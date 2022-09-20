// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log('google');
  } else if (i % 5 == 0) {
    console.log('facebook');
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log('amazon');
  } else {
    console.log(i);
  }
}
