function even(){
    let i=2;
    if(i%2==0)
     return even
}
function odd(){
    let i=5;
    if(i%2==1)
    {
       return odd
    }
}

function swappingwithoutvar(){
let a=10;
let b=5;
console.log("before swapping");
console.log(a);
console.log(b);
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);
return swappingwithoutvar
}
function swappingwithvar(){
let a=5;
let b=3
let c;
c=a;
a=b;
b=c;
console.log(a);
console.log(b);
return swappingwithvar
}
function Prime(){
  let num=7;
    var flag=1;
    for (let i = 0; i < parseInt(num/2); i++) {
       if(num%i==0){flag=0
         break;}
        
    }if(flag)
    console.log("prime num"); 
    else 
    console.log("not a prime num");
return Prime
}
function Happy() {
    let sum = 0;
    let n=13;
    while (n > 0) {
      let rem = n % 10;
      n = Math.floor(n / 10);
      sum += rem * rem;
    }
    if (sum === 1) {
      return true;
    } else if (sum > 1 && sum <= 4) {
      return false;
    }
    return Happy
  }
function Armstrong()
{
    let no=25;
    let count=0;
    let sum=0;
    let no1=no;
    let no2=no;
    while(no1!=0)
    {
        no1=parseInt(no1/10);
        count++;
    }
    while(no!=0)
    {
        let rem = parseInt(no%10);
        sum+=Math.pow(rem,count);
        no=parseInt(no/10);
    }
    if(no2==sum)
    {
        return (`${no2}  is Armstrong number`);
    }
    return Armstrong
}
function Strong(){
    let num=145;
    let sum=0;
    let copy=num
    while (num>0) {
        let d=num%10
        let fact=1;
        for(let i=1;i<=d;i++)
        {
            fact=fact*i;
        }
        sum=sum + fact
        num=parseInt(num/10);
    }
    if(sum==copy)
     return Strong;
    }
    function factorial(){
        let fact=1;
for(let i=1;i<=5;i++)
{
    fact=fact*i;
}
return factorial
    }
    function Deserium()
    {
        let no=175;
        let count=0;
        let sum=0;
        let no1=no;
        let no2=no;
        
        while(no1!=0)
        {
            no1=parseInt(no1/10);
            count++;
        }
        while(no!=0)
        {
            let rem = parseInt(no%10);
            sum+=Math.pow(rem,count);
            no=parseInt(no/10);
            count--;
        }
            if(no2==sum)
                return Deserium
        }



let sel=document.querySelector('#select')
let btn=document.querySelector('button')
let h1=document.querySelector('h1')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let s=sel.value
    if(s=="Even")
    h1.innerText=`${even()}`
    else if(s=="Odd")
    h1.innerText=`${odd()}`
     else if(s=="Swappingwithoutvar")
     h1.innerText=`${swappingwithoutvar()}`
    else if(s=="Swappingwithvar")
    h1.innerText=`${swappingwithvar()}`
    else if(s=="Prime")
    h1.innerText=`${Prime()}`
    else if(s=="Happy")
    h1.innerText=`${Happy()}`
    else if(s=="Armstrong")
    h1.innerText=`${Armstrong()}`
    else if(s=="Strong")    
    h1.innerText=`${Strong()}`
    else if(s=="Factorial")
    h1.innerText=`${factorial()}`
    else if(s=="Deserium")
    h1.innerText=`${Deserium()}`
    else  (s=="Xylem")
    h1.innerText=`${Xylem()}`
})