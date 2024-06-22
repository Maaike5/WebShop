
var modal = document.getElementById("modal");


var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}




window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





    var modal1 = document.getElementById("modal1");


    var btn1 = document.getElementById("openModalBtn1");
    

    var span1 = document.getElementsByClassName("close1")[0];
    

    btn1.onclick = function() {
        modal1.style.display = "block";
    }
    

    span1.onclick = function() {
        modal1.style.display = "none";
    }
    

    window.onclick = function(event1) {
        if (event1.target == modal) {
            modal1.style.display = "none";
        }
    }






        var modal2 = document.getElementById("modal2");


        var btn2 = document.getElementById("openModalBtn2");
        
 
        var span2 = document.getElementsByClassName("close2")[0];
        

        btn2.onclick = function() {
            modal2.style.display = "block";
        }
        

        span2.onclick = function() {
            modal2.style.display = "none";
        }
        

        window.onclick = function(event2) {
            if (event2.target == modal2) {
                modal2.style.display = "none";
            }
        }



        var modal3 = document.getElementById("modal3");
l
        var btn3 = document.getElementById("openModalBtn3");
        

        var span3 = document.getElementsByClassName("close3")[0];
        
  
        btn3.onclick = function() {
            modal3.style.display = "block";
        }
        
 
        span3.onclick = function() {
            modal3.style.display = "none";
        }
        
        window.onclick = function(event3) {
            if (event3.target == modal3) {
                modal3.style.display = "none";
            }
        }

let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[i].style.overflow = "auto";
}, 1500);
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let oortjesfilter = document.getElementById("checkbox-zwart");
oortjesfilter.onchange = function(){
    if(oortjesfilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "zwart"){
                allGames[i].style.display = "block";
            }
        }    
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "zwart"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let headsetfilter = document.getElementById("checkbox-headset");
headsetfilter.onchange = function(){
    if(headsetfilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "headset"){
                allGames[i].style.display = "block";
            }
        }    
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "headset"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let boxenfilter = document.getElementById("checkbox-boxen");
boxenfilter.onchange = function(){
    if(boxenfilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "boxen"){
                allGames[i].style.display = "block";
            }
        }    
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "boxen"){
                allGames[i].style.display = "none";
            }
        }
    }
 
}
