import ChapterOne from "./chapter1";

test('The Gauss Jordan Elimination should return a correct solution or an error', () => {
	expect(ChapterOne.gaussJordanElim([[1,2,3,5],[5,6,7,8],[9,10,13,12]])).toStrictEqual([-3,3.25,0.5])
	expect(ChapterOne.gaussJordanElim([[1,2,3,4,5],[5,6,7,5,8],[9,10,13,6,12]]))
		.toStrictEqual('This System of Linear Equation either have no solution or have infinite solutions')
})

test('The Matrix Scalar Multiplication should return a scalar multiple of the matrix', () => {
	expect(ChapterOne.matrixScalarMultiply(
		[[1,2,3,5],[5,6,7,8],[9,10,13,12]], 5))
		.toStrictEqual(
			[[5,10,15,25],[25,30,35,40],[45,50,65,60]]
		)
})

test('Matrix Addition and Subtraction should return the correct solution or an error', () => {
	expect(ChapterOne.matrixAddition(
		[[1,1,1],[1,1,1],[1,1,1]], 
		[[1,1,1],[1,1,1],[1,1,1]], true))
		.toStrictEqual(
			[[2,2,2],[2,2,2],[2,2,2]]
		)
	expect(ChapterOne.matrixAddition(
		[[1,1,1],[1,1,1],[1,1,1]], 
		[[1,1,1],[1,1,1],[1,1,1]], false))
		.toStrictEqual(
			[[0,0,0],[0,0,0],[0,0,0]]
		)
	expect(ChapterOne.matrixAddition(
		[[1,1,1],[1,1,1],[1,1,1]], 
		[[1,1,1],[1,1,1]], true))
		.toStrictEqual('Invalid Operation!')
})

test('Matrix Tranpose should flip the matrix', () => {
	expect(ChapterOne.matrixTranspose(
		[[1,2,3],[4,5,6],[7,8,9]]
	)).toStrictEqual(
		[[1,4,7],[2,5,8],[3,6,9]]
	)
})

test('Matrix Multiplication should return the correct solution or an error', () => {
	expect(ChapterOne.matrixMultiplication(
		[[1,2,4], [2,6,0]],
		[[4,1,4,3],[0,-1,3,1],[2,7,5,2]]
	)).toStrictEqual(
		[[12,27,30,13],[8,-4,26,12]]
	)
	expect(ChapterOne.matrixMultiplication(
		[[1,2,4,5], [2,6,0,6]],
		[[4,1,4,3],[0,-1,3,1],[2,7,5,2]]
	)).toStrictEqual('Invalid Operation!')
})

test('Matrix Trace should return the correct solution or an error', () => {
	expect(ChapterOne.matrixTrace(
		[[-1,2,7,0],[3,5,-8,4],[1,2,7,-3],[4,-2,1,0]]
	)).toStrictEqual(11)
	expect(ChapterOne.matrixTrace(
		[[-1,2,7,0],[3,5,-8,4],[1,2,7,-3],[4,-2,1,0],[4,3,2,1]]
	)).toStrictEqual('No Solution. The matrix do not have a main diagonal')
})

test('Created an identity matrix', () => {
	expect(ChapterOne.identityMatrix(3)).toStrictEqual(
		[[1,0,0],[0,1,0],[0,0,1]]
	)
})

test('Find the inverse of a square matrix', () => {
	expect(ChapterOne.matrixInverse(
		[[1,2,3],[2,5,3],[1,0,8]]
	)).toStrictEqual(
		[[-40,16,9],[13,-5,-3],[5,-2,-1]]
	)
	expect(ChapterOne.matrixInverse(
		[[1,2,3,6],[2,5,3,6],[1,0,8,6]]
	)).toStrictEqual('Invalid input! Please input a square matrix')
})

test('Solved multiple system of linear equation at once', () => {
	expect(ChapterOne.solveMultipleLinsysWithInverse(
		[[1,2,3],[2,5,3],[1,0,8]], [[[4],[5],[9]],[[1],[6],[-6]]]
	)).toStrictEqual(
		[[[1],[0],[1]],[[2],[1],[-1]]]
	)
}) 

test('Find a polynomial function using polynomial interpolation', () => {
	expect(ChapterOne.polynomialInterpolation(
		[[1,3],[2,-2],[3,-5],[4,0]]
	)).toStrictEqual(
		[4,3,-5,1]
	)
})