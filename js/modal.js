(() => {
// ordering
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    // scroll на початок сторінки
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  //* закривання по кліку на бекдроп
  refs.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
    }
  }

// burger-menu
  const menu = {
    openModalBtn: document.querySelectorAll("[menu-open]"),
    closeModalBtn: document.querySelector("[menu-close]"),
    modal: document.querySelector("[menu-modal]"),
  };
  menu.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleMenu);
  });
  menu.closeModalBtn.addEventListener("click", toggleMenu);
  menu.modal.addEventListener("click", removeMenu); //* close by click on backdrop
  function removeMenu(e) {
    if (e.target === e.currentTarget) {
      menu.modal.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
    }
  }
  function toggleMenu() {
    menu.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

})();
