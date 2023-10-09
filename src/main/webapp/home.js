var h1 = document.querySelector("h1");
var btn1=document.querySelector("#but1");
var btn2=document.querySelector("#but2");
var btn3=document.querySelector("#but3");
var btn4=document.querySelector("#but4");
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
  },
  {
    name1: "R E Q U E S T_D E M O"
  }
];

function updateContent() {
  h1.innerText = data[num].name1;
  num = (num + 1) % data.length;
}
setInterval(updateContent, 2000);


// var h1 = document.querySelector("h1");
// var num = 0;
// var data = [
//   {
//     name1: "O V E R V I E W",
//   },
//   {
//     name1: "C O D I N G </>",
//   },
//   {
//     name1: "C O U R S E S",
//   },
//   {
//     name1: "R E Q U E S T_D E M O"
//   }
// ];

// function updateContent() {
//   h1.classList.remove("active"); // Remove active class to trigger slide out effect
//   setTimeout(function() {
//     h1.innerText = data[num].name1;
//     h1.classList.add("active"); // Add active class to trigger slide in effect
//     num = (num + 1) % data.length;
//   }, 500); // Wait for 500ms (same duration as the CSS transition) before updating content and adding active class
// }

// setInterval(updateContent, 2000);
