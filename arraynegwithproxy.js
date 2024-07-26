//what array negative index
// in js we dont have negative index they cath key value pair
// for of is itrate over enumerbale propertis like object
// for in is iterable through data strucutre like array 
//array is fast compare to object 
//  array built by using liear ds 
// object buil by using hash tables
// forEach , we won't see the "negative indexes" because they're not actually array indexes. This is consistent with other custom properties that we add to arrays.
const arr = [ ]
arr[-1] = 0;
arr['madhu'] = 'manu'
for(let key in arr){
    console.log(key)
}
console.log(arr)

//proxies The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
// You create a Proxy with two parameters:

// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
const target = {
    message1 : "hello",
    message2 : "hihay"
};

const handler = {};

const proxy = new Proxy(target, handler);
console.log("the original object", target);
console.log("the creation of object",handler) 
console.log("after proxy the target object to handler object",proxy)
const createArrayWithNegativeIndex = (arr) => {
    return new Proxy(arr, {
      get(target, prop, receiver) {
        // Convert property to a number
        const index = Number(prop);
  
        // Check if the property is a valid number and if it's negative
        if (!isNaN(index)) {
          if (index < 0) {
            // Convert negative index to positive index
            return target[target.length + index];
          } else {
            return Reflect.get(target, prop, receiver);
          }
        }
  
        // For non-numeric properties, default behavior
        return Reflect.get(target, prop, receiver);
      }
    });
  };
  
  // Example usage
  const arr = createArrayWithNegativeIndex([10, 20, 30, 40, 50]);
  
  console.log(arr[0]);  // 10
  console.log(arr[-1]); // 50
  console.log(arr[-2]); // 40
  