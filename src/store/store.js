import { createStore } from 'redux'

import { INCREMENT, DECREMENT } from './types';

const initStore = {
    counter: 0
}

const reducer = (store = initStore, action) => {

    switch(action.type) {
        case INCREMENT: {
            const counter = store.counter + 1
            return {...store, counter}
        }

        case DECREMENT: {
            const counter = store.counter - 1
            return {...store, counter}
        }

        default: {
            return store
        }
    }
}

export default createStore(reducer)