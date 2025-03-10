function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {   //function to filter even numbers
        return number % 2 === 0;
    });
}

let numbers = [21, 22, 26, 23, 28, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //assign variable to hold numbers

console.log(filterEvenNumbers(numbers)); //output filtered numbers