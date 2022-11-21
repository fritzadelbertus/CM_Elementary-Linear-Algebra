// CHAPTER 2 : Determinants

class ChapterTwo {

  // Find Determinants of a square matrix
  // Using row reduction + cofactor expansion
  // Notes: the determinant of trianglular matrix is the product of the main diagonal
  static rrceDeterminant( matrix: number [][] ) {
    const input: number[][] = JSON.parse(JSON.stringify(matrix))
    const length = input.length
    // pointer = i, row to operate = j, column to operate = k
		for (let i = 0; i < length; i += 1) {
      if (input[i][i] === 0) return 'Mathematical Error! Cannot divide by zero'
      for (let j = i; j < length; j += 1) {
        if (j !==  i ) {
          const ratio = input[j][i] / input[i][i]
          for (let k = 0; k < length; k += 1) {
            input[j][k] = input[j][k] - ratio * input[i][k]
          }
        }
			}
		}
    const output = input.reduce((total, row, pointer) => total * row[pointer], 1)
    return Math.round(output)
  }

  // Cramer's Rule to Solve a Linear System
  static cramerRule( matrix: number[][] ) {
    if (matrix.length !== matrix[0].length - 1) return 'Cannot solve this linear system, The number of equation must match the number of unknown'
    const input: number[][] = JSON.parse(JSON.stringify(matrix))
    const coefficients = input.map((row) => row[row.length - 1])
    const matrixA = input.map((row) => row.slice(0, row.length - 1))
    const det = this.rrceDeterminant(matrixA.map(item => item))
    if (typeof det === 'string') return det
    let output = []
    for (let i = 0; i < matrixA.length; i += 1) {
      let holder: number[][] = JSON.parse(JSON.stringify(matrixA))
      for (let j = 0; j < matrixA.length; j += 1) {
        holder[j][i] = coefficients[j]
      }
      const deti = this.rrceDeterminant(holder)
      if (typeof deti === 'string') return deti
      output.push(deti / det)
    }
    return output
  }
}

export default ChapterTwo
