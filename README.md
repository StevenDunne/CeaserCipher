# CeaserCipher
Fun little ceaser cipher I made near the start of Hyperion

# How to run
To run the cipher, simply download the files and run index.html
This will open up a page in your browser, you can then open the Dev tools to view the console for output.

## How it works
This program takes a password, and encrypts is through a ceaser cipher +15.
I achieved that by creating two maps, the first map containing every letter
and it's standard ASCII char code, and another map containing every letter with 
its code+15 places. Then we take a letter, for example A. A char code is 65
add 15 and get the charcode 80. The original letter with charcode 80 is P,
therefore A becomes P*/
