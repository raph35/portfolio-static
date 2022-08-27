const carousel = document.querySelector("#carouselDescription");
console.log(carousel)
const listDescription = carousel?.querySelectorAll("div[data-target='#project_carouselDescription']")

console.log(listDescription);

$("#project_carousel").on('slide.bs.carousel', function (e) {
    listDescription.forEach((elt, i) => {
        elt.classList.remove('active');
        console.log(elt.classList);
    });
    listDescription[e.to].classList.add('active');
    setTimeout(() => {
    }, 5)

})


// $(function () {
//     'use strict'

//     $('[data-toggle="offcanvas"]').on('click', function () {
//         $('.offcanvas-collapse').toggleClass('open')
//     })

//     $('.navbar-nav>li>.nav-link').on('click', function () {
//         $('.offcanvas-collapse').toggleClass('open')
//     })
// })
