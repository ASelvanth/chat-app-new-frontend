import { useEffect, useState } from "react";
import axios from "axios";

//custom Hook
const useFindUser = () => {    
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(false);
    // const accessToken = localStorage.getItem('accessToken');
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I3ZTIyYTE1ZjRhNmU5ODIwYTA1NzgiLCJpYXQiOjE2NzUxNDg2NTd9.2ArPGKvpDXhmnew_iApqq7Ie5OjThWl_kyyHCwsnX6U';

    const getUser = async () => {
        try{
            // const response = await axios.get("http://localhost:4000/api/user",{withCredentials: true});
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`,{withCredentials: true});
            if(response.data.success){
                console.log('Response : ',response.data);
                setUser(response.data.user);
                setLoading(false);
            }
        }catch(error){
            setLoading(false);
            console.log('Error: ', error);
        }
    }

    //to handle lifecyle - we need to functional component useEffect
    //withCredentials - cookie that will be come from the backend - access by any port 
    useEffect(() => {
        setLoading(true);
        getUser();
    }, []);

    //useState hook -  we can destructure the array in ohter functions
    return [user, setUser, loading];
}

export default useFindUser;