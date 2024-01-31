import { createStore } from 'redux'

const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

export const counterReducer = (state = initialState, action) => {
    let updatedScore = {}

    switch(action.type){
        case 'GOOD':
            return updatedScore = {
                ...state, 
                good: state.good + 1
            }
        case 'OK':
            return updatedScore = {
                ...state,
                ok: state.ok + 1
            }
        case 'BAD':
            return updatedScore = {
                ...state,
                bad: state.bad + 1
            }
        case 'ZERO':
            return updatedScore = {
                good: 0,
                ok: 0,
                bad: 0
            }
        default:
            return state
    }
}


export const store = createStore(counterReducer)