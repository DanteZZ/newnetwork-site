import DefaultState from './defaultState'

import { SET_LOADED, MutateLoaded } from './actions/setters/setLoaded'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_LOADED:
            return MutateLoaded(state, payload)
        default:
            return state
  }
}