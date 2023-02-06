import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";

const PrivateRoutes = ({children, ...rest}) => {
    const {user, loading} = useContext(UserContext);
    if(!user){
        return <div>Loading...</div>
    }

    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )

}

export default PrivateRoutes;