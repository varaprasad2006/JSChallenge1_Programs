// An array of numbers
let numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
// Loop through each element in the 'numbers' array and calculate the sum
numbers.forEach((element) => {
  sum += element;
});


// Calculate the average by dividing the sum by the number of elements in the array
let avg = sum / numbers.length;
console.log(avg);
