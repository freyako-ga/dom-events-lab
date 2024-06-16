/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//      display.innerText = (event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });
//   const calculator = document.querySelector('#calculator');
//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

buttons.forEach(button) => {
    button.adEventListener ('click', function) {
if (button.innerText === 'C'){
    display.innerText = '';
} else if (button.innerText === '=') {
    display.innerText = eval(display.innerText);
} else{
    display.innerText = display.innerText + button.innerText;
}
    }
}