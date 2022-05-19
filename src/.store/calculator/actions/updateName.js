import Update from 'immutability-helper'

export const SET_NAME = new String('SET_NAME')

export const SetName = data => ({
  type: SET_NAME,
  payload: data,
})

export const MutateName = (state, data) =>
  Update(state, {
    name: { $set: data },
  })


export const UpdateName = (value) => async (dispatch) => {
    dispatch(SetName(value))
}