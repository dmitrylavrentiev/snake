import { 
    INCREMENT, 
    DECREMENT,
    MOVE
} from "./types"

export function increment () {
    return {
        type: INCREMENT
    }
}

export function decrement () {
    return {
        type: DECREMENT
    }
}

export function moveAction (payload) {
    return {
        type: MOVE,
        data: payload
    }
}