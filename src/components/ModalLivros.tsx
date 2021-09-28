import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(253, 211, 77, 0.9)'
  },
};

export default function ModalLivro(props) {
  let subtitle;
 

  function closeModal() {
    props.onCancel()
  }

  return (
    <div>
      <Modal
        isOpen={props.open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div >

            <h2>Livro</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
            </form>

        </div>
        
      </Modal>
    </div>
  );
}
