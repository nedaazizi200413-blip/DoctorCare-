import {Link} from "react-router-dom";
import "./BottomNav.css";

function BottomNav(){

return(

<div className="bottom-nav">

<Link to="/">
<i className="fa-solid fa-house"></i>
<span>خانه</span>
</Link>


<Link to="/about">
<i className="fa-solid fa-circle-info"></i>
<span>درباره ما</span>
</Link>


<Link to="/contact">
<i className="fa-solid fa-phone"></i>
<span>تماس</span>
</Link>


<Link to="/appointments">
<i className="fa-solid fa-calendar-check"></i>
<span>رزرو نوبت</span>
</Link>

<Link to="/appointmentList">
<i className="fa-solid fa-clock"></i>
<span>نوبت‌ها </span>
</Link>

</div>
)
}
export default BottomNav;