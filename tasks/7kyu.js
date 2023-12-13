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

  console.log(scf([133, 147, 427, 266]))