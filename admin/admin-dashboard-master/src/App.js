import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import "./sb-admin-2.min.css";
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Userlist from './Components/EventList/Userlist';
import UserCreate from './Components/EventCreate/UserCreate';
import UserView from './Components/EventView/UserView';
import UserEdit from './Components/EventEdit/UserEdit';
import Portal from './Components/Portal/Portal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='user-list' element={<Userlist />} />
          <Route path='create-user' element={<UserCreate />} />
          <Route path='user-view/:id' element={<UserView />} />
          <Route path='user-edit/:id' element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
