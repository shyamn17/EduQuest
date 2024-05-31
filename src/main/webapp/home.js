window.addEventListener('DOMContentLoaded', (event) => {
var h1 = document.querySelector("h1");
var btn1=document.querySelector("#but1");
var btn2=document.querySelector("#but2");
var btn3=document.querySelector("#but3");
var num = 0;
var data = [
  {
    name1: "C O D I N G </>",
  },
  {
    name1: "O V E R V I E W",
  },
  {
    name1: "C O U R S E S",
  }
];

function updateContent() {
  h1.innerText = data[num].name1;
  btn1.style.borderColor = "";
  btn2.style.borderColor = "";
  btn3.style.borderColor = "";
  h1.classList.remove("slide"); 
  setTimeout(function () {
    btn1.style.borderColor = "";
    h1.innerText = data[num].name1;
   
    if (h1.innerText == "O V E R V I E W") {
      btn1.style.borderColor = "#133e3f";
    } else if (h1.innerText == "C O D I N G </>") {
      btn2.style.borderColor = "#133e3f";
    } else if (h1.innerText == "C O U R S E S") {
      btn3.style.borderColor = "#133e3f";
    }
    num = (num + 1) % data.length;
    h1.classList.add("slide"); 
  }, 10);
}
setInterval(updateContent, 3000);

});

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navItems = document.getElementById('items');

  function toggleMenu() {
    if (window.innerWidth <= 768) {
      if (navItems.style.display === 'none') {
        navItems.style.display = 'flex';
        hamburgerMenu.classList.add('change'); // Add the 'change' class to display the cross icon
      } else {
        navItems.style.display = 'none';
        hamburgerMenu.classList.remove('change'); // Remove the 'change' class to display the hamburger icon
      }
    }
  }
  toggleMenu();
  hamburgerMenu.addEventListener('click', toggleMenu);

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navItems.style.display = 'flex';
    }
  });
});
