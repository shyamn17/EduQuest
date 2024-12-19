let a=document.querySelector(".fn")
let b=document.querySelector(".ln")
let e=document.querySelector(".email")
let sub=document.querySelector("#sub")
let num=document.querySelector(".no")
let passwd=document.querySelector(".pwd")
let confirm=document.querySelector(".cpwd")
let res=document.querySelector("#re")
res.addEventListener("click",()=>{
a.value=""
b.value=""
e.value=""
num.value=""
passwd.value=""
confirm.value=""
})
sub.addEventListener("click",()=>{
   let nam=a.value
   let flag=true;
    console.log(nam);
if((nam[0]>='a' && nam[0]<='z')||(nam[0]>='A' && nam[0]<='Z')==false)
{
alert("Enter valid First name")
flag=false;
}

let last=b.value
console.log(last);
if((last[0]>='a' && last[0]<='z')||(last[0]>='A' && last[0]<='Z')==false){
alert("Enter valid last name")
flag=false;}

let mail=e.value
console.log(mail);
let s=0;
let s1=0;
for(var i=0; i<=mail.length; i++){
    if(mail[i]=='@')
    s++;
    else if(mail[i]=='.')
    s1++;
}
if((s==1 && s1==1)==false){
alert("Please enter a valid email address")
flag=false;}

let phone=num.value;
console.log(phone);
if(phone.length!=10){
alert("Enter a valid phone number");
flag=false;}

let p=passwd.value;
console.log(p);
let upp=0;
let lw=0;
let dig=0;
let spl=0;
for(var i=0; i<p.length; i++)
{
    if(p[i]>='A' && p[i]<='Z')
    upp++;
    else if(p[i]>='a' && p[i]<='z')
    lw++;
    else if(p[i]>='0' && p[i]<='9')
    dig++;
    else
    spl++;
}
    if((p.length>=8 && upp>=1 && lw>=1 && dig>=1 && spl>=1)==false)
{
    alert("Enter vaild password")
    flag=false;
}

let c=confirm.value
if(c!=p){
alert("Passwords do not match")
flag=false;}

if(flag==true){
var datalist=JSON.parse(localStorage.getItem("datalist")) || [];

var userdata={
    name:nam,
    password:p,
    email:mail,
    phone:phone
}
datalist.push(userdata)
alert("Sign up successful!");
a.value = "";
      b.value = "";
      e.value = "";
      num.value = "";
      passwd.value = "";
      confirm.value = "";

localStorage.setItem("datalist", JSON.stringify(datalist))
}
})
var cart=document.querySelector("#span")
cart.addEventListener('click',() => {
const url='./cart.html'
window.location.href=url;
})
