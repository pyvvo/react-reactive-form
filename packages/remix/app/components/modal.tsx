// src/components/Modal.tsx
import React from 'react';
import stylesUrl from './modal.css';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
