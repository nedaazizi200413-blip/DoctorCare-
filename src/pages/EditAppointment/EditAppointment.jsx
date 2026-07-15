import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./EditAppointment.css";

function EditAppointment(){
const {id}=useParams();
const navigate=useNavigate();
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
axios.get(`https://doctorcare-api-jr6s.onrender.com/appointments/${id}`)
.then(res=>{
setForm(res.data);
});
axios.get("https://doctorcare-api-jr6s.onrender.com/doctors")
.then(res=>{
setDoctors(res.data);
});
},[id]);
const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};
const handleDoctor=(e)=>{
const id=e.target.value;
const doctor=doctors.find(d=>d.id===Number(id));
setForm({
...form,
doctor:id,
doctorName:doctor?.name || "",
speciality:doctor?.speciality || ""
});
};
const handleSubmit=(e)=>{
e.preventDefault();
axios.put(
`https://doctorcare-api-jr6s.onrender.com/appointments/${id}`,
form
)
.then(()=>{

Swal.fire({
title:"نوبت با موفقیت ویرایش شد",
text:"اطلاعات نوبت شما بروزرسانی گردید.",
icon:"success",
confirmButtonText:"باشه",
confirmButtonColor:"#2563eb",
background:"#ffffff",
color:"#1e293b",
timer:2500,
timerProgressBar:true
});

setTimeout(()=>{
navigate("/appointments");
},2500);

})
.catch(()=>{

Swal.fire({
title:"خطا",
text:"ویرایش نوبت انجام نشد. دوباره تلاش کنید.",
icon:"error",
confirmButtonText:"باشه",
confirmButtonColor:"#ef4444"
});

});
};
return(
<section className="edit-appointment">
<h2>ویرایش نوبت</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
name="patient_name"
placeholder="نام مریض"
value={form.patient_name}
onChange={handleChange}
/>
<input
type="text"
name="phone"
placeholder="شماره تماس"
value={form.phone}
onChange={handleChange}
/>
<select
value={form.doctor}
onChange={handleDoctor}
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
/>
<input
type="time"
name="time"
value={form.time}
onChange={handleChange}
/>
<textarea
name="reason"
placeholder="علت مراجعه"
value={form.reason}
onChange={handleChange}
/>
<button type="submit">
آپدیت نوبت
</button>
</form>
</section>
)
}
export default EditAppointment;