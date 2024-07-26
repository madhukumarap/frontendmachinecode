// implementing a pipe method involves creating a function that allows you to chain multiple functions together, where the output of one function becomes the input of the next. This is particularly useful in functional programming and in scenarios where you need to apply a sequence of transformations to a value.
// pipe function, which allows you to combine multiple functions into a single pipeline. The pipe function takes an initial input, passes it through the first function, takes the output and passes it as the input to the next function, and so on. The result of the last function in the pipeline is the final output.

// Understanding the pipe Method
// The pipe method essentially allows you to compose functions together. For example, if you have functions f, g, and h, using pipe(f, g, h) would mean that you first apply f, then apply g to the result of f, and finally apply h to the result of g

function pipe(...funcs){
    //return  a new function it accpt initial value
    return function(initialValue){
        // Use reduce to apply each function in funcs to the initialValue
        return funcs.reduce((acc,func)=> func(acc), initialValue)
    }
}
//examples 
const add2 = x => x+2;
const multiplyby3 = x => x * 3;
const subtract5 = x => x - 5;

// create the pipe function
const pipeFunction = pipe(add2, multiplyby3, subtract5);

// Use the piped function
console.log(pipeFunction(5)); // 16