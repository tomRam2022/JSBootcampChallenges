/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
    if (str.includes(letter)) {
        return true;
    }
return false;
}

function isPalindrome(str) {
    let reverseStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr === str;
}

function cap(str, letter) {
    const index = str.indexOf(letter);
    if ( index < 0) {
        return 'sorry not found';
    }

    const returnLetter = str[index+ 1].toUpperCase();
    return returnLetter;

}

function firstCharacter(str1, str2) {
    const cap1 = str1[0].toUpperCase();
    const cap2 = str2[0].toUpperCase();

    return cap1 === cap2;
}

module.exports = { cap, firstCharacter };
