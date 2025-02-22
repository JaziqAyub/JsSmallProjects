const clock = document.getElementById("clock");


//for refresing after a sec 
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)