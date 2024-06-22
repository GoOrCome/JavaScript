function wordCounter(sentence) {
  const wordCounts = sentence.split(/\W+/g) // Split using non-word characters
    .filter(word => word) // Remove empty strings
    .reduce((counts, word) => {
      const lowerWord = word.toLowerCase();
      counts[lowerWord] = (counts[lowerWord] || 0) + 1;
      return counts;
    }, {}); // Initialize counts object

  return wordCounts;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);

// OUTPUT:

// { please: 2,
//   submit: 1,
//   your: 2,
//   assignment: 1,
//   on: 1,
//   time: 1,
//   assignments: 1,
//   are: 1,
//   important: 1 }
