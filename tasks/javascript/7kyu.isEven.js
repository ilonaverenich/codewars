/* Is the number even?
If the numbers is even return true. If it's odd, return false.
Oh yeah... the following symbols/commands have been disabled!
use of % */

  let isEven =(num)=> {
    let number = ['2','4','6','8','0']
    return number.includes(String(num).substr(-1))
  }

  console.log(isEven(432))