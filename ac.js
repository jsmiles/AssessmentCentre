function palindrome(v) {
  if (!v) {
    console.log('please enter a value');
    document.getElementById('palindrome-response').innerHTML =
      '<p class="no-val">Please enter a value</p>';
  } else {
    const expression = /[^A-Za-z0-9]/g;
    const lower = v.toLowerCase().replace(expression, '');
    const reverse = lower.split('').reverse().join('');

    if (reverse !== lower) {
      document.getElementById('palindrome-response').innerHTML =
        '<p class="neg-case">This is <b>not</b> a palindrome</p>';
    } else {
      document.getElementById('palindrome-response').innerHTML =
        '<p class="pos-case">This is a palindrome</p>';
    }
  }
}
