function getCommonDivisors(numbers) {
    function nod(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const commonNOD = numbers.reduce((acc, num) => nod(acc, num));
    const divisors = [];
    for (let i = 1; i <= commonNOD; i++) {
        if (commonNOD % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}
console.log(getCommonDivisors([42, 12, 18])); 
