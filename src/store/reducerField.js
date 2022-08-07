import initFieldBuilder from "../helpers/initFieldBuilder"
import oneStep from "../helpers/oneStep"
import { 
    MOVE, 
    GENERATE_RANDOME_FOOD 
} from './types'

const startPoint = [4,4]

const initState = {
    field: initFieldBuilder(20, startPoint),
    snake: [startPoint],
    food: [null, null]
}

export const reducerField = (state = initState, action) => {
    switch(action.type) {
        case MOVE:
            const {field, snake} = oneStep(action.data, state, generateRandomFood)
            return {...state, field, snake}
        case GENERATE_RANDOME_FOOD:
            
            return {...generateRandomFood(state, true)}
        default:
            return state
    }
}

const generateRandomFood = (state, isInit = false) => {
    const getFood = () => {
        return [
            Math.floor(Math.random() * (state.field.length - 2)) + 1,
            Math.floor(Math.random() * (state.field.length - 2)) + 1
        ]
    }

    if (state.food[0] !== null && isInit)
        return { ...state }
    let food = getFood()
    let isEqual = true
    let isContain = null
    while (isEqual) {
        isContain = state.snake.find(el => JSON.stringify(el) === JSON.stringify(food))
        if (!isContain) {
            isEqual = false
        } else {
            food = getFood()
        }
    }
    const newField = JSON.parse(JSON.stringify(state.field))
    //newField[state.food[0]][state.food[1]] = '0'
    newField[food[0]][food[1]].data = 'f'
    return { ...state, field: newField, food }
}