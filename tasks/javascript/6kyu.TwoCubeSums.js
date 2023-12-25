/* DESCRIPTION:
Create a function
hasTwoCubeSums(n) 
which checks if a given number n can be written as the sum of two cubes in two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should be different and greater than 0.
E.g. 1729 = 9³+10³ = 1³+12³.
hasTwoCubeSums(1729); // true
hasTwoCubeSums(42);   // false */

function hasTwoCubeSums(n) {
    function cubeRoot(x) {
        return Math.floor(Math.pow(x, 1/3));
    }
    function getCubes(rangeStart, rangeEnd) {
        return Array.from({ length: rangeEnd - rangeStart + 1 }, (e, i) => Math.pow(rangeStart + i, 3));
    }
    const cubes = getCubes(1, cubeRoot(n));
    return cubes.some(a =>
        cubes.some(b => a + b === n) &&
        cubes.some(c => cubes.some(d => c + d === n && a !== c && a !== d))
    );
}


console.log(hasTwoCubeSums(1729));

