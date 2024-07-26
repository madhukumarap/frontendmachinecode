//flatten array
var flat = function(arr, n){
    const res = []
    function helper(arr, depth){
        // for(let i=0; i<arr.length; i++){
        //     if(Array.isArray(arr[i]) && depth>0){
        //         helper(arr[i], depth-1)
        //     }else{
        //         res.push(arra[i])
        //     }
        // }
        for(const val of arr){
            if(typeof(val) === 'object' && depth < n){
                helper(val, depth+1)
            } else{
                res.push(val)
            }
        }
        return res
    }
    return helper(arr, 0)
}
const array =  [1,2,3,[2,[3,4],5],5,6,7]
// console.log(array.lengthooool)
const n = 1
console.log(flat(array, n))