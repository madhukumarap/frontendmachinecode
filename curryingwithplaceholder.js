// For implementing currying with placeholders in JavaScript, we can use the _ (underscore) symbol as a placeholder for arguments that haven't been provided yet.

const _ = Symbol('placeholder');

function curry(fn){
    return function currried(...args){
        const filledArgs = args.map((args)=>args === _ ? undefined : args);
        if(filledArgs.length >= fn.length && !filledArgs.includes(undefined)){
            return fn(...filledArgs)
        }else {
            return (...newArgs) =>{
                const mergeArgs = args.map((args)=> args === _ && newArgs.length ? newArgs.shift():args).concat(newArgs);
                return currried(...mergeArgs)
            }
        }

    }
}
function sum(a, b, c) {
    return a + b + c;
  }
  const curriedSum = curry(sum);

  console.log(curriedSum(1)(2)(3)); // 6
  console.log(curriedSum(_, 2)(1, 3)); // 6
  console.log(curriedSum(_, _, 3)(1)(2)); // 6
  console.log(curriedSum(1, _, 3)(2)); // 6  