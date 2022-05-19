import { combineReducers } from 'redux'

import main from './main/reducer'
import calculator from './calculator/reducer'

export default combineReducers({
  main,
  calculator
})
