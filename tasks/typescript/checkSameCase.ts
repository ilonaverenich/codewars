export function sameCase(a : string, b : string) {
    let letterLower: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let letterUpper:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        if (letterLower.find(el=>el == a) && letterLower.find(el =>el ==b)){
            return 1
        } 
        if (letterUpper.find(el=>el == a) && letterUpper.find(el =>el ==b)){
            return 1
        }   
        if (letterUpper.find(el=>el == a) && letterLower.find(el =>el ==b)){
            return 0
        } 
         if (letterLower.find(el=>el == a) && letterUpper.find(el =>el ==b)){
            return 0
        }
        if (typeof +a == 'number' || typeof +b =='number'){
            return -1
        } 
      }