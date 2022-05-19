import DefaultState from './defaultState'

import { SET_ADDRESS, MutateAddress } from './actions/updateAddress'
import { SET_NAME, MutateName } from './actions/updateName'
import { SET_PHONE, MutatePhone } from './actions/updatePhone'
import { SET_SPEED, MutateSpeed } from './actions/updateSpeed'
import { SET_ROUTER, MutateRouter } from './actions/updateRouter'
import { SET_ROUTER_RENT, MutateRouterRent } from './actions/updateRouterRent'
import { SET_TV, MutateTv } from './actions/updateTv'
import { SET_TV_RENT, MutateTvRent } from './actions/updateTvRent'

import { SET_CALCULATOR, MutateCalculator } from './actions/updateCalculator'

export default function Reducer(state = DefaultState, { type, payload }) {
    switch (type) {
        case SET_ADDRESS:
            return MutateAddress(state, payload)
        case SET_NAME:
            return MutateName(state, payload)
        case SET_PHONE:
            return MutatePhone(state, payload)
        case SET_SPEED:
            return MutateSpeed(state, payload)
        case SET_ROUTER:
            return MutateRouter(state, payload)
        case SET_ROUTER_RENT:
            return MutateRouterRent(state, payload)
        case SET_TV:
            return MutateTv(state, payload)
        case SET_TV_RENT:
            return MutateTvRent(state, payload)
        case SET_CALCULATOR:
            return MutateCalculator(state, payload)
        default:
            return state
  }
}