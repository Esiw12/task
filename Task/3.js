function getPrimesInRange(min, max) {
    const sieve = [];
    const primes = [];
    for (let i = 2; i <= max; i++) {
        sieve[i] = true;
    }
    for (let i = 2; i * i <= max; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= max; j += i) {
                sieve[j] = false;
            }
        }
    }
    for (let i = Math.max(min, 2); i <= max; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(getPrimesInRange(11, 20)); 
