/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheroo(x){
    let str = x.replace(/a/g, 'x');
    str = str.replace(/b/g, 'a');
    str = str.replace(/x/g, 'b');
    return str
}
