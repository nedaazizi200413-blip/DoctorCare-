import {useEffect,useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Appointment.css";

function Appointment(){

const [doctors,setDoctors]=useState([]);

const [form,setForm]=useState({
patient_name:"",
phone:"",
doctor:"",
date:"",
time:"",
reason:""
});


useEffect(()=>{

axios.get("https://doctorcare-api-jr6s.onrender.com/doctors")
.then(res=>{
setDoctors(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);



const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};



const handleSubmit=(e)=>{

e.preventDefault();

const selectedDoctor=doctors.find(
d=>String(d.id)===String(form.doctor)
);


axios.post(
"https://doctorcare-api-jr6s.onrender.com/appointments",
{
...form,
doctorName:selectedDoctor?.name || "",
speciality:selectedDoctor?.speciality || ""
}
)
.then(()=>{

Swal.fire({
title:"نوبت ثبت شد",
text:"رزرو شما موفقانه انجام شد",
icon:"success",
confirmButtonColor:"#2563eb"
});


setForm({
patient_name:"",
phone:"",
doctor:"",
date:"",
time:"",
reason:""
});


})


.catch(()=>{

Swal.fire({
title:"خطا",
text:"ثبت نوبت انجام نشد",
icon:"error"
});

});


};



return(
<section className="appointment">

<div className="appointment-header">

<i className="fa-solid fa-calendar-check"></i>

<h1>
رزرو نوبت داکتر
</h1>

<p>
زمان مناسب خود را انتخاب کنید و نوبت خود را آنلاین ثبت نمایید.
</p>

</div>


<form onSubmit={handleSubmit}>


<div className="input-box">

<i className="fa-solid fa-user"></i>

<input
type="text"
name="patient_name"
placeholder="نام مریض"
value={form.patient_name}
onChange={handleChange}
required
/>

</div>


<div className="input-box">

<i className="fa-solid fa-phone"></i>

<input
type="tel"
name="phone"
placeholder="شماره تماس"
value={form.phone}
onChange={(e)=>{

setForm({
...form,
phone:e.target.value.replace(/\D/g,"")
});

}}
required
/>

</div>


<div className="input-box">

<i className="fa-solid fa-user-doctor"></i>

<select
name="doctor"
value={form.doctor}
onChange={handleChange}
required
>

<option value="">
انتخاب داکتر
</option>

{
doctors.map(doctor=>(
<option
key={doctor.id}
value={doctor.id}
>
{doctor.name} - {doctor.speciality}
</option>
))
}

</select>

</div>


<div className="input-box">

<i className="fa-solid fa-calendar-days"></i>

<input
type="date"
name="date"
value={form.date}
onChange={handleChange}
required
/>

</div>


<div className="input-box">

<i className="fa-solid fa-clock"></i>

<input
type="time"
name="time"
value={form.time}
onChange={handleChange}
required
/>

</div>


<div className="input-box textarea">

<i className="fa-solid fa-message"></i>

<textarea
name="reason"
placeholder="علت مراجعه"
value={form.reason}
onChange={handleChange}
/>

</div>


<button type="submit">

<i className="fa-solid fa-calendar-check"></i>

ثبت نوبت

</button>


</form>

</section>
)

}

export default Appointment;