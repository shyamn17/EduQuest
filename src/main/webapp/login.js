let email=document.querySelector(".email");
let pwd=document.querySelector(".pwd");
let sub=document.querySelector(".sub");
console.log(sub);

function checkUser(arr)
{
  console.log(arr);
var NameVal=email.value;
var passVal=pwd.value;
console.log(d);
var d= arr.some((ele)=>{return (ele.password===passVal && ele.name===NameVal)})
return d
}



function validate(passans,nameans){
  // var nameans=name1.value
  // console.log(nameans);
  // var passans=pass.value
  // console.log(passans);
  let lc=0;
  let up=0;
  let sc=0;
  let num=0;
   let flage=true;
    for (let index = 0; index < passans.length; index++) {
      const element = passans[index];
      if(element!=" ")
      {if(element>="a"&&element<="z"){ lc++;}
        else if(element>="A"&&element<="Z"){up++;}
        else if(element>="0"&&element<="9"){num++}
        else{sc++}

      }
    }
   console.log(nameans);
  if((nameans[0]>="a" && nameans[0]<="z")||(nameans[0]>="A" && nameans[0]<="Z")){
    console.log("valid name");
  }else{console.log("invalid name");
flage=false}
  if(passans.length==" "){
      console.log("invalid password"); flage=false;
  }else if(lc>=1 && up>=1 && num>=1 && sc>=1){
    console.log("valid password");
  }
  else {console.log("invalid password");; flage=false}

  return flage
}   sub.addEventListener("click",(event)=>{
    // th1.innerText="Name"
    // th2.innerText="Password"
    event.preventDefault() 
    // console.log(name1.value)  
    // console.log(pass.value)

console.log("hi");
    var passans=pwd.value;
    var nameans=email.value;
    console.log(localStorage.getItem("dataList"));
   if(validate(passans,nameans))
{
  console.log( checkUser(JSON.parse(localStorage.getItem("datalist"))))
   if(checkUser(JSON.parse(localStorage.getItem("datalist")))){
    alert("logged in ")
    window.location.href="./home.html"
   }else{
    alert("enter crt username and password ")
   }


} })
var cart=document.querySelector("#span")
cart.addEventListener('click',() => {
const url='./cart.html'
window.location.href=url;
})
