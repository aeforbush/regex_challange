# The Gist of Regular Expressions [Regex] 

Regular expression, aka Regex, is a sequence of characters that specify a particular search pattern.  Regex is a string-searching algorithm that uses "find", "match" and "replace" operations on strings.  Regex is also used for input validation; for example, validating an email.  

## Summary

As a demonstration I will match an email = QuotableThoreau@test.com 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

The components of the regex I am using to match the email  QuotableThoreau@test.com is as follows: 
username = `/^[A-Z]\w{1,}@[A-Z]\w*.(com)/ig;`

The `^` caret symbols is an anchor that matches only upper/lowercase letters in the first group at the beginning.
The first group `[A-Z]` matches a range of uppercase letters.
`\w{1,}` shorthand character class matches 
`@` matches @ symbol in email.
`[A-Z]\w*` matches all shorthand characters before `.`
`.(com)` is a group that matches `.com` 
`/ig` are globals flags; `i` ignores case and `g` performs a golbal search.

## Screen Shot
Screen Shot 2021-11-14 at 11.55.31 AM.png

### Anchors
Anchors are used to match position, not character, before, after or between characters. The caret symbol matches the first character in a string.  The $ matches the last character in the string. 

### Quantifiers
Quantifiers are used to match a number of instances of a character group, or character class in a string.  An exact count or range is placed in curly brackets.  For example, matching a four digit number would look like:  `/\d{4}/;`
A range would be written as such: `/\d{4,10}/;`
Or as an infinite range like: `/\d{4,};`

### OR Operator
OR Operator uses `|` the pipe character 

### Character Classes
Chatacter Classes allows matching of any symbol in a character set; for example, a phone number.  The regex would be written like so: `/\d/g;` 

### Flags
There are two flags `i and g`.  
The flag "g" performs a global search and is written like so: 
`/g`
The flag `i` ignores case and is written like so: `/i`
You can use `i and g` together and would be written as such: `/ig`

### Grouping and Capturing
Grouping and Capturing is `()` and are used to create blocks of patterns as well as matching different parts for extracting data and replacing it with something else.  For example, `([\w])`
You can also use non-capturing to use a group that doesn't need to be processed, which would look like: `(?: )`
You can also capture a group for later processing, which would look like: `(?<>)`

### Bracket Expressions
Bracket Expressions are used to define the character class.  Any characters inside the brackets will produce a match to the Regex pattern.  For example, `[a-z]/i` defines any character class within the alphabet and here we've also included the `i` flag to ignore case

### Greedy and Lazy Match
Greedy and Lazy Match are quantifiers.  Greedy will try to match the pattern at every position in the string.  On the other hand, Lazy is deigned to repeat a minimal number of times. This mode is enabled by putting `?` after the quantifier.  For example, 
Greedy would return `/G[a-z]*y/i` "Greedy".
Lazy would return `/G[a-z]*?y/i` "Gy".

### Boundaries
Boundary is a metacharacter `\b` is an anchor like `^` and `$`.  Boundaries match a "whole words only" match.  For example, `\bword\b`

### Back-references
Backreferences match the same text as previously matched by a capturing group.  The backreference uses `\1` to match the first captured group.  Backreferences can be reused as such: `\1\1` OR upto `\99` if a Regex has 99 captured groups.
### Look-ahead and Look-behind
Lookahead and Lookbehind are zero-length assertions similar to start and end of line anchors.  The difference is that "lookaround" only assert whether a match is possible or not.  Let's say you want to match `u`, a Lookahead would look like such: `/q(?=u)/`.
Let's say you wanted to be sure there is no `u`, a negative Lookahead would look like such: `/q(?!u)/`.
Lookbehind is similar to Lookahead except that it works backwards.  The positive Lookbehind is written as such: `/(?<=text)/`.
The negative Lookbehind is written as such: `/(?<!text>)/`.


## Author

My name is Aimee and I love creating solutions and learning something new everyday.  
GitHub: https://www.github.com/aeforbush