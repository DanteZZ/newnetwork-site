import Update from 'immutability-helper'

export const SET_TV = new String('SET_TV')

export const SetTv = data => ({
  type: SET_TV,
  payload: data,
})

export const MutateTv = (state, data) =>
  Update(state, {
    tv: { $set: data },
  })


export const UpdateTv = (value) => async (dispatch) => {
    dispatch(SetTv(value))
}