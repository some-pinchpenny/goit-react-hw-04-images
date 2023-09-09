import Modal from 'react-modal';
import { ModalImg, Thumb } from './Modal.styled';

Modal.setAppElement(document.getElementById('root'));
Modal.defaultStyles.overlay = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1200,
};

Modal.defaultStyles.content = {
  maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 48px)',
};

export const GallerryModal = ({ isClose, isOpen, url, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      contentLabel="Example Modal"
    >
      <Thumb>
        <ModalImg src={url} alt={alt} />
      </Thumb>
    </Modal>
  );
};
