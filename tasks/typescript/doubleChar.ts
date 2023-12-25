export function doubleChar(str: string): string{
    let strRez: string[] = str.split('')
    return strRez.map(element=>element+element).join('')
  }