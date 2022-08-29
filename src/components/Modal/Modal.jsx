import { useEffect } from 'react'
import Proptypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Overlay, ModalDiv } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, currentImage }) => {

    useEffect(() => {
        window.addEventListener("keydown", handelKeyDown)

        return () => {
            window.addEventListener("keydown", handelKeyDown)
        }
    })

    const handelKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose()
        }
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        createPortal(
            <Overlay className="overlay" onClick={handleBackdropClick}>
                <ModalDiv className="modal">
                    <img src={currentImage} alt="" />
                </ModalDiv>
            </Overlay>,
            modalRoot,
        )
    )
}


export default Modal;

Modal.propTypes = {
    onClose: Proptypes.func.isRequired,
    currentImage: Proptypes.string.isRequired,
}

// export class Modal extends Component {
//     static propTypes = {
//         onClose: Proptypes.func.isRequired,
//         currentImage: Proptypes.string.isRequired,

//     }

//     componentDidMount() {
//         window.addEventListener("keydown", this.handelKeyDown)
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handelKeyDown)
//     }

//     handelKeyDown = (e) => {
//         if (e.code === 'Escape') {
//             this.props.onClose()
//         }
//     }

//     handleBackdropClick = (e) => {
//         if (e.target === e.currentTarget) {
//             this.props.onClose()
//         }
//     }
//     render() {
//         return (
//             createPortal(
//                 <Overlay className="overlay" onClick={this.handleBackdropClick}>
//                     <ModalDiv className="modal">
//                         <img src={this.props.currentImage} alt="" />
//                     </ModalDiv>
//                 </Overlay>,
//                 modalRoot,
//             )
//         )
//     }
// }

// export default Modal;

