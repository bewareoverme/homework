function task3(pairs) {
    massiv = pairs;
    for (let para of massiv) {
        if (para[0] === 0 || para[1] === 0) {
            let val = para[0];
            para[0] = para[1];
            para[1] = val;
        }
        if (para[0] % 2 != 0) {
            para[0] = para[0] * 2;
        }
        if (para[1] % 2 != 0) {
            para[1] = para[1] * 2;
        }
    }
    return massiv;
}
console.log(task3([[1,2],[3,7],[0,5]]))