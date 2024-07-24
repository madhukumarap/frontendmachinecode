//Debouncing and thorttlling
//debouncing->  is a technique in programming that helps prevent time-consuming tasks from being triggered so frequently that they slow down the performance of a web page.
// debouncing is commonly used to enhance browser performance. Sometimes, certain actions on a web page involve complex computations that take up time. If these actions are triggered too frequently, it can significantly impact the browser’s performance, especially since JavaScript operates on a single thread.

//thorttling ->Throttling sometimes also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.
// both concepts are used to optimise the performance of web app
// how do we do that this conecpts
// by limitting the rate of excution of particular function call we optimise the performamnce of web app
//  example 1
// for debounce-> we search in searchbar like i ammazon we search samsung if we type sam they suggestion that we call lot of api call so it cause the webpage poor performace so we doo when user pause type that time we fecth api we take difference between 2 key stroke then we make api cll lke 300ms the diffrence b/w 2 keystroke.

//for thorttling->  we search in searchbar like i ammazon we search samsung if we type sam they suggestion that we call lot of api call so it cause the webpage poor performace so we do we pause the certian  keystroke  after the sometime we fetch the api we maintain the time to call the api call diffrence b/w 2 function call.
// debounce vs thorttling ->it depend on use case and scenarion

//debounce
let button = document.getElementById("debounce");

const debounce = (func, delay) => {
    let debouncerTime;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debouncerTime);
        debouncerTime = setTimeout(() => func.apply(context, args), delay);
    };
};

button.addEventListener('click', debounce(function() {
    alert("Hello\nNo matter how many times you click the debounce button, I get executed once every 3 seconds!!");
}, 3000));

const btn = document.querySelector("#nothorttel");

// btn.addEventListener("click", ()=>{ //without thorttling
//     alert("button is clickec");
//     console.log("button is clicked")
// })

const throttleFunction = (func, delay)=>{
    let prev = 0;
    return (...args)=>{
        //Current called time of function
        let now = new Date().getTime();

        //logging the diffrence b/w previosuly
        //called current timw
        console.log(now - prev, delay);
        // If difference is greater
                // than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;
 
                    // "..." is the spread
                    // operator here 
                    // returning the function with the 
                    // array of arguments
                    return func(...args);
                }
    }
}
btn.addEventListener("click",
    throttleFunction(() => {
        console.log("button is clicked")
    }, 1500));
