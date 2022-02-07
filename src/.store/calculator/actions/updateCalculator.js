import Update from 'immutability-helper'

export const SET_CALCULATOR = new String('SET_CALCULATOR')

export const SetCalculator = data => ({
  type: SET_CALCULATOR,
  payload: data,
})

export const MutateCalculator = (state, data) =>
  Update(state, { $merge: data })



export const UpdateCalculator = (speed) => async (dispatch) => {
    dispatch(SetCalculator({
        address:"",
        name:"",
        phone:"",
        speed,
        router:"standart",
        router_rent:false,
        tv:"android",
        tv_rent:false,
    }))
}