import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../redux/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import './modal.css'

export const Modal = ({children}) => {
    const dispatch = useDispatch()
    const isClose = () => {
        dispatch(toggleModal(false))
    }
    const isOpen = useSelector(state => state.user.showForm.payload)
    const modalClose = (e) => {
        e.target.classList.contains('modal-wrapper') && isClose()
    }
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('block');
        } else {
            document.body.classList.remove('block');
        }
        return () => {
            document.body.classList.remove('block');
        };
    }, [isOpen]);
    return(
        <> 
            {isOpen ? (
                <div className="modal-React" onClick={e => modalClose(e)}>
                    <div className="modal-wrapper">
                        <div className="modal-content">
                            <button className="modal-close-button" onClick={isClose}><FontAwesomeIcon icon={faXmark} /></button>
                            {children}
                        </div>
                    </div>
                </div>
            ): null}
        </>
    )
}

