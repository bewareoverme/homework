const result = [];
n = 6
for (let i = 0; i < n; i++) {
    result[i] = [];

    for (let j = 0; j < n; j++) {
        result[i][j] = calculateValue(i,j,n);
    }
}

function calculateValue(i,j,n) {
    const main = (n-1);
    const main2 = main * 4;
    if (i === 0) {
        return j+1;
    } else if (i <= main && j === main) {
        return j+1 + i;
    } else if (i === 1) {
        return (main2) + j;
    } else if (i === main && j <= main-1) {
        return (main2) - (n-2) - j;
    } else if (j === 0 && i > 0 && i <= main) {
        return (main2 + 1) - i;
    } else if (i === 2 && j > 0 && j < main - 1) {
        return(main2 + (4 * (n - 3))) + (j - 1);
    } else if (i >= 2 && j === n - 2) {
        return main2 + main + (i - 2);
    } else if (i === main - 1 && j > 0 && j <= main - 2) {
        return (main2 + 2) + (main - 2) * 3 - j;
    } else if (i === 3 && j > 0 && j < main - 3) {
        return (main2 + 2) + (main - 2) * 3;
    } else if (main2 + 4 * 2) {
        return (main2 + 4 * 4 + 2) - j;
    }

}

console.log(result)




// for (let k = startCol; k <= endRow; k++) {
//     answer = counter;
//     counter++
// }
// startRow++;

// for (let k = startRow; k <= endRow; k++) {
//     answer = counter;
//     counter++
// }
// endCol--

// for (let k = endCol; k >= startCol; k--) {
//     answer = counter;
//     counter++
// }
// endRow--;

// for (let k = endRow; k>= startRow; k--) {
//     answer = counter;
//     counter++
// }
// startCol++;



// for (let i = 0; i<n; i++) {
//     result[i] = [];

//     for (let j = 0; j<n; j++) {
//         result[i][j] = calculateValue(i,j,n);
//     }
// }

// function calculateValue(i,j,n) {
//     answer = 0
//     if (i === startRow) {
//         answer = counter
//         counter++
//     } else if (j === endCol) {
//         answer = counter
//         counter++
     
//     } else if (i === endRow) {
//         answer = counter
//         counter++
//     }
//     endRow--
//     return answer
// }

// console.log(result)



// function calculateValue(i,j,n) {
//     for (let k = 0; k<n; k++) {
//         if (i === 0) {
//             return counter++
//         } else if (j === endCol) {
//             return counter++
//         } else if (i === endCol) {
//             return counter++
//         }

//     }
// }
