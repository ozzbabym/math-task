import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import Modal from '../Modal/Modal'
import styles from './Example.module.css'

function Example({state, dispatch}) {
    const [arr, setArr] = useState({})
    const [result, setResult] = useState({})
    const setValue = ({id, value}) => {
        setArr({...arr, [id]: value})
    }

    const addResult = (e) => {
        setResult(e)
    }

    useEffect(()=>{
        dispatch({type: 'RESULT', payload: result})
    },[result])
    if(!state.auth) {return (<Redirect to={'/'} />)}
    return (
        <div className={styles.wrapper}>
            <div><b>{state.name}! Реши математические задачи</b></div>
            <div>Примечание: пиши ответы до сотых. Пример: 1 + 2 = 3.00</div>
            <div>
            {state.examples.map(item=>{
                return <div key={item.id} className={styles.exampleWrapper}>
                    <div className={styles.example}>
                        <div>{item.a}</div>
                        <div>{item.operator}</div>
                        <div>{item.b}</div>
                        <div>=</div>
                        <div><input type="text" value={arr[item.id]} className={!result[item.id] ? styles.default :  item.sum === Number(result[item.id]) ? styles.good : styles.error}  onChange={(e)=>setValue({value: e.currentTarget.value, id: item.id})}/></div>
                    </div> 
                </div>}
                )}
                <div className={styles.center}>
                    <div className={styles.buttonNext} onClick={()=>addResult(arr)}>Проверить</div>
                </div>
            </div>
            {
                Object.keys(result).length ? 
                <Modal state={state} dispatch={dispatch}/>
                : ''
            }
        </div>
    )
}

export default Example
    