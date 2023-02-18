/*This program takes a password, and encrypts is through a ceaser cipher +15
I achieved that by created two maps, the first map containing every letter
and it's standard char code, and another map containing every letter with 
its code+15 places. Then we take a letter, for example A. A char code is 65
add 15 and get the charcode 80. The original letter with charcode 80 is P,
therefore A becomes P*/
/*a function does that to every letter in the password*/
//then the whole password is returned through a seperate function


let alphabet ='abcdefghijklmnopqrstuvwxyz'
let letter = ''
//do not change char code from 65!
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
//had to research and learn the character codes here
let charcode = 65
//can be replaced with prompt - currently hardcoded for ease
let password = prompt("Please enter your password to be encrypted: ")
let encrPassword = ''
let encrArray = []
console.log(`The password you entered was: ${password}`)

//created map for key:charcode value:letter
//contains standard alphanumerics char codes
let standardMap = new Map()
for (i in alphabet){
    letter = alphabet.charAt(i)
    standardMap.set(charcode, letter)
    i+=1
    charcode +=1
}
//created map for each letter's char code when shifted 15 places
let encrMap = new Map()
charcode = charcode+=15
for (i in alphabet){
    letter = alphabet.charAt(i);
    //if loop goes past Z(90) then it needs to reset to A, hence-26
    if (charcode>90){
        charcode = charcode-=26
        encrMap.set(letter, charcode)
        charcode+=1
    }
    else{
        encrMap.set(letter, charcode)
        charcode+=1
    }
    i++
}
//converts each letter into its encrypted version
function encryptLetter (a){
    //store original letter
    let endLetter = a
    //store an uppercase version to compare with
    let encrLetterCase = endLetter.toUpperCase()
    let encrLetterCharCode = 0 
    //if upper and lower case are the same, must be punctuation or number
    //so ignore it and return
    if (endLetter.toUpperCase() === endLetter.toLowerCase()){
        return endLetter;
    }
    //if the letter is uppercase, this has to be done as maps are stored 
    //in lower case
    else if (encrLetterCase == endLetter){
        //convert it to lower case, find the encrypted key
        //and switch it to the letter matching encrypted key
        //then turn it back into uppercase and return it.
        encrLetterCase = endLetter.toLowerCase()
        encrLetterCharCode = encrMap.get(encrLetterCase)
        endLetter = standardMap.get(encrLetterCharCode)
        return endLetter.toUpperCase()
    }
    //if its lower case just find the matching key for the letter
    //and return letter matching that key from the standard map
    else{
    encrLetterCharCode = encrMap.get(a)
    endLetter = standardMap.get(encrLetterCharCode)
    return endLetter;
}
}


//takes the password as a whole and calls encryptletter function for every letter
function convert (string) {
    let pwArray = []
    //splits original password into seperate items in array
    pwArray = password.split("");
    //for every item in the array...
    for (i in pwArray){
        //replace itself with the encrypted return from the above function
        encrArray[i] = encryptLetter(pwArray[i])
    }
    //put the now encrypted array back into one word
    encrPassword = encrArray.join('')
    //and return it
    return encrPassword;
}
console.log(`Your password after being encrypted is: ${convert(password)}`)

