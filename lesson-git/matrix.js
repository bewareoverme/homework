function matrix(n) {
	const result = [];
	for (let i = 0; i < n; i++) {
		result[i] = [];
		
		for (let j = 0; j < n; j++) {
			result[i][j] = calculateValue(i,j,n);
		}
	}
	return result;
}

function calculateValue(i,j,n) {
	if (n <= 2) {
		if (i === 0) {
			return j + 1;
		} else {
			return 2 * n - j;
		}
	} else if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
		if (i === 0) {
			return j + 1;
		} else if (j === n - 1) {
			return 1 + 1 * (n - 1) + i;
		} else if (i === n - 1) {
			return 1 + 3 * (n - 1) - j;
		} else if (j === 0) {
			return 1 + 4 * (n - 1) - i;
		}
	} else {
		return 4 * (n - 1) + calculateValue(i - 1, j - 1, n - 2);
	}

}

console.log(matrix(6))