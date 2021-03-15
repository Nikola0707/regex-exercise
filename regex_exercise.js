// Check if first letter is uppercase
const seq = "All our dreams can come true, if we have the courage to pursue them."
const isUppercase =  /^[A-Z]/;
if(seq.match(isUppercase) != null){
    console.log("First letter is uppercase")
}else{
    console.log("First letter is not uppercase")
}

// Check if e-mail address is valid
let email = 'ristoski@gmail.com' 
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
email.match(emailRegex)? console.log('E-mail is valid') : console.log('E-mail is not valid')

// Password Strength should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
const passStrengthRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
let password = "12ssE3#$"
password.match(passStrengthRegex) ? console.log('You have strong password') : console.log('Write better password')

// Return match string globaly
const csLewisQuote = 'We are what we believe we are.';
const regex1 = /are/g;
console.log(csLewisQuote.match(regex1)); 

// Return match string case sensitivity, in this case ( is )
const seq1 = "An important thing to remember is that regex is case sensitive."
const regexSeq1 = /is/g;
console.log(seq1.match(regexSeq1))