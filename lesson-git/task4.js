function count_sym(str, sym) {
    let counter = 0;
    let currentMax = 0;

    for (let index = 0; index < str.length; index++) {
         if (str[index] === sym) {
             counter++;

             if (counter > currentMax) {
                 currentMax = counter;
             }
         } else {
             counter = 0;
         }
    }

    return currentMax;
}

console.log(count_sym("skrmsor o mmm or l mm som4mmmmm", "m"))
