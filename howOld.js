const howOld = (uAge, uvYr) => {//Input (current age, desired year)
let bthYr = 2021 - uAge;
if (uvYr > 2021) {let gapYear = uvYr - 2021; //for future years
                    let calcAge = gapYear + uAge; 
    console.log (gapYear);
    console.log (calcAge);
  return `You will be ${calcAge} in the year ${uvYr}`
  }//Block 1
if (uvYr < 2021 && bthYr - uvYr > 0) {
    let gapYear = bthYr - uvYr;
    return`The year ${uvYr} was ${gapYear} years before you were born`;
    }//Block 2
if (uvYr < 2021 && uvYr - bthYr > 0) {
    let gapYear = uvYr - bthYr;
    return `You were ${gapYear} in the year ${uvYr}`}//Block 3

// Once your function is written, write function calls to test your code!
}//End howOld
console.log ( howOld(75, 1968))