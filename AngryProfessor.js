function angryProfessor(k, a) {
    let onTimeStudents = 0;
    
    // Count the number of students who arrive on time
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
        onTimeStudents++;
      }
    }
    
    // Check if the class is cancelled or not
    if (onTimeStudents < k) {
      return 'YES'; // Class is cancelled
    } else {
      return 'NO';  // Class is not cancelled
    }
  }

  // Example usage
const k = 3; // Minimum number of on-time students required
const a = [-1, -3, 4, 2]; // Array of student arrival times

const result = angryProfessor(k, a);
console.log(result);

/**
 * In this code, the angryProfessor function takes two parameters: k (the minimum number of on-time students required) and a (an array of student arrival times). The function counts the number of students who arrive on time and checks if it's less than the minimum requirement. If there are fewer on-time students than required, it returns 'YES', indicating that the class is cancelled. Otherwise, it returns 'NO', indicating that the class is not cancelled.

In the example usage, we set the minimum requirement k to 3 and provide an array a of student arrival times. The function is called with these values, and the result is printed to the console.
 */