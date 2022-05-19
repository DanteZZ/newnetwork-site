import { UpdateAddress } from "../../../.store/calculator/actions/updateAddress"
import { UpdateName } from "../../../.store/calculator/actions/updateName"
import { UpdatePhone } from "../../../.store/calculator/actions/updatePhone"
import { UpdateSpeed } from "../../../.store/calculator/actions/updateSpeed"
import { UpdateRouter } from "../../../.store/calculator/actions/updateRouter"
import { UpdateRouterRent } from "../../../.store/calculator/actions/updateRouterRent"
import { UpdateTv } from "../../../.store/calculator/actions/updateTv"
import { UpdateTvRent } from "../../../.store/calculator/actions/updateTvRent"

const dispatcher = dispatch => ({
    updateAddress: value => dispatch(UpdateAddress(value)),
    updateName: value => dispatch(UpdateName(value)),
    updatePhone: value => dispatch(UpdatePhone(value)),
    updateSpeed: value => dispatch(UpdateSpeed(value)),
    updateRouter: value => dispatch(UpdateRouter(value)),
    updateRouterRent: value => dispatch(UpdateRouterRent(value)),
    updateTv: value => dispatch(UpdateTv(value)),
    updateTvRent: value => dispatch(UpdateTvRent(value)),
})

export default dispatcher