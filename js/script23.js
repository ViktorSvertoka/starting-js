/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

// Разметка модалки

//  <button class="button" data-action="open-modal">Открыть модалку</button>

//     <div class="backdrop js-backdrop">
//       <div class="modal">
//         <h2>Modal window</h2>
//         <p>
//           In user interface design for computer applications, a modal window is
//           a graphical control element subordinate to an application's main
//           window. It creates a mode that disables the main window but keeps it
//           visible, with the modal window as a child window in front of it. Users
//           must interact with the modal window before they can return to the
//           parent application. This avoids interrupting the workflow on the main
//           window. Modal windows are sometimes called heavy windows or modal
//           dialogs because they often display a dialog box.
//         </p>
//         <button type="button" class="button" data-action="close-modal">
//           Закрыть
//         </button>
//       </div>
//     </div>

//     <script src="./js/06-modal.js" type="module"></script>

// Стили модалки

// body.show-modal .backdrop {
//   opacity: 1;
//   visibility: visible;
//   pointer-events: initial;
// }

// body.show-modal .modal {
//   transform: scale(1);
// }

// .backdrop {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.3);
//   z-index: 999;

//   pointer-events: none;
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
// }

// .modal {
//   padding: 24px;
//   border-radius: 4px;
//   max-width: 640px;
//   width: 100%;
//   min-height: 320px;
//   background-color: #fff;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

//   transform: scale(1.1);
//   transition: transform 200ms ease-in-out;
// }
