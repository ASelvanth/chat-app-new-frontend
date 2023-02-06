import axios from "axios";
import { useEffect, useState } from "react";

const Login = () =>{

    const [userCred, setUserCred ] = useState({email : '', password :''});
    
    //its get already given empty cred then it will set usersCreds
    //very usefull when update multiple values to state
    const handleCred = value => {
        return setUserCred(cred => {
            return {...cred , ...value}
        })
    }

   useEffect(() => {
        console.log('Credentials :',userCred)
   }, [userCred])

   const handleLogin = async (event) => {    
     try{
        //prevent default - untill the function end that event will carry
        event.preventDefault();        
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, userCred,{withCredentials: true});
        console.log('response :', response );
     }catch(error){
        console.log('Error :',error);
     } 
   }

   return (
    <div>
        <h3>User Login</h3>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" value={userCred.email} placeholder="Enter email" onChange={(e) => handleCred({email: e.target.value})} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" value={userCred.password} placeholder="Password" onChange={(e) => handleCred({password: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div>
            <a href="/forgotPassword">Forgot password?</a>
        </div>
    </div>
)
}

export default Login;


 //ex
    // const handleEmail = email => {
    //     setUserCred({...userCred, email : email})
    // }
    // const handlePassword = password => {
    //     setUserCred({...userCred, password : password})
    // }