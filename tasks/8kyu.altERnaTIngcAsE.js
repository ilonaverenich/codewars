/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.  */

String.prototype.toAlternatingCase = function () {
  return this.split('').map((item)=> item == item.toLowerCase()?item.toUpperCase():item.toLowerCase()).join('')
}

