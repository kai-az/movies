import './auth-button.css'

export const AuthButton = ({ styles, text, showModal }) => {
  return (
      <button
          className={styles}
          onClick={showModal}
      >
          {text}
      </button>
  )
}
