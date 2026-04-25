function calculator() {
  const number = document.querySelectorAll('input');
  const firstNumber = number[0].value;
  const secondNumber = number[1].value;
  
  const result = document.getElementById('Result');
  const action = document.querySelectorAll('option');

  if (action[1].selected) {
     result.innerText = "Result: " + (parseFloat(firstNumber) + parseFloat(secondNumber));
  }
  else if (action[2].selected) {
     result.innerText = "Result: " + (parseFloat(firstNumber) - parseFloat(secondNumber));
  }
  else if (action[3].selected) {
     result.innerText = "Result: " + (parseFloat(firstNumber) * (parseFloat(secondNumber)));
  }
  else if (action[4].selected) {
       result.innerText = "Result: " + (parseFloat(firstNumber) / (parseFloat(secondNumber)));
  }
  else {
    alert('Please Choose The Appropriate Action');
  }
}