//Object Literal do modal
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  modalMessage: document.querySelector('.modal .title span'),
  BtnClose: document.querySelector('.modal button.close'),

  open () {
    Modal.wrapper.classList.add('open')
  },
  close () {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.BtnClose.onclick = function () {
  Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown (event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}