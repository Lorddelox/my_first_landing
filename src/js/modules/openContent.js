const openContent = ({ buttonSelector, contentSelector, deleteContent, howMuch }) => {
    const btn = document.querySelector(buttonSelector),
        content = document.querySelectorAll(contentSelector);

    btn.addEventListener("click", () => {
        btn.remove();
        content.forEach((item) => {
            item.style.display = "block";
        });
    });
};
export default openContent;