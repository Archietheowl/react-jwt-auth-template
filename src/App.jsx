// src/App.jsx

import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupForm from './pages/SignupForm/SignupForm';
import SigninForm from './pages/SigninForm/SigninForm';
import * as authService from './services/authService'


export const AuthedUserContext = createContext(null);

const App = () => {
  //States
  const [user, setUser] = useState(authService.getUser());
  
  //Functions/Handlers
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  };


  return (
    <AuthedUserContext.Provider value={user}>
      <NavBar handleSignout={handleSignout} />
      <Routes>
        {
        user ? 
          <Route path='/' element={<Dashboard /> } />
        :
          <Route path='/' element={<Landing /> }/>
        }

        <Route path='/signup' element={<SignupForm setUser={setUser} />}/>

        <Route path='/signin' element={<SigninForm setUser={setUser}/>}/>
      </Routes>
    </AuthedUserContext.Provider>
  )
}

export default App
