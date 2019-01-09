'use strict'

function d2b(num) {
  return num.toString(2);
}

function d2h(num) {
  if (num < 0) {
    num = 0xFFFFFFFF + num + 1;
  }
  return num.toString(16).toUpperCase();
}

function d2o(num) {
  return num.toString(8);
}

function b2d(num) {
  return parseInt((num + '').replace(/[^01]/gi, ''), 2);
}

function h2d(num) {
  return num.toLowerCase().split('').reduce( (result, ch) => result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);
}

function o2d(num) {
  return parseInt(num, 8);
}

document.getElementById('d2bb').addEventListener('click', function() {
  var val = document.getElementById('d2b').value;
  if (val === '') {
    document.getElementById('d2b_result').innerHTML = 'Please Enter a value';
  } else {
    document.getElementById('d2b_result').innerHTML = val + '  -->  ' + d2b(parseInt(val));
  }
});

document.getElementById('d2hb').addEventListener('click', function() {
  var val = document.getElementById('d2h').value;
  if (val === '') {
    document.getElementById('d2h_result').innerHTML = 'Please Enter a value';
  } else {
  document.getElementById('d2h_result').innerHTML = val + '  -->  ' + d2h(parseInt(val));
  }
});

document.getElementById('d2ob').addEventListener('click', function() {
  var val = document.getElementById('d2o').value;
  if (val === '') {
    document.getElementById('d2o_result').innerHTML = 'Please Enter a value';
  } else {
  document.getElementById('d2o_result').innerHTML = val + '  -->  ' + d2o(parseInt(val));
  }
});

document.getElementById('h2db').addEventListener('click', function() {
  var val = document.getElementById('h2d').value;
  if (val === '') {
    document.getElementById('h2d_result').innerHTML = 'Please Enter a value';
  } else {
  document.getElementById('h2d_result').innerHTML = val + '  -->  ' + h2d(val);
  }
});

document.getElementById('b2db').addEventListener('click', function() {
  var val = document.getElementById('b2d').value;
  if (val === '') {
    document.getElementById('b2d_result').innerHTML = 'Please Enter a value';
  } else {
  document.getElementById('b2d_result').innerHTML = val + '  -->  ' + b2d(val);
  }
});

document.getElementById('o2db').addEventListener('click', function() {
  var val = document.getElementById('o2d').value;
  if (val === '') {
    document.getElementById('o2d_result').innerHTML = 'Please Enter a value';
  } else {
  document.getElementById('o2d_result').innerHTML = val + '  -->  ' + o2d(val);
  }
});
