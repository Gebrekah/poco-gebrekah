// Prompt for a number between 0 and 20.
// Check if the given number is even or odd.
// Report the result to the screen (e.g. "2 is even").

let num = prompt(
  "Enter a number between 1 - 20 to check it whether it's odd or even"
);

if (isFinite(num)) {
  if (num >= 0 && num <= 20) {
    if (num % 2 === 0) {
      alert(num + " is even");
    } else {
      alert(num + " is odd");
    }
  } else {
    alert("You input is not between 0 and 20");
  }
} else {
  alert("Your input is not a number ");
}
