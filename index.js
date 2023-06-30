const phoneInput = document.getElementById('phone');
    
phoneInput.addEventListener('input', function(e) {
  const inputVal = e.target.value;
  const numericVal = inputVal.replace(/\D/g, '');

  let formattedVal = '';

  if (numericVal.length > 0) {
    formattedVal = '(' + numericVal.substring(0, 3);
  }

  if (numericVal.length > 3) {
    formattedVal += ') ' + numericVal.substring(3, 6);
  }
  if (numericVal.length > 6) {
    formattedVal += '-' + numericVal.substring(6, 10);
  }

  phoneInput.value = formattedVal;
});