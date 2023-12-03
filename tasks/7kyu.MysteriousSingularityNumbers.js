DESCRIPTION:
/* This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.
Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5]. */

let  realNumbers =  n => {
    let res = [];
    for (let index = 1; index < n; index++) {
       if(index %2!==0  && index %3!==0 && index %5!==0) {
        res.push(index)
       }
    }
    return res.length
}


