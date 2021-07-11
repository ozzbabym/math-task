import React from 'react'
import styles from './Modal.module.css'
function Modal({state, dispatch}) {

    const buttonRepeat = () => {
        dispatch({type: 'REPEAT'})
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalWindow}>
                <div>{state.answer.length>4 ? 'Молодец':'Плохо'} , {state.name}</div>
                <div>Ты ответил на {state.answer.length} из 10</div>
                <div onClick={buttonRepeat} className={styles.buttonRepeat}>Повторить</div>
            </div>
        </div>
    )
}

export default Modal
