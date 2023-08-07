
const burger = (openBtnSelector, closeBtnSelector, contentSelector) => {
    const openBtn = document.querySelector(openBtnSelector),
        closeBtn = document.querySelector(closeBtnSelector),
        burger = document.querySelector(contentSelector);

    openBtn.addEventListener('click', () => {
        burger.classList.add("animate__fadeInRightBig");
        burger.style.animationDuration = "0.5s";
        burger.style.display = "block";
        document.body.style.overflow = "hidden";
        document.querySelector(".hero__wrapper").style.position = "reletive";
    });
    closeBtn.addEventListener("click", () => {
        burger.classList.remove("animate__fadeInRightBig");
        burger.classList.add("animate__fadeOutRight");
        setTimeout(() => {
            burger.style.display = "none";
            burger.classList.remove("animate__fadeOutRight");
        }, 400)
        document.body.style.overflow = "";
        document.querySelector(".hero__wrapper").style.display = "";
    });

}
export default burger