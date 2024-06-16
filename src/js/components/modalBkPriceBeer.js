(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-openBkBarBeer"),
        closeModalBtn: document.querySelector("[data-modal-closeBkBarBeer]"),
        modal: document.querySelector("[data-modalBkBarBeer]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hiddenBkBarBeer");
    }
})();