var sum = 0;
      // Loop from 10 to 30 to find odd numbers
      for (let i = 10; i <= 30; i++) {
        // Check if the number is odd
        if (i % 2 != 0) {
          // Add the current odd number to the running sum
          sum += i;
        }
      }
      console.log(
        "Sum of odd numbers greater than 10 and less than 30 is : " + sum);
