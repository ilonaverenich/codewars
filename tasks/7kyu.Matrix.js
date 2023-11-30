/* Given a list of rows of a square matrix, find the product of the main diagonal.
Examples: */


function mainDiagonalProduct(mat){
    let res=[];
    mat.map((arr,i)=>res.push(arr[i]))
    return res.reduce((prev,curr)=>prev*curr,1)
  }

