/*
* @param {{word: string, rt: string}[]} words
*/
function genRuby(words) {
  const ruby = words.map(({ word, rt }) => {
    return `${word} <rp>(</rp><rt>${rt}</rt><rp>)</rp>`;
  }).join("");
  return ["<ruby>", ruby, "</ruby>"].join("");
}

module.exports = {
  genRuby
}