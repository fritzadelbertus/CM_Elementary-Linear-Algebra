// CHAPTER 1 : Systems of Linear Equations and Matrices

class ChapterOne {
    
	// Gauss Jordan Elimination
	// Notes: Only solve system of linear equation with one solution
	static gaussJordanElim( linsys : number[][] ) {
		const numOfEquation = linsys.length
		const numOfUnknown = linsys[0].length - 1
		if (numOfUnknown > numOfEquation) return 'This System of Linear Equation either have no solution or have infinite solutions'

		const input: number[][] = JSON.parse(JSON.stringify(linsys))
		const length = input.length
		// pointer = i, row to operate = j, column to operate = k
		for (let i = 0; i < length; i += 1) {
			if (input[i][i] === 0) return 'Mathematical Error! Cannot divide by zero'
			for (let j = 0; j < length; j += 1) {
				if (i !== j) {
					const ratio = input[j][i] / input[i][i]
					for (let k = 0; k < length + 1; k += 1) {
						input[j][k] = input[j][k] - ratio * input[i][k]
					}
				}
			}
		}

		const output = input.map((row, pointer) => row[length] / row[pointer])
		return output
	}

	// Scalar Multiple
	static matrixScalarMultiply( matrix: number[][], scalar: number ) {
		const input: number[][] = JSON.parse(JSON.stringify(matrix))
		const output = input.map((row) => row.map((cell) => cell * scalar))
		return output
	}

	// Matrix Addition and Subtraction
	static matrixAddition( matrix1: number[][], matrix2: number[][], addition:boolean) {
		if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) return 'Invalid Operation!'
		const matrixA: number[][] = JSON.parse(JSON.stringify(matrix1))
		const matrixB: number[][] = !addition ? this.matrixScalarMultiply(matrix2, -1) : JSON.parse(JSON.stringify(matrix2))

		let output = []
		for (let row = 0; row < matrix1.length; row += 1) {
			let rowOutput = []
			for (let col = 0; col < matrix1[0].length; col += 1) {
				rowOutput.push(matrixA[row][col] + matrixB[row][col])
			}
			output.push(rowOutput)
		}
		return output
	}

	// Matrix Transpose
	static matrixTranspose( matrix: number[][] ) {
		const input: number[][] = JSON.parse(JSON.stringify(matrix))
		let output = []
		for (let col = 0; col < input[0].length; col += 1) {
			let rowOutput = []
			for (let row = 0; row < input.length; row += 1) {
				rowOutput.push(input[row][col])
			}
			output.push(rowOutput)
		}
		return output
	}

	// Matrix Multiplication
	static matrixMultiplication( matrix1: number[][], matrix2: number[][] ) {
		if (matrix1[0].length !== matrix2.length) return 'Invalid Operation!'
		const evaluateCell = ( row: number[], col: number[] ) => {
			let output = 0
			for (let i = 0; i < row.length; i += 1 ) {
				output += (row[i] * col[i])
			}
			return output
		}
		const matrixA: number[][] = JSON.parse(JSON.stringify(matrix1))
		const matrixB: number[][] = JSON.parse(JSON.stringify(matrix2))
		let output = []
		for (let col = 0; col < matrixB[0].length; col += 1) {
			const colMultiply = matrixB.map((rowB) => rowB[col])
			let rowOutput = []
			for (let row = 0; row < matrixA.length; row += 1) {
				rowOutput.push(evaluateCell(matrixA[row], colMultiply))
			}
			output.push(rowOutput)
		}
		return this.matrixTranspose(output)
	}

	// Matrix Trace
	static matrixTrace( matrix: number[][] ) {
		if (matrix.length !== matrix[0].length) return 'No Solution. The matrix do not have a main diagonal'
		const output = matrix.reduce((total, pointer, index) => (total += pointer[index]), 0)
		return output
	}

	// Identity Matrix
	static identityMatrix( size: number ) {
		let output = [];
		for (let i = 0; i < size; i += 1) {
			let rowOutput = []
			for (let j = 0; j < size; j += 1) {
				if (i === j) {
					rowOutput.push(1)
				} else {
					rowOutput.push(0)
				}
			}
			output.push(rowOutput)
		}
		return output
	}

	// Matrix Inverse
	// Note: for square matrices
	static matrixInverse( matrix: number[][] ) {
		if (matrix.length !== matrix[0].length) return 'Invalid input! Please input a square matrix'
		const input: number[][] = JSON.parse(JSON.stringify(matrix))
		const length = input.length
		const output = this.identityMatrix(length)
		// pointer = i, simplify pointer's row = l, row to operate = j, column to operate = k
		for (let i = 0; i < length; i += 1) {
			if (input[i][i] === 0) return 'Mathematical Error! Cannot divide by zero'
			for (let l = 0; l < length; l += 1) {
				const inv = 1 / input[i][i]
				input[i][l] = input[i][l] * inv
				output[i][l] = output[i][l] * inv
			}
			for (let j = 0; j < length; j += 1) {
				if (i !== j) {
					const ratio = input[j][i] / input[i][i]
					for (let k = 0; k < length; k += 1) {
						input[j][k] = input[j][k] - ratio * input[i][k]
						output[j][k] = output[j][k] - ratio * output[i][k]
					}
				}
			}
		}
		return output
	}

	// Solve Multiple Linear System at Once
	static solveMultipleLinsysWithInverse( matrix: number[][], coefficients: number[][][] ) {
		const inverse = this.matrixInverse(matrix)
		if (typeof inverse === 'string') return inverse
		let output = []
		for (let i = 0; i < coefficients.length; i += 1) {
			output.push(this.matrixMultiplication(inverse, coefficients[i]))
		}
		return output
	}

	// Applications of Linear Systems
	static polynomialInterpolation( listOfPoint: number[][] ) {
		const input: number[][] = JSON.parse(JSON.stringify(listOfPoint))
		const length = input.length
		const createRow = ( x: number, y: number, size: number ) => {
			let output = []
			for (let i = 0; i < size; i += 1) {
				output.push(Math.pow(x, i))
			}
			output.push(y)
			return output
		}
		let output = []
		for (let j = 0; j < input.length; j += 1) {
			output.push(createRow(input[j][0], input[j][1], length))
		}
		const result = this.gaussJordanElim(output)
		return typeof result !== 'string' ? result : result
	}
}

export default ChapterOne;
