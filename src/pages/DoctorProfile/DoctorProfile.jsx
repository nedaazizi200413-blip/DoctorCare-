import {useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import "./DoctorProfile.css";

function DoctorProfile(){

const {id}=useParams();

const [doctor,setDoctor]=useState(null);


useEffect(()=>{

axios.get(`http://localhost:5000/doctors/${id}`)
.then(res=>{
setDoctor(res.data);
})
.catch(err=>{
console.log(err);
});

},[id]);



if(!doctor){

return <h2 className="loading">در حال بارگذاری...</h2>;

}



return(

<section className="doctor-profile">


<div className="doctor-box">


<img 
src={doctor.image}
alt={doctor.name}
/>



<div className="doctor-info">


<h1>
{doctor.name}
</h1>



<h3>
{doctor.speciality}
</h3>



<p>
<strong>
شماره تماس:
</strong>

+93793457688

</p>



<p>
<strong>
ایمیل:
</strong>

{doctor.email || "info@doctorcare.com"}

</p>




<div className="info">

<i className="fa-solid fa-briefcase"></i>

{doctor.experience} سال تجربه

</div>




<div className="info">

<i className="fa-solid fa-location-dot"></i>

{doctor.city}

</div>




<div className="stars">

⭐⭐⭐⭐☆ {doctor.rating}

</div>




<Link 
to="/appointments"
className="book-btn"
>

رزرو نوبت

</Link>



</div>


</div>


</section>

)

}


export default DoctorProfile;