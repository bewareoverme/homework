function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result.length;
}

console.log(unique(['aa','bb','aa','c']))

