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
    refs.modal.classList.toggle("ontop");
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
      refs.modal.classList.toggle("ontop");
      document.body.classList.remove("no-scroll");
    }
  }

  // burger-menu
  const animated_btn = {
    openModalBtn: document.querySelectorAll("[data-menu-anima-open]"),
    closeModalBtn: document.querySelector("[data-menu-anima-close]"),
    modal: document.querySelector("[data-menu-anima]"),
  };
  animated_btn.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleAnima);
  });
  animated_btn.closeModalBtn.addEventListener("click", toggleAnima);
  function toggleAnima() {
    animated_btn.modal.classList.toggle("open");
  }

  const menu = {
    openModalBtn: document.querySelectorAll("[data-menu-modal-open]"),
    closeModalBtn: document.querySelector("[data-menu-modal-close]"),
    modal: document.querySelector("[data-menu-modal]"),
  };
  menu.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleMenu);
  });
  menu.closeModalBtn.addEventListener("click", toggleMenu);
  menu.modal.addEventListener("click", removeMenu); //* close by click on backdrop
  function removeMenu(e) {
    if (e.target === e.currentTarget) {
      animated_btn.modal.classList.toggle("open");
      menu.modal.classList.add("is-hidden");
    }
  }
  function toggleMenu() {
    menu.modal.classList.toggle("is-hidden");
  }
})();
