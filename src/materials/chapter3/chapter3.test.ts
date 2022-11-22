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

test('Vector Norm should return the length of the vector', () => {
  expect(ChapterThree.vectorNorm([-3,2,1])).toStrictEqual(Math.sqrt(14))
})

test('Find the unit vector for a given vector', () => {
  expect(ChapterThree.unitVector([2,2,-1])).toStrictEqual([2/3,2/3,-1/3])
})

test('Distance of two vector should return the proper scalar', () => {
  expect(ChapterThree.twoVectorDistance(
    [1,3,-2,7],[0,7,2,2]
  )).toStrictEqual(Math.sqrt(58))
})

test('Dot product two vector should return the correct scalar', () => {
  expect(ChapterThree.vectorDotProduct(
    [-1,3,5,7],[-3,-4,1,0]
  )).toStrictEqual(-4)
})

test('Angle calculation of two vector should return the correct angle', () => {
  expect(ChapterThree.twoVectorAngle(
    [2,0,0],[2,2,2]
  )).toStrictEqual(Math.acos(1 / Math.sqrt(3)))
})

test('Should return the component of the first vector which is orthogonal to the second vector', () => {
  expect(ChapterThree.vectorComponent(
    [6,2],[3,-9]
  )).toStrictEqual([6,2])
})
