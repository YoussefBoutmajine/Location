import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCarAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
function AddCar() {
    const count = useSelector(data=>data.cars.length);
    const [name, setName] = useState("");
    const [module, setModule] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addCarAction({
            car:count+1,
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
export default AddCar