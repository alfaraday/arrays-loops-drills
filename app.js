//max and min
function max(numbers) {
  var result = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result
}


function min(numbers) {
  var result = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < result) {
      result = numbers[i];
    }
  }
  return result
}

//average
function average(numbers) {
  var total = 0
  for (var i=0; i<numbers.length; i++) {
    total += numbers[i]
  }
  total = total/numbers.length
  return total
}

//fizzbuzz
function fizzBuzz(countTo) {
  var result = []
  for (var i=1; i<= countTo; i++) {
    if (i%3 == 0 && i%5 == 0) {
      result.push("fizzbuzz");
    }
    else if (i%3 == 0) {
      result.push("fizz");
    }
    else if (i%5 == 0) {
      result.push("buzz");
    }
    else {
      result.push(i);
    }
  }
  return result;
}