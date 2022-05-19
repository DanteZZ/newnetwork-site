import Update from 'immutability-helper'

export const SET_PHONE = new String('SET_PHONE')

export const SetPhone = data => ({
  type: SET_PHONE,
  payload: data,
})

export const MutatePhone = (state, data) =>
  Update(state, {
    phone: { $set: data },
  })


export const UpdatePhone = (value) => async (dispatch) => {
    dispatch(SetPhone(value))
}