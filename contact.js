
let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function()
{
    sidenav.style.left=0
})
closenav.addEventListener("click", function()
{
    sidenav.style.left="-50%"
})
