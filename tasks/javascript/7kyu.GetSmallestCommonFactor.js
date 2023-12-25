/* DESCRIPTION:
Given an array of integers, return the smallest common factors of all integers in the array.
When i say Smallest Common Factor i mean the smallest number above 1 that can divide all numbers in the array without a remainder.
scf([200, 30, 18, 8, 64, 34]) //=> 2
scf([21, 45, 51, 27, 33]) //=> 3
scf([133, 147, 427, 266]) //=> 7 */

function scf(array){
let minValue = [...array].sort((b,a)=>b-a)[0]
    let res = []
     for (let index = 2; index <= minValue; index++) {
       if (minValue%index ==0){
        res.push(index)
       }
        
    } 
    return array.length== 0 ?1:+res.filter((el,index)=> array[index]%el==0).join('')
  }
