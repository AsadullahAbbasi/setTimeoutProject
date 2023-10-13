let start=document.getElementById('start')
let stop=document.getElementById('stop')
const randomColor=function(){
const hex = '0123456789ABCDEF'
let color='#';
for(let i =0; i < 6; i++){
    color +=hex[Math.floor(Math.random()*16)]
}
return color
}
let changer=()=>{
    document.body.style.backgroundColor=randomColor()
}
let intStart;
start.addEventListener('click',function(){
    
    clearInterval(intStart); //clear previous interval
    intStart=setInterval(changer,1000)
  
})

stop.addEventListener('click',function(){
    clearInterval(intStart);


    console.log('stop');
})





// TEST CODE
// const hex = '0123456789ABCDEF'
// let color='#';
// for(let i =0; i < 6; i++){
//     color +=hex[Math.floor(Math.random()*16)]
//     console.log(color);
// }
//role of +=operator
// let text = "Hell, ";
// text += "world!";
// console.log(text); // Output will be "Hello, world!"
// In this example, text starts with "Hello, " and then we use text += "world!" to concatenate "world!" to the end of text, resulting in the string "Hello, world!".

// The += operator is a convenient way to update variables in loops or to build up strings or accumulate values in a more concise and readable manner.
