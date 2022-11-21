import ChapterTwo from "./chapter2";

test('The Gauss Jordan Elimination should return a correct solution or an error', () => {
	expect(ChapterTwo.rrceDeterminant(
    [[1,0,0,3],[2,7,0,6],[0,6,3,0],[7,3,1,-5]]
  )).toStrictEqual(-546)
  expect(ChapterTwo.rrceDeterminant(
    [[3,1],[4,-2]]
  )).toStrictEqual(-10)
  expect(ChapterTwo.rrceDeterminant(
    [[1,2,3],[-4,5,6],[7,-8,9]]
  )).toStrictEqual(240)
})

test("Cramer's Rule should solve the linear system", () => {
  expect(ChapterTwo.cramerRule(
    [[1,0,2,6],[-3,4,6,30],[-1,-2,3,8]]
  )).toStrictEqual([-10/11,18/11,38/11])
})
