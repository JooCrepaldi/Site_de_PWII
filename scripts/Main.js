document.getElementById("botaoLogin").addEventListener("click", function() {
    document.querySelector(".loginPage").style.display = "none";
    document.getElementById("home").style.display = "block";
});

function showTab(tabId) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = "none";
    });
    
    document.getElementById(tabId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {

    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = "none";
    });
    
    document.querySelector(".loginPage").style.display = "flex";
});//rever o código