var h1 = document.querySelector("h1");
var btn1=document.querySelector("#but1");
var btn2=document.querySelector("#but2");
var btn3=document.querySelector("#but3");
var num = 0;
var data = [
  {
    name1: "O V E R V I E W",
  },
  {
    name1: "C O D I N G </>",
  },
  {
    name1: "C O U R S E S",
  }
];

function updateContent() {
  h1.innerText = data[num].name1;
  btn1.style.borderColor = "";
  h1.classList.remove("slide"); 
  setTimeout(function () {
    btn1.style.borderColor = "";
      h1.innerText = data[num].name1;
     
  if(h1.innerText=="O V E R V I E W"){
  btn1.style.borderColor = "#133e3f";

  }
  else if(h1.innerText=="C O D I N G </>"){
  btn2.style.borderColor = "#133e3f";

  }
  else(h1.innerText=="C O U R S E S")
  {
  btn3.style.borderColor = "#133e3f";
  }
  num = (num + 1) % data.length;
  h1.classList.add("slide"); 
}, 10);
}
setInterval(updateContent, 3000);
let btn=document.querySelector("#span")
btn.addEventListener("click", ()=>{
    window.location.href="./courses.html"
})