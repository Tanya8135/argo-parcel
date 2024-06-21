(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-openBkBar"),
        closeModalBtn: document.querySelector("[data-modal-closeBkBar]"),
        modal: document.querySelector("[data-modalBkBar]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hiddenBkBar");
    }
})();