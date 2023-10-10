//rompt for a number between 0 and 10.
//Multiply the given number by 9.
//Log the result (e.g. "2 * 9 = 18").

let num = prompt("Enter a number between 1 - 10");

if (isFinite(num)) {
  if (num >= 0 && num <= 10) {
    console.log(num + " * 9 = " + (num * 9));
  } else {
    alert("You input is not between 1 and 10");
  }
} else {
  alert("Your input is not a number ");
}
