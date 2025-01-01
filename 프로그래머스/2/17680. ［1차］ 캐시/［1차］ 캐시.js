function solution(cacheSize, cities) {
    let answer = 0;
    const cache = new Map(); 

    cities.forEach(city => {
        const target = city.toLowerCase(); 
        if (cache.has(target)) {
            answer += 1;
            cache.delete(target); 
        } else {
            answer += 5;
            if (cache.size === cacheSize && cacheSize > 0) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
        }
        if (cacheSize > 0) {
            cache.set(target, true);
        }
    });

    return answer;
}