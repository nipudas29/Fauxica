console.log("Why looking at the source code here \n visit github : https://github.com/nipudas29/html-css-project")

document.getElementById("openMenu").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.add("active");
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
});
