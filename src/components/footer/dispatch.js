import { UpdateCalculator } from "../../.store/calculator/actions/updateCalculator";
const dispatcher = dispatch => ({
    updateCalculator: speed => dispatch(UpdateCalculator(speed))
})
export default dispatcher