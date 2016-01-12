var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]],
    filteredArr = input.filter(arrManipulator),
    mostFrequentNumber,
    count = 0,
    maxCount = 0,
    minNumber,
    maxNumber;

filteredArr.sort(sortArr);

minNumber = filteredArr[filteredArr.length - 1];
maxNumber = filteredArr[0];

for(var i = 0; i < filteredArr.length - 1; i++) {
    if(filteredArr[i] === filteredArr[i + 1]) {
        count++;
    } else {
        count = 0;
    }

    if(count > maxCount){
        mostFrequentNumber = filteredArr[i];
        maxCount = count;
    }

};

function arrManipulator(element) {
    if(typeof(element) === 'number') {
        return true;
    }
};

function sortArr(a, b) {
    return a < b;
};

console.log('Min number: ' + minNumber);
console.log('Max number: ' + maxNumber);
console.log('Most frequent number: ' + mostFrequentNumber);
console.log(filteredArr);

