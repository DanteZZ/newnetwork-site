import Update from 'immutability-helper'

export const SET_ADDRESS = new String('SET_ADDRESS')

export const SetAddress = data => ({
  type: SET_ADDRESS,
  payload: data,
})

export const MutateAddress = (state, data) =>
  Update(state, {
    address: { $set: data },
  })


export const UpdateAddress = (value) => async (dispatch) => {
    dispatch(SetAddress(value))
}