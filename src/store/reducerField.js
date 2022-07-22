import initFieldBuilder from "../helpers/initFieldBuilder"
import oneStep from "../helpers/oneStep"
import { MOVE } from './types'

const startPoint = [4,4]

const initState = {
    field: initFieldBuilder(20, startPoint),
    snake: [startPoint]
}

export const reducerField = (state = initState, action) => {
    switch(action.type) {
        case MOVE:
            const {field, snake} = oneStep(JSON.parse(JSON.stringify(state.field)), action.data, state.snake)
            return {field, snake}
        default:
            return state
    }
}