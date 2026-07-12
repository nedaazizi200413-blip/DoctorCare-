import {useEffect,useState} from "react";
import axios from "axios";
import "./Appointment.css";

function Appointment(){

const [doctors,setDoctors]=useState([]);

const [form,setForm]=useState({
patient_name:"",
phone:"",
doctor:"",
doctorName:"",
speciality:"",
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

const newAppointment={
patient_name:form.patient_name,
phone:form.phone,
doctor:form.doctor,
doctorName:selectedDoctor ? selectedDoctor.name : "",
speciality:selectedDoctor ? selectedDoctor.speciality : "",
date:form.date,
time:form.time,
reason:form.reason
};

axios.post(
"https://doctorcare-api-jr6s.onrender.com/appointments",
newAppointment
)
.then(()=>{
alert("نوبت شما ثبت شد");

setForm({
patient_name:"",
phone:"",
doctor:"",
doctorName:"",
speciality:"",
date:"",
time:"",
reason:""
});
})
.catch(err=>{
console.log(err);
});

};

return(
<section className="appointment">

<h1>رزرو نوبت داکتر</h1>

<form onSubmit={handleSubmit}>

<input
type="text"
name="patient_name"
placeholder="نام مریض"
value={form.patient_name}
onChange={handleChange}
required
/>

<input
type="text"
name="phone"
placeholder="شماره تماس"
value={form.phone}
onChange={handleChange}
required
/>

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

<input
type="date"
name="date"
value={form.date}
onChange={handleChange}
required
/>

<input
type="time"
name="time"
value={form.time}
onChange={handleChange}
required
/>

<textarea
name="reason"
rows="4"
placeholder="علت مراجعه"
value={form.reason}
onChange={handleChange}
/>

<button type="submit">
ثبت نوبت
</button>

</form>

</section>
)

}

export default Appointment;