import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext"
import SignUp from "./pages/Signup";
import Login from "./pages/Login"
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
            <Routes>
            <Route path="/updateProfile" element={
            <PrivateRoute> <UpdateProfile /> </PrivateRoute>}>
            </Route>
            <Route exact path="/home" element={
            <PrivateRoute> <Home /> </PrivateRoute>}>
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
