//Function to count the number of vowels in a word

//  function declaration that takes a word
function totalVowels(word) {
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            count++;
        }
    }

    //return value of function totalVowels
    return count;
}

console.log(totalVowels("julius"))
//Function to find the longest word in a sentence if there are multiple long equal words find the word with more vowels by calling the vowels function and passing the word in to find the count of vowels and use JS operaters to find the word

//Function declaration that takes a sentence

function longestWordInSentence(sentence) {

    let words = sentence.match(/[a-z]+/g);

    let longestWord = "";

    for (let a = 0; a < words.length; a++) {
        let word = words[a];


        if (word.length > longestWord.length) {
            longestWord = word;
        } else if (word.length === longestWord.length) {
            if (totalVowels(word) > totalVowels(longestWord)) {
                longestWord = word;
            }
        }
    }


    //Return of the function longestWordInSentence  
    return longestWord
}

console.log(longestWordInSentence("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))