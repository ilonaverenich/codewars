/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example: 
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    return String(num)
      .split("")
      .map((item, index) => +item * Math.pow(10, String(num).length - index - 1))
      .filter((el) => el)
      .join(" + ");
  }
