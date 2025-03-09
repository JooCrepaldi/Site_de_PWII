document.getElementById("botaoLogin").addEventListener("click", function() {
    document.querySelector(".loginPage").style.display = "none";
    document.querySelector(".home").style.display = "block";
})

document.getElementById("sobrenosButton").addEventListener("click", function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".sobreNos").style.display = "block";
})

