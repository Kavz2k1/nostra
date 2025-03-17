let offerbar = document.getElementById("offerbar")
document.getElementById("off-close").addEventListener("click", function()
{
    offerbar.style.display = "none";
})

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

let index = 0; 
const images = document.querySelectorAll(".s__image");
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

document.querySelector(".btn-left").addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    showImage(index);
});

document.querySelector(".btn-right").addEventListener("click", () => {
    index = (index + 1) % totalImages;
    showImage(index);
});

// Initialize slide
showImage(index);


let likebtn=document.querySelectorAll(".like")

likebtn.forEach((btn)=>{
    btn.addEventListener("click",function(event){
        
        
        if(event.target.src.indexOf("blackheart")>0)
        {
           console.log("okok")
            
            event.target.src="image/redheart.png"
        }
        else{
         event.target.src="image/blackheart.png"
        }
    })
})
document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".reveal-scroll-animate");
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
            el.classList.add("active");
        }
    });
});


