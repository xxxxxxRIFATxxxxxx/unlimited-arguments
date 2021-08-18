function addNumbers() {
    let sum = 0;
    for (num of arguments) {
        sum += num;
    };
    return sum;
};

console.log(addNumbers(1, 1, 10));