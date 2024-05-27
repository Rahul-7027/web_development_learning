// function counter(str) {
//     if (str === "A" || str === "E" || str === "I" || str === "O" || str === "U" || str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
//         console.log("This is Vowel Match")
//     }
//     else {
//         console.log("This is Constont ")
//     }
// }

// let data = "A";
// let CounterMatch = counter(data);
// console.log(1111, CounterMatch)


function conter(str) {
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    let isVowel = true;

    for (const char of str) {
        if (/[a-zA-Z]/.test(char) && !vowels.has(char)) {
            isVowel = false
            break;
        }
    }
    if (isVowel) {
        console.log("This is Vowel Match")
    }
    else {
        console.log("This is Consonant");

    }
}

let data = "AE";
let CounterMatch = conter(data);
console.log(111, CounterMatch)