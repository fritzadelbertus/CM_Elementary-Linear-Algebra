// CHAPTER 1 : Systems of Linear Equations and Matrices


class ChapterOne {
    
    // Gauss Jordan Elimination
    static gaussJordanElim( linsys : number[][] ) {
        const numOfEquation = linsys.length
        const numOfUnknown = linsys[0].length - 1
        if (numOfUnknown > numOfEquation) return "This System of Linear Equation either have no solution or have infinite solutions"
        
        let input = linsys.slice()
        const length = input.length
        for (let i = 0; i < length; i += 1) {
            if (input[i][i] === 0) {
                return "Mathematical Error! Cannot divide by zero"
            }
            for (let j = 0; j < length; j += 1) {
                if (i !== j) {
                    const ratio = input[j][i] / input[i][i]
                    for (let k = 0; k < length + 1; k += 1) {
                        input[j][k] = input[j][k] - ratio * input[i][k]
                    }
                }
            }
        }

        let output = []

        for (let i = 0; i < length; i += 1) {
            output.push(input[i][length] / input[i][i])
        }

        return output
    }

}

export default ChapterOne;
