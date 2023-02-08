import './App.css';
// import { useState } from "react";
import io from "socket.io-client";
import {Routes , Route} from "react-router-dom";
import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";

import Login from "./components/Login";
import Register from "./components/Register";
import JoinChat from "./components/JoinChat";

import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ResetPassword from './components/ResetPassword';
import ForgetPassword from './components/ForgetPassword';
import Header from './components/Header';
// import Footer from './components/Footer';

const socket = io.connect('http://localhost:4000');

function App() {
  const [user, setUser , loading] = useFindUser();
  console.log("User", user);
    

  return (
    //user comes from custom hooks.. 
    <UserContext.Provider value={{user , setUser , loading}}>  
    {/* //user- from context */}
      <div className="App">
        
        <Header/>

        <Routes>
         <Route element={<PublicRoutes />}>
            <Route path='/' element={<JoinChat socket={socket} /> } />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgetPassword' element={<ForgetPassword/>}/> 
            <Route path='/passwordReset' element={<ResetPassword/>}/>
                  
          </Route>                     
                     
          <Route element={<PrivateRoutes/>}>
            {/* <Route path='/chat' element={<Chat/>}/> */}
          </Route>
        </Routes> 
        {/* <Footer/> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
