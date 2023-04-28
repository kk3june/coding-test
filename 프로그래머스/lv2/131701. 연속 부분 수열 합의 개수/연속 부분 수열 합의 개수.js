function solution(elements) {
    const set = new Set();
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            let seq = elements.slice(j, j + i);
            if (i + j > elements.length) {
                seq = [...seq, ...elements.slice(0, i + j - elements.length)];
            }
            const sum = seq.reduce((acc, v) => acc + v, 0);
            set.add(sum);
        }
    }
    return set.size;
}