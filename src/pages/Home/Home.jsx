import {useEffect,useState} from "react";
import axios from "axios";
import "./Home.css";

function Home(){

const [doctors,setDoctors]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/doctors")
.then(res=>{
console.log(res.data);
setDoctors(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);

const specialities=[
"👶 اطفال",
"❤️ قلب",
"🦷 دندان",
"👁️ چشم",
"🦴 استخوان",
"🧠 اعصاب",
"🫁 ریه",
"🩺 داخله",
"👂 گوش و گلو",
"🧘 روانشناسی",
"🏥 جراحی عمومی",
"🧴 پوست و زیبایی"
];

return(
<>
<section className="hero">
<div className="hero-image">
<img src="/images/images/doctor.png" className="hero-img" alt="doctor"/>
</div>
<div className="hero-text">
<h1>سیستم آنلاین نوبت دهی داکتران</h1>
<p>بهترین داکتران را پیدا کنید و در چند دقیقه نوبت خود را رزرو نمایید.</p>
<div className="search-box">
<input placeholder="نام داکتر یا تخصص"/>
<button>جستجو</button>
</div>
</div>
</section>

<section className="specialities">
{
specialities.map((item,index)=>(
<div className="speciality-box" key={index}>
{item}
</div>
))
}
</section>

<section className="popular-doctors">
<h2>داکتران محبوب</h2>
<div className="popular-grid">
{
doctors.slice(0,3).map(doctor=>(
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
<a href={`/doctor/${doctor.id}`}>
مشاهده پروفایل
</a>
</div>
))
}
</div>
</section>

<section className="other-doctors">
<h2>سایر داکتران</h2>

<div className="doctor-list">

{
doctors.map(doctor=>(

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

<a href={`/doctor/${doctor.id}`}>
بیشتر
</a>

</div>

))

}

</div>

</section>
</>
)
}

export default Home;