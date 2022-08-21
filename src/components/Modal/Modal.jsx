import { Component } from 'react'
import Proptypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Overlay, ModalDiv } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    static propTypes = {
        closeModal: Proptypes.func.isRequired,
        largeImageURL: Proptypes.string.isRequired,

    }

    componentDidMount() {
        window.addEventListener("keydown", this.handelKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelKeyDown)
    }

    handelKeyDown = (e) => {
        if (e.code === 'Esk') {
            this.props.closeModal()
        }
    }

    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.closeModal()
        }
    }
    render() {
        return (
            createPortal(
                <Overlay className="overlay" onClick={this.handleBackdropClick}>
                    <ModalDiv className="modal">
                        <img src={this.props.largeImageURL} alt="" />
                    </ModalDiv>
                </Overlay>,
                modalRoot,
            )
        )
    }
}

export default Modal;
