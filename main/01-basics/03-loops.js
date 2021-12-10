/**
 * Write a function that returns the index of the first occurence of an element in the provided array
 */
export function find(array, element) {
    let i=0
    let goal=0
    while (element != goal){
        goal = array[i]
        if (element != goal){
            i=i+1
        }  
    }
    return i
}
/**
 * Write a function to check which number nearest to the value 100 among two given integers. Return 0 if the two numbers are equal
 */
 export function closestTo100AmongArray(numbers) {
    // let i = 0 
    // let top=100
    // let val=0
    // let max=100
    // while (i!=numbers.length-1){
    //     val=numbers[i]
    //     if (val<100){
    //         val=100-val
    //         if (val<max){
    //             top=numbers[i]
    //             max=val
    //         }
    //         i=i+1
    //     }
    //     else if (val>100){
    //         val=val-100
    //         if (val<max){
    //             top=numbers[i]
    //             max=val
    //         }
    //         i=i+1
    //     }
    //     else if (val==100){
    //         top=numbers[i]
    //         max=val
    //         i=i+1
    //     }
        
    // }
    // return top
    let result = 0
    for (let i=0; i<numbers.length;++i){


    }
}



/**
 * A pandemic is propagating ! Every day, number of infected persons doubles.
 * Write a function that forecasts the number of infected people at after a given
 * [dayCount], starting from the given [initialInfectedCount] on the 1st day.
 */
export function pandemicForecast(initialInfectedCount, dayCount) {
    
}

/**
 * FizzBuzz ....
 * 
 * Write a function that takes an array or numbers as an argument and return a concatenation string
 * of its values and replace every number divisible by 3 with "fizz", every number divisible by 5
 * with "buzz" and if the number is divisible by both 3 and 7, it is replaced by "fizzbuzz"
 */
export function fizzBuzz(numbers) {

}