function spiral(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(""));
    let counter = 1;
    let startRaw = 0;
    let endRaw = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    

    while (startRaw <= endRaw && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRaw][i] = counter;
            counter++;
        }
        startRaw++

        for (let j = startRaw; j <= endRaw; j++) {
            result[j][endCol] = counter;
            counter++
        }
        endCol--

        for (let i = endCol; i >= startCol; i--) {
            result[endRaw][i] = counter;
            counter++
        }
        endRaw--

        for (let i = endRaw; i >= startRaw; i--) {
            result[i][startCol] = counter;
            counter++
        }
        startCol++;
    }
    return result;
}
console.log(spiral(6))