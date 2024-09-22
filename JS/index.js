document.getElementById("Noakhali-button").addEventListener("click",function(){
    getDataById("Noakhali-donated","Noakhali-input");
})
document.getElementById("Feni-button").addEventListener("click",function(){
    getDataById("Feni-donated","Feni-input");
})
document.getElementById("Quota-button").addEventListener("click",function(){
    getDataById("Quota-donated","Quota-input");
})




function getDataById(donated,input){
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
     donate +=value;

    document.getElementById("balance").innerText=balance;
    document.getElementById(donated).innerText=donate;   
}