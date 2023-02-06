
import { useState } from "react";
import {Routes , Route} from "react-router-dom";
import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";
import Register from "./components/Register";
import Chat from "./components/Chat";
import Login from "./components/Login";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  
const [user, setUser] = useFindUser();

  return (
    //user comes from custom hooks.. 
    <UserContext.Provider value={{user}}>  
    {/* //user- from context */}
      <div className="App">
        <Routes>
         <Route element={<PublicRoutes />}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>          
          </Route> 
          <Route path='/chat' element={<Chat/>}/>          
        </Routes>              
      
      </div>
    </UserContext.Provider>
  );
}

export default App;
