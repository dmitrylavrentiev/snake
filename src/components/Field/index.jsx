import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './field.css'

import { moveAction } from '../../store/actions'

export default function Field() {

    const field = useSelector(state => state.fieldStore.field)
    const snake = useSelector(state => state.fieldStore.snake)

    const dispatch = useDispatch()

    const keyPrassHandler = e => {
        dispatch(moveAction(e.keyCode))
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPrassHandler, true)
    }, [])

    return(
        <div className="field">
            <p>{snake[0][0]} {snake[0][1]}</p>
            {field.map(row => {
                return (
                    <div className="row" key={row[0].id + '1'}>
                        {row.map(col => {
                            let className = ''
                            if(col.data === '1') {
                                className = 'wall'
                            } else if(col.data === 'o'){
                                className = 'snake'
                            }
                            return <div className={`col ${className}`} key={col.id}>{col.data}</div>
                        })}
                    </div>
                )
            })}
        </div>
    )
}