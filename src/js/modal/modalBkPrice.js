(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-openBk]"),
        closeModalBtn: document.querySelector("[data-modal-closeBk]"),
        modal: document.querySelector("[data-modalBk]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hiddenBk");
    }
})();