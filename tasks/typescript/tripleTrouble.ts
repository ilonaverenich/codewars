export function tripleTrouble(one: string, two: string, three: string): string {
    let resArr:string[] =[]
    for (let index = 0; index < one.length; index++) {
        resArr.push(one[index])
        resArr.push(two[index])
        resArr.push(three[index])
        
    }
    return resArr.join('');
  }
  