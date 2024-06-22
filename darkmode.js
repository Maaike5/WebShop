const rootElement =  document.querySelector(":root");
let modeSwitch = document.getElementById("mode");
const main = document.getElementsByTagName("main");
console.log('bestaat modeSwitch: ' + modeSwitch);
modeSwitch.checked = false;
 
modeSwitch.onchange = function(){
    if(modeSwitch.checked === true){
        
        rootElement.style.setProperty("--wit", "#000000");
        
        return;
    }
    rootElement.style.setProperty("--wit", "#FFFFFF");
    
   
}