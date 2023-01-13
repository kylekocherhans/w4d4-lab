/*
My cipher takes a string and indexes every character. Every odd indexed letter and shifts it backward 1. Every even indexed letter is shifted forward 2. 0 is considered even. Spaces are left alone. Exclamation points and question marks swap for each other. For example, "hello!" becomes "jdnkq?". "h" is at an even index (0) so it shifts forward 2 -> j. e is at an odd index (1) so it shifts backward 1 -> d.

Encipher
"I love cryptography!" -> 
"K nnxd btxrsqftzrga?"

Decipher
"K nnxd btxrsqftzrga?" ->
"I love cryptography!"

abcdefghijklmnopqrstuvwxyz
*/

const encipherMap = {
    A: ["C", "Z"], a: ["c", "z"],
    B: ["D", "A"], b: ["d", "a"],
    C: ["E", "B"], c: ["e", "b"],
    D: ["F", "C"], d: ["f", "c"],
    E: ["G", "D"], e: ["g", "d"],
    F: ["H", "E"], f: ["h", "e"],
    G: ["I", "F"], g: ["i", "f"],
    H: ["J", "G"], h: ["j", "g"],
    I: ["K", "H"], i: ["k", "h"],
    J: ["L", "I"], j: ["l", "i"],
    K: ["M", "J"], k: ["m", "j"],
    L: ["N", "K"], l: ["n", "k"],
    M: ["O", "L"], m: ["o", "l"],
    N: ["P", "M"], n: ["p", "m"],
    O: ["Q", "N"], o: ["q", "n"],
    P: ["R", "O"], p: ["r", "o"],
    Q: ["S", "P"], q: ["s", "p"],
    R: ["T", "Q"], r: ["t", "q"],
    S: ["U", "R"], s: ["u", "r"],
    T: ["V", "S"], t: ["v", "s"],
    U: ["W", "T"], u: ["w", "t"],
    V: ["X", "U"], v: ["x", "u"],
    W: ["Y", "V"], w: ["y", "v"],
    X: ["Z", "W"], x: ["z", "w"],
    Y: ["A", "X"], y: ["a", "x"],
    Z: ["B", "Y"], z: ["b", "y"]
};

const decipherMap = {
    A: ["Y", "B"], a: ["y", "b"],
    B: ["Z", "C"], b: ["z", "c"],
    C: ["A", "D"], c: ["a", "d"],
    D: ["B", "E"], d: ["b", "e"],
    E: ["C", "F"], e: ["c", "f"],
    F: ["D", "G"], f: ["d", "g"],
    G: ["E", "H"], g: ["e", "h"],
    H: ["F", "I"], h: ["f", "i"],
    I: ["G", "J"], i: ["g", "j"],
    J: ["H", "K"], j: ["h", "k"],
    K: ["I", "L"], k: ["i", "l"],
    L: ["J", "M"], l: ["j", "m"],
    M: ["K", "N"], m: ["k", "n"],
    N: ["L", "O"], n: ["l", "o"],
    O: ["M", "P"], o: ["m", "p"],
    P: ["N", "Q"], p: ["n", "q"],
    Q: ["O", "R"], q: ["o", "r"],
    R: ["P", "S"], r: ["p", "s"],
    S: ["Q", "T"], s: ["q", "t"],
    T: ["R", "U"], t: ["r", "u"],
    U: ["S", "V"], u: ["s", "v"],
    V: ["T", "W"], v: ["t", "w"],
    W: ["U", "X"], w: ["u", "x"],
    X: ["V", "Y"], x: ["v", "y"],
    Y: ["W", "Z"], y: ["w", "z"],
    Z: ["X", "A"], z: ["x", "a"]
}

const alpha = Object.keys(encipherMap);

const cipher = (str, map) => {
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (alpha.includes(arr[i])) {
            arr[i] = map[arr[i]][i % 2];
        } else if (arr[i] === "!") {
            arr[i] = "?";
        } else if (arr[i] === "?") {
            arr[i] = "!";
        }
    }

    return arr.join("");
};

const phrase = "I love cryptography!";
const encipheredPhrase = cipher(phrase, encipherMap);
const decipheredPhrase = cipher(encipheredPhrase, decipherMap)
console.log(phrase);
console.log(encipheredPhrase);
console.log(decipheredPhrase);