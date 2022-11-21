import ChapterThree from "./chapter3";

test('Vector Addition and Subtraction should give the correct solution', () => {
  expect(ChapterThree.vectorAddition(
    [1,2,3],[4,5,6],true
  )).toStrictEqual(
    [5,7,9]
  )
  expect(ChapterThree.vectorAddition(
    [4,5,6],[1,2,3],false
  )).toStrictEqual(
    [3,3,3]
  )
})
