$(document).ready(function () {
    let images = [

    ]
    let items = document.querySelectorAll('.main7_content-item');
    items.forEach(item => {
        if (!images.includes(item.dataset.image)) {

            images.push(item.dataset.image);
        }
    })
    console.log(images);

    document.querySelectorAll('.home_main7 .owl-dots .owl-dot span').forEach((item, index) => {

        item.style.backgroundImage = `url('${images[index]}')`;
    });
    $(".owl-carousel").owlCarousel();
});
//main3
$('.js-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// main_7
$('.main7_content').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

})

//gallery
// const galleryOpen = document.querySelector('.js_gallery-bg');
// const galleryClose = document.querySelector('.js_info-close');
// const galleryInfo = document.querySelector('.js_info');


// galleryOpen.addEventListener('click', function () {
//     galleryInfo.classList.add('open_gallery-info');
// })

// galleryClose.addEventListener('click', function () {
//     galleryInfo.classList.remove('open_gallery-info');
// })



// $('.info_content').owlCarousel({
//     loop: false,
//     margin: 10,
//     nav: true,
//     navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],

//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }

// });



$('.slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
