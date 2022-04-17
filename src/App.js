import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmp from './Components/AddEmp';
import Listemp from './Components/Listemp';
import ListOfEmp from './Components/ListOfEmp';
import UpdateEmp from './Components/UpdateEmp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/employees'element={<Listemp/>} />
        <Route path='/employees/add'element={<AddEmp/>} />
        <Route path='/employees/update/:id'element={<UpdateEmp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
