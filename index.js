let coffeeImg = document.getElementById("coffeeImg");
let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentMinutes0;

function getProgrammingTime(){
let outputP = document.getElementById("output");
if(currentMinutes < 10){
    currentMinutes0 = '0' + currentMinutes;
}else{
    currentMinutes0 = currentMinutes;
}

if(currentHours > 6 && currentHours < 12){
    outputP.innerHTML = `Wait, it is ${currentHours}:${currentMinutes0}. I like you, keep grinding.`;

}else if(currentHours > 12 && currentHours < 13){
    outputP.innerHTML = `Oh, its ${currentHours}:${currentMinutes0}, thats lunchtime. Go get something to eat.`;

}else if(currentHours > 13 && currentHours <= 24){
   outputP.innerHTML = `It is ${currentHours}:${currentMinutes0}, Thats prime programming time.`;
    console.log("test");
}else if(currentHours > 1 && currentHours < 6){
    outputP.innerHTML = `It is ${currentHours}:${currentMinutes0}. You are a real programmer. Keep up the hard work!`;

}
}