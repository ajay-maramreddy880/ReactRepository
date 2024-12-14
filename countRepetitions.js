function countRepetitions(arr) {
    
    const frequencyMap = {};
    arr.forEach(element => {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    });
    for (let element in frequencyMap) {
        console.log(`${element}: ${frequencyMap[element]} times`);
    }
}

const array = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5];
countRepetitions(array);
