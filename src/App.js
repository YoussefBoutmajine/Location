import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UpdateCar from './Composants/UpdateCar';
import UserList from './Composants/UserList';
import AddCar from './Composants/AddCar';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>Location de voiture</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-car' element={<AddCar />} />
          <Route path='/update-car/:car' element={<UpdateCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
