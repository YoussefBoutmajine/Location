const initialState = {
    cars:[ 
        { car: 1, name: "", module: "" }, 
        { car: 2, name: "", module: "" }
    ] 
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_car":
            return {...state, cars:[...state.cars, action.payload]}
        case "Update_car":
            const user = state.cars.find(
                    u=>u.car===parseInt(action.payload.car)
                )
            if (user) {
                user.name = action.payload.name
                user.module = action.payload.module
            }
            return state
        case "Delete_car":
            return {...state, cars:[...state.cars.filter((u)=>u.car!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer
