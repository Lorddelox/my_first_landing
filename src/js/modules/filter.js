const filter = (activeClass) => {
    const filterBtn = document.querySelectorAll(".filter__btn"),
        filterItem = document.querySelectorAll(".filter__content-item");

    function hideAllContent() {
        filterItem.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove(activeClass);
        });
        filterBtn.forEach((button) => {
            button.classList.remove(activeClass)
        });
    }
    function showFiltretedContent(selector, target) {
        filterItem.forEach((item) => {
            if (selector == item.dataset.filter) {
                item.classList.remove("hide");

            }
            if (selector == "ALL") {
                item.classList.remove("hide");
            }
        });
    }

    filterBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            hideAllContent();
            showFiltretedContent(btn.textContent);
            btn.classList.add(activeClass);
        });
    });

};
export default filter;