import './ConfirmModal.scss'

const ConfirmModal = (props) => {
  const {
    message,
    onConfirm,
    onCancel,
  } = props

  return (
    <div className="confirm-form__overlay" onClick={onCancel}>

      <div
        className="confirm-form__modal"
           onClick={(event) => event.stopPropagation()}
      >
        <h2 className="confirm-form__modal-heading">
          Confirm deletion
        </h2>
        <p
          className="confirm-form__modal-message">
          {message}
        </p>

        <div className="confirm-form__modal-footer">
          <button className="confirm-form__modal-button-cancel"
                  onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="confirm-form__modal-button-confirm"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal