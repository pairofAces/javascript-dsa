// Caesar Cipher Encryptor

// Given a string of lowercase letters and a non-negative integer
// representing a key. 

// Write a function that returns a new string by shifting every letter
// in the original string by k positions in the alphabet. 
    // k is the key

function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdeghijklmnopqrstuvwxyz'.split('');
};