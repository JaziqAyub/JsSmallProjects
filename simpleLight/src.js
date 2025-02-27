var a = document.querySelector("h1");
var b = document.querySelector("button");
var c = document.querySelector("h2");
// var a = document.querySelector("h1").innerHTML = "changed"
// or
a.innerHTML = "Light is off";

// for css :
a.style.color = "black";
// a.style.fontSize = "32px"
// a.style.background = "black"
var flag = 0;

b.addEventListener("click", function () {
//   alert("Do you want to turn on light?");
  a.innerHTML = "Tadaa!";
  a.style.color = "yellow";


  if (flag == 0) {
    c.style.backgroundColor = "yellow";
console.log("on");

    flag = 1;
  } else {
    c.style.backgroundColor = "transparent";
console.log("off");
a.style.color = "black";
a.innerHTML = "Light is off";


    flag = 0;
  }
});

// or
// function xyz(){
//     alert("mutated")
//     a.innerHTML = "khatam"
// }
// b.addEventListener("click" , xyz)

console.log(a);
