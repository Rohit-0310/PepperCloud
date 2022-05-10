// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import ViewForm from './components/ViewForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1>Pepper Cloud</h1>
        {/* <HomePage /> */}
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/form/create"} element={<CreatePage />} />
            <Route path="/form/:id/edit" element={<EditPage />} />
            <Route path="/form/:id" element={<ViewForm />} />
        </Routes>

    </div>
  );
}

export default App;
