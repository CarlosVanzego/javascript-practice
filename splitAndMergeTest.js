function splitAndMerge(string, seperator) {
  let words = string.split(' ');
  let mergedWords = [];
  
  for (let i = 0; i < words.length; i++) {
    let mergedWord = words[i].split('').join(seperator);
    
    mergedWords.push(mergedWord);
  }
  
  return mergedWords.join(' ');
}

console.log(splitAndMerge("this is a test", "*"))