import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Mainmenu.module.css'

function Mainmenu({dispatch}) {
    const [value, setValue] = React.useState('')

    const buttonNext = () => {
        if(value.length>0) {
            dispatch({type: 'AUTH', payload: true})
        }
    }

    return (
        <div className={styles.wrapper_menu}>
           <div className={styles.menu}>
                <div>
                    <input onChange={(e)=>setValue(e.currentTarget.value)} value={value} type="text" placeholder="enter your name"/>
                    <Link to={'/example'}><div className={styles.button} disabled={true} onClick={()=>buttonNext()}>Далее</div></Link>
                </div>
           </div>
        </div>
    )
}

export default Mainmenu
