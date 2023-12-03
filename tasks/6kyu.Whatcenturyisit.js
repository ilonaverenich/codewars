/* What century is it?
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation. */

function whatCentury(year){
    const arrYears = {
        0 : 'th',
        1 : 'st',
        2 : 'nd',
        3: 'th',
        4: 'th',
        5: 'th',
        6: 'th',
        7: 'th',
        8:'th',
        9:'th'
    }
    const centery = Math.floor((year-1)/100) + 1;
    const lastLetter = +String(centery).split('').slice(-1).join('')
    return  centery+arrYears[lastLetter]
  
}
