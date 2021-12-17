const sentence = "This is some simple sentence that I must to test";
const the_words = "sime complex midium"
const words = eval(`/\\b(${the_words.replace(/ /g,'|')})\\b/gi`)
console.log(words)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(sentence.replace(words, x=>'*'.repeat(x.length)));
