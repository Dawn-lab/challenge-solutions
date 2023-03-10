//Vowels function declaration that takes a word

function totalVowels(word){
    let vowels = "aeiou";
    let count  = 0;

    for (let i = 0; i < word.length; i++){
        if (vowels.indexOf(word[i]) !== -1 ){
            count++;
        }
    }

    //return value
    return count;
}


//Function that finds the longest word in a sentence and takes a sentence

function longestWordInGivenSentence(sentence){

    //Extracts words containing English alphabet for the sentence AND IGNORES upper case letters
    let words = sentence.match(/[a-z]+/g);

    let longestWord = "";

    for(let a = 0; a < words.length;  a++){
        let word = words[a];


        if(word.length > longestWord.length){
            longestWord = word;
        } else if ( word.length === longestWord.length) {
            if (totalVowels(word) > totalVowels(longestWord)){
                longestWord = word;
            }
        }
    }

    //return value of the function

    return longestWord;
}


console.log(longestWordInGivenSentence("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))