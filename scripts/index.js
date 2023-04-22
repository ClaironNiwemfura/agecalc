const form =document.querySelector("form");
const dayresult=document.querySelector("#years");
const monthresult= document.querryselector("#months");
const yearresult=document.querryselector("#days");

// form.addEventListener("submit",c=>{
//     c.preventDefault();
//     const day= parseInt(document.querySelector("#day"));
//     const month= parseInt(document.querySelector("#month"));
//     const year= parseInt(document.querySelector("#year"));

//     const today= new Date();
//     const birthdate= new Date(day,month-1,day);
// let cly=today.getFullYear()-birthdate.getFullYear();
// let clm=today.getMonth()-birthdate.getMonth();
// let cld=today.getDay()-birthdate.getDate();

// // if (cld <0){
//     const daysinlastmonth =new Date (today.get)
// }
// })
const inputday= document.getElementById("day");
function checkdayinput (){
    let value=form.day.value;
    if(value="")
    {
 return("please fill in");
    } else if (value<1 ||value>31 ){
return ("input error");
    }else{
        return true;
    }
}
function calculateage(birthday){
    const today= new Date();
    const birthdate= new Date(day,month-1,day);

let cly=today.getFullYear()-birthdate.getFullYear();
let clm=today.getMonth()-birthdate.getMonth();
let cld=today.getDay()-birthdate.getDate();

yearresult. innerHTML=cly;
monthresult.innerHTML=clm;
dayresult.innerHTML=cld;
}
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let birthday=`${input}`
    calculateage(birthday);
});