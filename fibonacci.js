function fibonacci(n) {
    
    let fibSequence = [];
	let n1 = 0, n2 = 1;
    if (n <= 0) {
        return fibSequence;
    }
    fibSequence.push(n1);
    if (n === 1) {
        return fibSequence;
    }
    fibSequence.push(n2);
    for (let i = 2; i < n; i++) {
        let sum = n1 + n2;
        fibSequence.push(sum);
		n1 = n2;
		n2 = sum;
    }
    return fibSequence;
}

console.log(fibonacci(10));
