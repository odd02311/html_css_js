// 유저 숫자를 임의로 부여한 코드

// // Function to generate random numbers
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Function to generate lottery numbers
//   function generateLotteryNumbers(numCount) {
//     var lotteryNumbers = [];
    
//     while (lotteryNumbers.length < numCount) {
//       var number = generateRandomNumber(1, 45);
      
//       if (lotteryNumbers.indexOf(number) === -1) {
//         lotteryNumbers.push(number);
//       }
//     }
    
//     return lotteryNumbers;
//   }
  
//   // Function to compare user numbers with lottery numbers
//   function checkLotteryNumbers(userNumbers, lotteryNumbers) {
//     var matchedNumbers = [];
    
//     for (var i = 0; i < userNumbers.length; i++) {
//       if (lotteryNumbers.indexOf(userNumbers[i]) !== -1) {
//         matchedNumbers.push(userNumbers[i]);
//       }
//     }
    
//     return matchedNumbers;
//   }
  
//   // Example usage
//   var userNumbers = [5, 12, 20, 33, 42, 15]; // User's chosen numbers
//   var bonusNumber = 8; // User's chosen bonus number
//   var lotteryNumbers = generateLotteryNumbers(6); // Generate 6 lottery numbers
  
//   console.log("User Numbers: " + userNumbers);
//   console.log("Bonus Number: " + bonusNumber);
//   console.log("Lottery Numbers: " + lotteryNumbers);
  
//   var matchedNumbers = checkLotteryNumbers(userNumbers, lotteryNumbers);
  
//   console.log("Matched Numbers: " + matchedNumbers);
//   console.log("Bonus Number Matched: " + (bonusNumber === lotteryNumbers[lotteryNumbers.length - 1]));





// 유저 숫자를 칠수있게 만든 코드

// Function to generate random numbers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate lottery numbers
  function generateLotteryNumbers() {
    var lotteryNumbers = [];
  
    while (lotteryNumbers.length < 6) {
      var number = generateRandomNumber(1, 45);
  
      if (lotteryNumbers.indexOf(number) === -1) {
        lotteryNumbers.push(number);
      }
    }
  
    lotteryNumbers.sort(function(a, b) {
      return a - b;
    });
  
    return lotteryNumbers;
  }
  
  // Function to check if the input is a valid number
  function isValidNumber(input) {
    return !isNaN(input) && input >= 1 && input <= 45;
  }
  
  // Function to prompt the user for their numbers
  function getUserNumbers() {
    var userNumbers = [];
    var count = 1;
  
    while (userNumbers.length < 6) {
      var userInput = prompt("Enter number " + count + " (between 1 and 45):");
  
      if (isValidNumber(userInput)) {
        var number = parseInt(userInput);
  
        if (userNumbers.indexOf(number) === -1) {
          userNumbers.push(number);
          count++;
        } else {
          alert("Number already chosen. Please enter a different number.");
        }
      } else {
        alert("Invalid input. Please enter a number between 1 and 45.");
      }
    }
  
    userNumbers.sort(function(a, b) {
      return a - b;
    });
  
    return userNumbers;
  }
  
  // Function to compare user numbers with lottery numbers
  function checkLotteryNumbers(userNumbers, lotteryNumbers) {
    var matchedNumbers = [];
  
    for (var i = 0; i < userNumbers.length; i++) {
      if (lotteryNumbers.indexOf(userNumbers[i]) !== -1) {
        matchedNumbers.push(userNumbers[i]);
      }
    }
  
    return matchedNumbers;
  }
  
  // Example usage
  var userNumbers = getUserNumbers();
  var lotteryNumbers = generateLotteryNumbers();
  
  console.log("User Numbers: " + userNumbers);
  console.log("Lottery Numbers: " + lotteryNumbers);
  
  var matchedNumbers = checkLotteryNumbers(userNumbers, lotteryNumbers);
  
  console.log("Matched Numbers: " + matchedNumbers);


// 유저가 숫자를 입력 할수있고 + 웹 스크린에 띄운 코드
// // Function to generate random numbers
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Function to generate lottery numbers
//   function generateLotteryNumbers() {
//     var lotteryNumbers = [];
  
//     while (lotteryNumbers.length < 6) {
//       var number = generateRandomNumber(1, 45);
  
//       if (lotteryNumbers.indexOf(number) === -1) {
//         lotteryNumbers.push(number);
//       }
//     }
  
//     lotteryNumbers.sort(function(a, b) {
//       return a - b;
//     });
  
//     return lotteryNumbers;
//   }
  
//   // Function to check if the input is a valid number
//   function isValidNumber(input) {
//     return !isNaN(input) && input >= 1 && input <= 45;
//   }
  
//   // Function to prompt the user for their numbers
//   function getUserNumbers() {
//     var userNumbers = [];
//     var count = 1;
  
//     while (userNumbers.length < 6) {
//       var userInput = prompt("Enter number " + count + " (between 1 and 45):");
  
//       if (isValidNumber(userInput)) {
//         var number = parseInt(userInput);
  
//         if (userNumbers.indexOf(number) === -1) {
//           userNumbers.push(number);
//           count++;
//         } else {
//           alert("Number already chosen. Please enter a different number.");
//         }
//       } else {
//         alert("Invalid input. Please enter a number between 1 and 45.");
//       }
//     }
  
//     userNumbers.sort(function(a, b) {
//       return a - b;
//     });
  
//     return userNumbers;
//   }
  
//   // Function to compare user numbers with lottery numbers
//   function checkLotteryNumbers(userNumbers, lotteryNumbers) {
//     var matchedNumbers = [];
  
//     for (var i = 0; i < userNumbers.length; i++) {
//       if (lotteryNumbers.indexOf(userNumbers[i]) !== -1) {
//         matchedNumbers.push(userNumbers[i]);
//       }
//     }
  
//     return matchedNumbers;
//   }
  
//   // Example usage
//   var userNumbers = getUserNumbers();
//   var lotteryNumbers = generateLotteryNumbers();
  
//   // Display the user numbers
//   var userNumbersElement = document.getElementById("userNumbers");
//   userNumbersElement.textContent = "User Numbers: " + userNumbers.join(", ");
  
//   // Display the lottery numbers
//   var lotteryNumbersElement = document.getElementById("lotteryNumbers");
//   lotteryNumbersElement.textContent = "Lottery Numbers: " + lotteryNumbers.join(", ");
  
//   // Compare and display the matched numbers
//   var matchedNumbers = checkLotteryNumbers(userNumbers, lotteryNumbers);
//   var matchedNumbersElement = document.getElementById("matchedNumbers");
//   matchedNumbersElement.textContent = "Matched Numbers: " + matchedNumbers.join(", ");