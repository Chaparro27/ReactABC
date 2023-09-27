import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from './context/AuthContext';

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import TaskFormPage from "./pages/TaskFormPage";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<h1>Home</h1>} />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/register" element ={<RegisterPage />} />
          <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element ={<h1>Tasks</h1>} />
          <Route path="/add-task" element ={<TaskFormPage/>} />
          <Route path="/task:id" element ={<h1>Search Task</h1>} />
          <Route path="/profile" element ={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;