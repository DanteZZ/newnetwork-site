import Update from 'immutability-helper'

export const SET_TV_RENT = new String('SET_TV_RENT')

export const SetTvRent = data => ({
  type: SET_TV_RENT,
  payload: data,
})

export const MutateTvRent = (state, data) =>
  Update(state, {
    tv_rent: { $set: data },
  })


export const UpdateTvRent = (value) => async (dispatch) => {
    dispatch(SetTvRent(value))
}