// It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 
// We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation.
// way 1
// let multiple =  function(x, y){
//     console.log( x * y);
// }
// let multiple =  function( y){ example of bind
//     let x = 2
//     console.log( x * y);
// }
//this we do curry by make copy of function
// let multiply = multiple.bind(this,2,7) if we pass both value the ignore the we pass another will end up with 2 value
// let multiply = multiple.bind(this,2,) //bind method create copy of mutliply method like we set 2 se insonstate
// multiply(3)

//way 2 function close

let mul = function (x){
    return function(y){
        console.log(x * y);
    }

}
let mul2 = mul(2);
mul2(3)