import {Link} from "react-router-dom";
import "./Navbar.css";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
function Navbar(){
const {user,logout}=useContext(AuthContext);

const navigate=useNavigate();
return(

<header className="header">

<nav className="navbar">

<div className="logo">
DoctorCare
<i className="fa-solid fa-heart-pulse"></i>
</div>


<ul className="nav-links">

<li><Link to="/">خانه</Link></li>

<li><Link to="/appointmentList">نوبت های من</Link></li>

<li><Link to="/appointments">‌رزرو نوبت</Link></li>

<li><Link to="/about">درباره ما</Link></li>

<li><Link to="/contact">تماس با ما</Link></li>

</ul>


{
user?

<button 
className="login-btn"
onClick={()=>{

logout();
navigate("/");

}}
>
خروج
</button>

:

<Link 
to="/login"
className="login-btn"
>
ورود
</Link>

}


</nav>

</header>

)

}

export default Navbar;