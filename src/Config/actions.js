export const addCarAction = (user) => {
    return {type:"Add_car", payload:user}
}
export const updateCarAction = (newcar) => {
    return {type:"Update_car", payload:newcar}
}
export const deleteCarAction = (car) => {
    return {type:"Delete_car", payload:car}
}
