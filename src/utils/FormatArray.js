export const formatArray = function (arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      return "Discover";
    }
  
    // Check if the array is empty
    if (arr.length === 0) {
      return "Discover";
    }
  
    // Convert all values to strings
    const stringArray = arr.map(String);
  
    // Get the last element separately
    const lastElement = stringArray.pop();
  
    // Join the array elements with commas and add the last element
    const result = stringArray.join(', ') + ', and ' + lastElement + '.';
  
    return result;
  }