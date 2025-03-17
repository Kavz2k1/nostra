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


document.addEventListener("DOMContentLoaded", function () {
    let checkboxes = document.querySelectorAll("input[name='tag']");
    let products = document.querySelectorAll("#product-container div");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        let selectedFilters = [];

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedFilters.push(checkbox.value);
            }
        });

        products.forEach((product) => {
            let tags = product.getAttribute("data-tags").split(" ");
            let isVisible = selectedFilters.length === 0 || selectedFilters.some(filter => tags.includes(filter));
            product.style.display = isVisible ? "block" : "none";
        });
    }
});