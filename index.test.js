const {genRuby} = require("./index")

test("genRuby successful", () => {
  const result = genRuby([
    {word: "漢字", rt: "かんじ"},
  ])
  expect(result).toBe("<ruby>漢字 <rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>")
})

test("genRuby with multi words", () => {
  const result = genRuby([
    {word: "漢字", rt: "かんじ"},
    {word: "日本", rt: "にっぽん"},
  ])
  expect(result).toBe("<ruby>漢字 <rp>(</rp><rt>かんじ</rt><rp>)</rp>日本 <rp>(</rp><rt>にっぽん</rt><rp>)</rp></ruby>")
})