

const transLetters = (matrix) => {
    return matrix[0].map((letter, i) => matrix.map(row => row[i]));
};

const backwards = (matrix) => {
    return matrix.map(row => row.map((letter, j) => row[row.length - 1 - j]));
}

const upperDiagonally = (matrix) => {
    
    return matrix[0].map((letter, i) => matrix.map((row, j) => row[i + j]));
}

const lowerDiagonally = (matrix) => {
    return matrix.map((row, i) => matrix.map((row, j) => row[j - i]));
}

const diagonally = (matrix) => {

    return upperDiagonally(matrix).concat(lowerDiagonally(matrix));
}

// const flipLetters = (matrix) {} // can apply when n = m

const wordSearch = (letters, word) => {

    if(letters.length === 0) {
        return 'matrix empty';
    }

    let cond = true;
    letters.forEach(arr => {
        cond = cond && typeof arr === 'object';
    });

    if(!cond) {
        return 'not an array of arrays';
    }

    let whole = letters;
    whole = whole.concat(transLetters(letters));
    whole = whole.concat(backwards(letters));
    whole = whole.concat(diagonally(letters));
    const horizontalJoin = whole.map(ls => ls.join(''));
    // console.log(horizontalJoin) // for debug
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

console.log(wordSearch([
    [],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ] , 'ECTY'))

module.exports = wordSearch