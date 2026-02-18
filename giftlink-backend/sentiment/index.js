import natural from "natural";   // ✅ Task 8 requirement

const tokenizer = new natural.WordTokenizer();

export function analyzeSentiment(text) {
  const words = tokenizer.tokenize(text);
  return words.length;
}
