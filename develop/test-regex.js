let sentence = "The dog chased the cat."
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/
let result = myRegex.test(myString);
console.log(result);

// matching
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let results = extractStr.match(codingRegex);
console.log(result);

// /i  || i is the flag that ignores case 
// /g || global flag || /ig = ignore case/global
// ./ || wildcard 
// /b[aiu]g/;
// /[a-z]/ig || match a range of letters
// /[2-6h-s]/ig || match a range of numbers and letters h-s

// /[^0-9aeiou]/ig || match all but 0-9 and vowels
// /s+/g || match consecutive s
// /Aa*/ || match all Aa 
// /t[a-z]*i || greedy (default) [* mean 0 or more occurances]
// /t[a-z]*?i/ || lazy match only returns ti
// /<.*>/  || finds all characters in string
// /<.*?>/ || ends at the first occurance at greater than sign
// /^Cal/ || matches only Cal at the beginning of the string
// /caboose$ || matches caboose only at the end of the string
// /\w/ || shorthand character class matches alph, 0-9 and _ 
// /\w/g || matches above plus occurance
// /\W/g || matches length (spaces and puncutation)
// /\d/g || matches digit length
// /\D/g || match all non numbers for length

// Find all C
let crowd = 'P1P2P3P4P5CCCP7';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// username validator
// {2,} number of times the previous thing can match {min, max}
// \d*$ all numbers, 0 or more numbers at the end
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/;
let result = userCheck.test(username);

// /\s/;  match whitespace
// /\S/g;  match non whitespace characters
// /Oh{3,6} no/; quanity specifiers match 3-6 h
// /z{4,}/; match all z
// /Tim{4}ber/; exact match = Timmmmber
// /favou?rite/; may have a u, may not have a u
// /q(?=u)/;  positive look ahead looks for u later in the string 
// /q(?!u)/; negative look ahead looks for no u later in the string 

// practical use of look ahead is for pattern checking 
let sampleWord = 'astronaut';
// five or more characters and 2 or more digits
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

// /(\w+)\s\1/; repeat () with \1

// repeating
let repeatNum = "42, 42, 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);


// (/(\w+)\s(\w+)/, '$2 $1); two capture groups $2 means second capture group
// search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText ="okie-dokie";
let result = huhText.replace(fixRegex, replaceText);

// write regex to remove whitespaces at beginning and end
let hello = "  Hello, World!  "
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');
console.log(result)
