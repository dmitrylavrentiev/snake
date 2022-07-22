import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../store/actions'

export default function Counter() {

    const counter = useSelector(store => {
        return store.counter
    })

    const dispatch = useDispatch()

    return (
        <div className="counter">
            <div className="counter-count">{counter}</div>
            <div className="counter-controller">
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}