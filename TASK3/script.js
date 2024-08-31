const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let currentInput = '0';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput);
      } catch (error) {
        currentInput = 'Error';
      }
    } else if (value === 'C') {
      currentInput = '0';
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      currentInput += value;
    } else {
      currentInput = currentInput === '0' ? value : currentInput + value;
    }

    display.textContent = currentInput;
  });
});