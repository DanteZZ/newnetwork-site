import Update from 'immutability-helper'

export const SET_ROUTER = new String('SET_ROUTER')

export const SetRouter = data => ({
  type: SET_ROUTER,
  payload: data,
})

export const MutateRouter = (state, data) =>
  Update(state, {
    router: { $set: data },
  })


export const UpdateRouter = (value) => async (dispatch) => {
    dispatch(SetRouter(value))
}