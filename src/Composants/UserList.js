import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteCarAction} from '../Config/actions'
function UserList() {
    const cars = useSelector((data)=>data.cars);
    const dispatch = useDispatch();
    const handleDelete = (car) => {
        dispatch(deleteCarAction(car))
    }
    return (
        <div>
            <p>
                <Link to="/add-car">
                    <button>Add car</button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>car</td>
                        <td>Name</td>
                        <td>module</td>
                    
                    </tr>
                </thead>
                <tbody>
                    {cars.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{user.car}</td>
                                <td>{user.name}</td>
                                <td>{user.module}</td>
                                <td>
                                    <Link to={`/update-car/${user.car}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user.car)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
        </div>
    )
}
export default UserList