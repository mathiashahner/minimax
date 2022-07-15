import './modal.style.css'

export const Modal = ({ children }) => {
  return (
    <div className='modal'>
      <div className='modal__content'>{children}</div>
    </div>
  )
}