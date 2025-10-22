import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FiX, FiAlertTriangle, FiCheckCircle, FiInfo, FiHeart, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import './ConfirmModal.css'

function ConfirmModal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", type = "warning" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return createPortal(
    (
      <div 
        className="modal-backdrop" 
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
          
          <div className="modal-header">
            <div className={`modal-icon modal-icon-${type}`}>
              {type === 'warning' && <FiAlertTriangle />}
              {type === 'success' && <FiCheckCircle />}
              {type === 'info' && <FiInfo />}
              {type === 'heart' && <FiHeart />}
              {type === 'cart' && <FiShoppingBag />}
              {type === 'delete' && <FiTrash2 />}
            </div>
            <h3 className="modal-title">{title}</h3>
          </div>
          
          <div className="modal-body">
            <p>{message}</p>
          </div>
          
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={onClose}>
              {cancelText}
            </button>
            <button className={`btn btn-${type === 'warning' ? 'danger' : 'primary'}`} onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    ),
    document.body
  )
}

export default ConfirmModal
