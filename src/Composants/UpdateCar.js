import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { updateCarAction } from "../Config/actions"

function UpdateCar() {
    const {car} = useParams()
    const user = useSelector(data=>data.cars.find(
        u=>u.cars===parseInt(car))
        );
    const [name, setName] = useState(user.name);
    const [module, setModule] = useState(user.module);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(updateCarAction({
            car:car,
            name:name,
            module:module
        }))
        navigate('/')
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
            <label>module</label>
            <input type="number" value={module} onChange={(e)=>setModule(e.target.value)} required />
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default UpdateCar