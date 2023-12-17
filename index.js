let btns=document.getElementsByClassName("btn");
let input=document.getElementById("input");
for(let botn of btns){
    if(botn.id!="ac" & botn.id!="c" & botn.id!="="){
    botn.addEventListener("click",()=>{
        input.value=input.value + botn.id;
    });}
}
btns[0].addEventListener("click",()=>{
    input.value="";
});
btns[1].addEventListener("click",()=>{
    input.value=input.value.slice(0,input.value.length-1);
});
btns[btns.length-1].addEventListener("click",()=>{
   try{ input.value=eval(input.value);}
   catch(error){
    input.value="Error";
   }
});