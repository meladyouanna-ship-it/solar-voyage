const startBtn = document.getElementById("StartButton");

if(startBtn){

    startBtn.onclick = function(){

        window.location.href = "mercury.html";

    }

}


const mercuryBtn = document.getElementById("StartButton_for_M");

if(mercuryBtn){

    mercuryBtn.onclick = function(){

        window.location.href = "venus.html";

    }

}


const venusBtn = document.getElementById("StartButton_for_V");

if(venusBtn){

    venusBtn.onclick = function(){

        window.location.href = "earth and mars.html";

    }

}


const earthBtn = document.getElementById("StartButton_for_E");

if(earthBtn){

    earthBtn.onclick = function(){

        window.location.href = "jupiter.html";

    }

}

const jupiterBtn = document.getElementById("StartButton_for_J");

if(jupiterBtn){

    jupiterBtn.onclick = function(){

        window.location.href = "saturn.html";

    }

}



const saturnBtn = document.getElementById("StartButton_for_S");

if(saturnBtn){

    saturnBtn.onclick = function(){

        window.location.href = "uranus.html";

    }

}
const ending = document.querySelector(".ending-screen");
const content = document.querySelector(".overlay-all");

if(ending && content){

    document.addEventListener("click", () => {

        content.style.display = "none";

        ending.classList.add("show");

    });

}


