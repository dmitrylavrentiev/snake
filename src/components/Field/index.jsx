import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './field.css'

import { moveAction, generateRandomFood } from '../../store/actions'

export default function Field() {

    const field = useSelector(state => state.fieldStore.field)
    const snake = useSelector(state => state.fieldStore.snake)
    const food = useSelector(state => state.fieldStore.food)

    const dispatch = useDispatch()

    const keyPrassHandler = e => {
        dispatch(moveAction(e.keyCode))
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPrassHandler, true)
    }, [])

    useEffect(() => {
        dispatch(generateRandomFood())
    }, [])

    return(
        <div className="field">
            <p>Score: {snake.length}</p>
            {field.map(row => {
                return (
                    <div className="row" key={row[0].id + '1'}>
                        {row.map(col => {
                            let className = ''
                            if(col.data === '1') {
                                className = 'wall'
                            } else if(col.data === 'o'){
                                className = 'snake'
                            } else if(col.data === 'f') {
                                className = 'food'
                            }
                            return <div className={`col ${className}`} key={col.id}>{col.data}</div>
                        })}
                    </div>
                )
            })}
        </div>
    )
}