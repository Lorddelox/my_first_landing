const modal = () => {
    const bindModal = (modalSelector, modalOpenButton, modalCloseButton) => {
        const modal = document.querySelector(modalSelector),
            openBtn = document.querySelectorAll(modalOpenButton),
            closeBtn = modal.querySelectorAll(modalCloseButton);

        function openModal() {
            modal.classList.remove("hide");
            modal.classList.add("flex-center");
            document.body.style.overflow = "hidden";
        }
        function closeModal() {
            modal.classList.add("hide");
            modal.classList.remove("flex-center");
            document.body.style.overflow = "";
        }


        openBtn.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                document.body.style.marginRight = window.innerWidth - document.documentElement.clientWidth + "px";
                openModal();

            });

        });
        closeBtn.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                closeModal();
                document.body.style.marginRight = 0;
            });
        });
        // modal.addEventListener("click", (e) => {
        //     console.log(e.target);
        // });
    };

    bindModal(".modal__order-call", ".order-call__btn", ".modal__close");
    bindModal(".modal__consultation", ".consultation-btn", ".modal__close");
};

export default modal;