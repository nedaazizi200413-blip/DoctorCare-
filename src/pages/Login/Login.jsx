import {useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import "./Login.css";


function Login(){

const [username,setUsername]=useState("");

const {login}=useContext(AuthContext);

const navigate=useNavigate();


const handleSubmit=(e)=>{

e.preventDefault();

login(username);

navigate("/appointmentList");

};


return(

<section className="login-page">

<div className="login-box">

<i className="fa-solid fa-user-lock"></i>

<h1>
ورود به حساب
</h1>


<form onSubmit={handleSubmit}>


<input
type="text"
placeholder="نام کاربری"
value={username}
onChange={(e)=>setUsername(e.target.value)}
required
/>


<input
type="password"
placeholder="رمز عبور"
required
/>


<button>
ورود
</button>


</form>

</div>

</section>

)

}

export default Login;