function printMultiplicationTable(n) {
    let header = '     ';
    for (let i = 1; i <= n; i++) {
        header += `${i}`.padStart(4, ' ');
    }
    console.log(header);
    for (let i = 1; i <= n; i++) {
        let row = `${i}`.padStart(4, ' ') + ' ';
        for (let j = 1; j <= n; j++) {
            row += `${i * j}`.padStart(4, ' ');
        }
        console.log(row);
    }
}
printMultiplicationTable(5);
