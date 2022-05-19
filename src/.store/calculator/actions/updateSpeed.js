import Update from 'immutability-helper'

export const SET_SPEED = new String('SET_SPEED')

export const SetSpeed = data => ({
  type: SET_SPEED,
  payload: data,
})

export const MutateSpeed = (state, data) =>
  Update(state, {
    speed: { $set: data },
  })


export const UpdateSpeed = (value) => async (dispatch) => {
    dispatch(SetSpeed(value))
}