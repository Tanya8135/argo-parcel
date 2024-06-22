(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-openBkBarElite"),
        closeModalBtn: document.querySelector("[data-modal-closeBkBarElite]"),
        modal: document.querySelector("[data-modalBkBarElite]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hiddenBkBarElite");
    }
})();