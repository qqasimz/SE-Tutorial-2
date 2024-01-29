import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [x, setX] = useState(5);
    const navigate = useNavigate();


    return(
        <div>
            <h1>Login</h1>
            <p>Clicker Value</p>
            <p>{x}</p>
            <button onClick={()=>setX(x+1)}>+</button>
            <button onClick={()=>setX(x-1)}>-</button>
            <button onClick={()=>navigate('/signup')}>Signup boys</button>
        </div>
    )
}

export default Login