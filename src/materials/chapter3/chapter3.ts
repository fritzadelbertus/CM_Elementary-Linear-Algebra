// CHAPTER 3 : Euclidean Vector Spaces

class ChapterThree {

  // Vector Addition and Subtraction
  static vectorAddition( vector1: number[], vector2: number[], addition: boolean ) {
    const vectorA = vector1.slice()
    const vectorB = addition ? vector2.slice() : vector2.slice().map((item) => item * -1)
    const output = vectorA.map((item, index) => item + vectorB[index])
    return output
  }
}

export default ChapterThree
