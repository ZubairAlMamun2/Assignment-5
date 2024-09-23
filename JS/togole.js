const donateButton =document.getElementById("donate-button");
const historyButton =document.getElementById("History-button");

historyButton.addEventListener("click",function(){
    console.log("clicked")
    historyButton.classList="py-3 px-8 bg-bg-green rounded-lg text-text-primary border";
    donateButton.classList="py-3 px-8 bg-primary rounded-lg text-text-secondary border";
    document.getElementById("firstdiv").classList="hidden";
    document.getElementById("seconddiv").classList="hidden";
    document.getElementById("thirddiv").classList="hidden";
    document.getElementById("History").classList="grid grid-cols-1 ";
    
})
donateButton.addEventListener("click",function(){
    console.log("clicked")
    historyButton.classList="py-3 px-8 bg-primary rounded-lg text-text-secondary border";
    donateButton.classList="py-3 px-8 bg-bg-green rounded-lg text-text-primary border";
    document.getElementById("firstdiv").classList="grid grid-cols-1 md:grid-cols-2 border rounded-2xl p-8 mt-8 mx-4 gap-8";
    document.getElementById("seconddiv").classList="grid grid-cols-1 md:grid-cols-2 border rounded-2xl p-8 mt-8 mx-4 gap-8";
    document.getElementById("thirddiv").classList="grid grid-cols-1 md:grid-cols-2 border rounded-2xl p-8 mt-8 mx-4 gap-8";
    document.getElementById("History").classList="hidden";
})