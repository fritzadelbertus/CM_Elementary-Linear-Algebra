import ChapterOne from "./chapter1";

test('Solved a system of linear equation using Gauss Jordan Elimination', () => {
    expect(ChapterOne.gaussJordanElim([[1,2,3,5],[5,6,7,8],[9,10,13,12]])).toStrictEqual([-3,3.25,0.5])
})

test('Operated matrix multiplication with scalar', () => {
    expect(ChapterOne.matrixScalarMultiply([[1,2,3,5],[5,6,7,8],[9,10,13,12]], 5)).toStrictEqual([
        [5,10,15,25],
        [25,30,35,40],
        [45,50,65,60]
    ])
})