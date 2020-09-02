

// 1st: ("Hello", 0, 5) 2nd: ("ello", 0, 4) 3rd: ("llo", 1, 3) 4th ("lo", 1, 2) 5th ("o", 1, 1) 6th ( "", 2, 0) 
// let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];



// if ("aeiouy".includes(word[i].toLowerCase()) && "aeiouy".includes(word[-i].toLowerCase())
// // const recurseReverse = (array) => {
// //   if (array === "") {
// //     return "";
// //   } else {
// //     return recurseReverse(array.shift()) + array[0];
// //   }
// // }
else if (i===string.length-1){
  if(string[i]=='e' && string[i-1] =='l'){
    count++;
  }
}

// MASTER 
function countSyllables(string, count=0, i=0) { // "a"
  if(!string[i]) {
    return count
  }
  if ("aeiouyAEIOUY".includes(string[i]) && !"aeiouyAEIOUY".includes(string[i-1])) {
    count ++
  } if ("eE".includes(string[i]) && string[i+1] === " ") {
    count--;
  } if (string[i] === string[string.length - 1] && string[i] === "e") {
    return count;
  }
return countSyllables(string, count, i+1)
}


console.log(countSyllables("An old silent pond"))
console.log(countSyllables("A frog jumps into the pond")) // Should return 8 but is returning 7 because of the "the"
console.log(countSyllables("Splash! Silence again."))

"An old silent pond"
"An frog jumps into the pond—"
"Splash! Silence again."

// console.log(countSyllables("a summer river being crossed how pleasing with sandals in my hands"))
// console.log(countSyllables("a summer river being crossed how pleasing with sandals in my hands")); //7 vowels // 4 syllables //6 fail
console.log(countSyllables("I like women who Dance and think like I do And who are pretty")) //Does work. Returns 16
console.log(countSyllables("the")) //DOES NOT WORK. Returns 0
console.log(countSyllables("he")) //DOES NOT WORK. Returns 0
console.log(countSyllables("she")) //DOES NOT WORK. Returns 0
console.log(countSyllables("spree")) //DOES NOT WORK. Returns -1
console.log(countSyllables("Silence"))
console.log(countSyllables(""))
console.log(countSyllables(""))
console.log(countSyllables("goodbye"))

if ((string[i] === "e" && string[i-2] === " ") || (string[i] === "e" && string[i-3] === " "))
if ((string[i] === string[string.length - 1] && string[i] === "e"))
/* 
function countSyllables(string, count=0, i=0) { // "a"
...   if(!string[i]) {
.....     return count
.....   }
...   if ("aeiouyAEIOUY".includes(string[i]) && !"aeiouyAEIOUY".includes(string[i-1])) {
.....     count ++
.....     console.log("First log ", count, string[i])
.....   } if (("eE".includes(string[i]) && string[i+1] === " ") || (string[i] === string[string.length - 1] && string[i] === "e")) {
.....     count --
.....     console.log("Second log ", count, string[i])
.....   }
...   console.log("Third log ", count, string[i])
... return countSyllables(string, count, i+1)
... }
*/


// KD-BRANCH
function countSyllables(string, count=0, i=0) { // "a"
  if(!string[i]) {
    return count
  }
  if ("aeiouyAEIOUY".includes(string[i]) && !"aeiouyAEIOUY".includes(string[i-1])) {
    count ++
  } if ("eE".includes(string[i]) && string[i+1] === " ") {
    count--;
  } if (string[i] === string[string.length - 1] && string[i] === "e") {
    return count;
  }
return countSyllables(string, count, i+1)
}

console.log(countSyllables("An old silent pond"))
console.log(countSyllables("A frog jumps into the pond"))
console.log(countSyllables("Splash! Silence again."))
console.log(countSyllables("The "))
console.log(countSyllables("The"))
console.log(countSyllables("Silence")) //2 correct
console.log(countSyllables("Silence ")) //3 incorrect
console.log(countSyllables("Defiance ")) //3 correct
console.log(countSyllables("Defiance")) //1 incorrect



// SM-BRANCH
function countSyllables(string, count=0, i=0) { 
  if(!string[i]) {
    return count
  }
  if ("aeiouyAEIOUY".includes(string[i]) && !"aeiouyAEIOUY".includes(string[i-1])) {
    count ++;
  } else if (i===string.length-1) {  
    if (string[i]==='e' &&  string[i-1]==='l'){
      count++;
      }
    return count;
  }
return countSyllables(string, count, i+1)
}


// NK-BRANCH
function countSyllables(string, count=0, i=0) { // "a"
  if(!string[i]) {
    return count
  }
  if ("aeiouyAEIOUY".includes(string[i]) && !"aeiouyAEIOUY".includes(string[i-1])) {
    count ++
  } if ((string[i] === "e" && string[i+1] === " ") || (string[i] === string[string.length -1 ] && string[i] === "e")) {
    count--;
  } if ((string[i] === "e" && string[i-2] === " ") || (string[i] === "e" && string[i-3] === " ")){
    count ++
  }
return countSyllables(string, count, i+1)
}