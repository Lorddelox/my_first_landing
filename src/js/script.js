
import filter from "./modules/filter";
import Swiper from 'swiper/bundle';
import modal from "./modules/modal";
import changeColor from "./modules/changeColor";
import openContent from "./modules/openContent";

// import 'swiper/css';
window.addEventListener("DOMContentLoaded", () => {
    filter("filter__btn--active");
    const aboutUsSlider = new Swiper('.swiper', {

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: "about-us__pagination-bulet--active",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
    modal();
    openContent({
        parentSelector: ".about-studio__wrapper",
        buttonSelector: ".about-studio__read-more",
        contentSelector: ".about-studio__text>p:last-child",
    });
});
