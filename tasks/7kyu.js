function removeSmallest(numbers) {
    let el =[...numbers].sort((a,b)=>a-b)[0];
    return numbers.filter((item,inx, array)=>array.find())

  }

console.log(removeSmallest([5, 4, 2, 3, 4, 1, 5,1]))