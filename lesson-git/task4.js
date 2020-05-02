function count_sym(str, sym) {
    let arr = [];
    let counter = 0;
    let arr_symb = str.split('')
    console.log(arr_symb)
    for (let index in arr_symb) {
         if (arr_symb[index] === "m") {
             counter++;
         } else {
             arr.push(counter);
             counter = 0;
         }
    }
    console.log(arr);
    return Math.max.apply(null, arr);
}
console.log(count_sym("skrmsor o mmm or l mm som4mmmmm", "m"))
