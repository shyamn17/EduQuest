document.addEventListener('DOMContentLoaded', (event) => {
  let email = document.querySelector("#username");
  let pwd = document.querySelector("#password");
  let sub = document.querySelector(".sub");
  let sign = document.querySelector("#reg");

  sign.addEventListener("click", () => {
      window.location.href = "./signup.html";
  });

  function checkUser(arr) {
      var NameVal = email.value;
      var passVal = pwd.value;
      var userExists = arr.some((ele) => {
          return (ele.password === passVal && ele.name === NameVal);
      });
      return userExists;
  }

  function validate(passans, nameans) {
      let lc = 0;
      let up = 0;
      let sc = 0;
      let num = 0;
      let isValid = true;

      for (let index = 0; index < passans.length; index++) {
          const element = passans[index];
          if (element !== " ") {
              if (element >= "a" && element <= "z") {
                  lc++;
              } else if (element >= "A" && element <= "Z") {
                  up++;
              } else if (element >= "0" && element <= "9") {
                  num++;
              } else {
                  sc++;
              }
          }
      }

      if ((nameans[0] >= "a" && nameans[0] <= "z") || (nameans[0] >= "A" && nameans[0] <= "Z")) {
          console.log("valid name");
      } else {
          console.log("invalid name");
          isValid = false;
      }

      if (passans.length === 0) {
          console.log("invalid password");
          isValid = false;
      } else if (lc >= 1 && up >= 1 && num >= 1 && sc >= 1) {
          console.log("valid password");
      } else {
          console.log("invalid password");
          isValid = false;
      }

      return isValid;
  }

  sub.addEventListener("click", (event) => {
      event.preventDefault();
      
      var passans = pwd.value;
      var nameans = email.value;
      
      if (validate(passans, nameans)) {
          let dataList = JSON.parse(localStorage.getItem("datalist"));
          console.log("DataList from localStorage:", dataList);
          if (dataList) {
              console.log("Check User Result:", checkUser(dataList));
              if (checkUser(dataList)) {
                  alert("Login successful");
                  window.location.href = "./home.html";
              } else {
                  alert("Invalid username or password. Please try again.");
              }
          } else {
              alert("User data not found. Please sign up.");
          }
      }
  });

  var cart = document.querySelector("#span");
  cart.addEventListener('click', () => {
      const url = './cart.html';
      window.location.href = url;
  });
});
