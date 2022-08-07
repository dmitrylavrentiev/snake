import {
    INCREMENT,
    DECREMENT,
    MOVE,
    GENERATE_RANDOME_FOOD
} from "./types"

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function moveAction(payload) {
    return {
        type: MOVE,
        data: payload
    }
}

export function generateRandomFood() {
    return {
        type: GENERATE_RANDOME_FOOD
    }
}