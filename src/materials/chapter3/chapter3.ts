// CHAPTER 3 : Euclidean Vector Spaces

class ChapterThree {

  // Vector Addition and Subtraction
  static vectorAddition( vector1: number[], vector2: number[], addition: boolean ) {
    const vectorA = vector1.slice()
    const vectorB = addition ? vector2.slice() : vector2.slice().map((item) => item * -1)
    const output = vectorA.map((item, index) => item + vectorB[index])
    return output
  }

  // Norm Vector
  static vectorNorm( vector: number[] ) {
    const input = vector.slice()
    const output = Math.sqrt(input.reduce((total, current) => total += current * current, 0))
    return output
  }

  // Unit Vector
  static unitVector( vector: number[] ) {
    const input = vector.slice()
    const coef = this.vectorNorm(input)
    const output = input.map((item) => item / coef)
    return output
  }

  // Distance of two vectors
  static twoVectorDistance( vector1: number[], vector2: number[] ) {
    const vectorA = vector1.slice()
    const vectorB = vector2.slice()
    const output = Math.sqrt(vectorB.reduce((total, current, index) => total += Math.pow(current - vectorA[index], 2), 0))
    return output
  }

  // Dot Product
  static vectorDotProduct( vector1: number[], vector2: number[] ) {
    const vectorA = vector1.slice()
    const vectorB = vector2.slice()
    const output = vectorB.reduce((total, current, index) => total += current * vectorA[index], 0)
    return output
  }

  // Two vector angle degree
  static twoVectorAngle( vector1: number[], vector2: number[] ) {
    const vectorA = vector1.slice()
    const vectorB = vector2.slice()
    const output = Math.acos(this.vectorDotProduct(vectorA, vectorB) / (this.vectorNorm(vectorA) * this.vectorNorm(vectorB)))
    return output
  }

  // Orthogonality
  // Vector component
  static vectorComponent( vector1: number[], vector2: number[] ) {
    const vectorA = vector1.slice()
    const vectorB = vector2.slice()
    const scalar = this.vectorDotProduct(vectorA, vectorB) / Math.pow(this.vectorNorm(vectorB), 2)
    const projAalongB = vectorB.map((unit) => unit * scalar)
    const aOrthoToB = this.vectorAddition( vectorA, projAalongB, false)
    return aOrthoToB
  }
}

export default ChapterThree
