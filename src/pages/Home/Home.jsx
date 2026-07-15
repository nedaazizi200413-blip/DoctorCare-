import {Link} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import "./Home.css";

function Home(){

const [doctors,setDoctors]=useState([]);
const [search, setSearch] = useState("");
useEffect(()=>{

axios.get("https://doctorcare-api-jr6s.onrender.com/doctors")
.then(res=>{
console.log(res.data);
setDoctors(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);

const specialities=[
{
icon:"fa-solid fa-baby",
name:"اطفال"
},
{
icon:"fa-solid fa-heart-pulse",
name:"قلب"
},
{
icon:"fa-solid fa-tooth",
name:"دندان"
},
{
icon:"fa-solid fa-eye",
name:"چشم"
},
{
icon:"fa-solid fa-bone",
name:"استخوان"
},
{
icon:"fa-solid fa-brain",
name:"اعصاب"
},
{
icon:"fa-solid fa-lungs",
name:"ریه"
},
{
icon:"fa-solid fa-stethoscope",
name:"داخله"
},
{
icon:"fa-solid fa-ear-listen",
name:"گوش و گلو"
},
{
icon:"fa-solid fa-face-smile",
name:"روانشناسی"
},
{
icon:"fa-solid fa-user-doctor",
name:"جراحی"
},
{
icon:"fa-solid fa-spa",
name:"پوست و زیبایی"
}
];

 const filteredDoctors = doctors.filter((doctor) =>
  doctor.name.toLowerCase().includes(search.toLowerCase()) ||
  doctor.speciality.toLowerCase().includes(search.toLowerCase())
);
return(
<>
 <section className="hero">


<div className="hero-image-box">

<div className="circle"></div>

<img 
  src="./images/images/doctor.png" 
  className="hero-img" 
  alt="doctor"
/>


<div className="floating-card">

<i className="fa-solid fa-user-doctor"></i>

<div>
<b>داکتر متخصص</b>
<p>با تجربه و قابل اعتماد</p>
</div>

</div>

</div>



<div className="hero-content">

<span className="hero-badge">
<i className="fa-solid fa-heart-pulse"></i>
خدمات صحی آنلاین
</span>


<h1>
بهترین داکتران را
<br/>
در چند دقیقه پیدا کنید
</h1>


<p>
با DoctorCare به داکتران متخصص دسترسی پیدا کنید
و نوبت خود را سریع و آسان رزرو نمایید.
</p>


<div className="hero-search">

<input
type="text"
placeholder="جستجوی نام داکتر یا تخصص"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button>
<i className="fa-solid fa-magnifying-glass"></i>
جستجو
</button>

</div>


</div>


</section>

<section className="specialities">
{
specialities.map((item,index)=>(
<div className="speciality-box" key={index}>

<i className={item.icon}></i>

<h3>
{item.name}
</h3>

</div>
))
}
</section>

<section className="popular-doctors">
<h2>داکتران محبوب</h2>
<div className="popular-grid">
{
filteredDoctors.slice(0,3).map(doctor=>(
<div className="doctor-card" key={doctor.id}>
<img src={doctor.image} alt={doctor.name}/>
<h3>{doctor.name}</h3>
<p>{doctor.speciality}</p>
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
<Link to={`/doctor/${doctor.id}`}>
مشاهده پروفایل
</Link>
</div>
))
}
</div>
</section>

<section className="other-doctors">
<h2>سایر داکتران</h2>

<div className="doctor-list">

{
filteredDoctors.map(doctor=>(

<div className="doctor-row" key={doctor.id}>

<img 
src={doctor.image}
alt={doctor.name}
/>

<div className="doctor-details">

<h4>
{doctor.name}
</h4>

<p>
{doctor.speciality}
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

</div>

<Link to={`/doctor/${doctor.id}`}>
مشاهده پروفایل
</Link>

</div>

))

}

</div>

</section>
</>
)
}

export default Home;