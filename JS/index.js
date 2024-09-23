document.getElementById("Noakhali-button").addEventListener("click",function(){
    getDataById("Noakhali-donated","Noakhali-input","NoakhaliTitle");
})
document.getElementById("Feni-button").addEventListener("click",function(){
    getDataById("Feni-donated","Feni-input","FeniTitle");
})
document.getElementById("Quota-button").addEventListener("click",function(){
    getDataById("Quota-donated","Quota-input","QuotaTitle");
})




function getDataById(donated,input,h3title){
    let balance=parseFloat(document.getElementById("balance").innerText);
    let donate=parseFloat(document.getElementById(donated).innerText);
    let inputValue=(document.getElementById(input).value);
    if(isNaN(inputValue)){
        alert("Please enter a number");
        return;
    }
    let value=parseFloat(inputValue);
     balance -=value;
     if(balance<0){
        alert("Your balance is not efficient to donate")
        return;
     }


     const title  = document.getElementById(h3title).innerText
     const currentTime=new Date();
     

     const history=document.getElementById("History")
     const div=document.createElement("div")
     const h3=document.createElement("h3");
     h3.innerHTML=`<h1 class={"text-text-primary font-semibold text-xl my-5"} >${inputValue} Taka is ${title} </h1>`
     div.appendChild(h3);
     h3.classList="text-text-primary font-semibold text-xl ";
     const p=document.createElement("p");
     p.innerHTML=`<p> Date:${currentTime}</p>`
     div.appendChild(p);
     
     div.classList="grid grid-cols-1 border rounded-2xl p-8 mt-8 mx-4 gap-8";
     
     history.appendChild(div);

    donate +=value;
    document.getElementById("balance").innerText=balance;
    document.getElementById(donated).innerText=donate;   
   

}