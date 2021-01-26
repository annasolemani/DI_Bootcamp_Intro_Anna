// Daily Challenge 1
​
        // let star;
​
        // for (let x = 1; x <= 6; x++){
​
        //     star = " * ".repeat(x);
​
        //     console.log(star);
        // }
​
​
​
​
        // Daily Challenge 2 (Bonus)
​
        const numbers = [5,0,9,1,7,4,2,6,3,8];
​
        console.log('Before: ', numbers);
​
​
        // Loop the array 
        for (let i = 0; i < numbers.length; i++){
​
            // Loop again through the loop array
            for (let j = 0; j < numbers.length; j++){
​
                // check if the second loop value is less then the first one, if it is we do:
                if (numbers[j] < numbers[i]){
​
                    // we contain the value of the element that we looped with a variable
                    let temp = numbers[i];
​
                    // we swap, make the switch 
                    // we assign the bigger to after the smallest
                    numbers[i] = numbers[j];
​
                    // we switch back with variable that we contained before
                    numbers[j] = temp;
​
​
                }
            }
        }
​
​
        console.log('After: ', numbers);
​
        // https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php