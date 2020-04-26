function after_half_one(arr) {
    const lengh_arr = arr.length;
    let half_arr = 0;
    if(lengh_arr % 2 == 0) {
        half_arr = lengh_arr / 2;
    } else {
        half_arr = (lengh_arr + 1) / 2;
    }
    console.log(half_arr)

    let index = 0;
    while (index < lengh_arr) {
        if(index > (half_arr - 1)) {
            arr[index] = 0
        }
        index++;
    }
    return arr
    
}
console.log(after_half_one([1,2,3,4,5,5,5,5,5,5,5,5,7,1]))


