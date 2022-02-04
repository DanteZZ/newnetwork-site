import Update from 'immutability-helper'

export const SET_ROUTER_RENT = new String('SET_ROUTER_RENT')

export const SetRouterRent = data => ({
  type: SET_ROUTER_RENT,
  payload: data,
})

export const MutateRouterRent = (state, data) =>
  Update(state, {
    router_rent: { $set: data },
  })


export const UpdateRouterRent = (value) => async (dispatch) => {
    dispatch(SetRouterRent(value))
}