import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./AppointmentList.css";

function AppointmentList(){

const [appointments,setAppointments]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/appointments")
.then(res=>{
setAppointments(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);


const deleteAppointment=(id)=>{

if(window.confirm("آیا مطمئن هستید؟")){

axios.delete(
`http://localhost:5000/appointments/${id}`
)
.then(()=>{
setAppointments(
appointments.filter(a=>a.id!==id)
);
});

}

};


return(

<section className="my-appointments">

<h1 className="page-title">
نوبت‌های ثبت شده
</h1>

<div className="appointment-grid">

{
appointments.length===0?

<p>
هیچ نوبتی ثبت نشده است
</p>

:

appointments.map(a=>(

<div
className="appointment-card"
key={a.id}
>

<h3>
<i className="fa-solid fa-user"></i>
{a.patient_name}
</h3>

<p>
<i className="fa-solid fa-user-doctor"></i>
{a.doctorName}
</p>

<p>
<i className="fa-solid fa-stethoscope"></i>
{a.speciality}
</p>

<p>
<i className="fa-solid fa-calendar-days"></i>
{a.date}
</p>

<p>
<i className="fa-solid fa-clock"></i>
{a.time}
</p>

<p>
<i className="fa-solid fa-phone"></i>
{a.phone}
</p>

<p>
<i className="fa-solid fa-notes-medical"></i>
{a.reason}
</p>

<div className="action-buttons">

<Link
to={`/edit/${a.id}`}
className="btn btn-edit"
>
<i className="fa-solid fa-pen"></i>
ویرایش
</Link>

<button
className="btn btn-delete"
onClick={()=>deleteAppointment(a.id)}
>
<i className="fa-solid fa-trash"></i>
حذف
</button>

</div>

</div>

))

}

</div>

</section>

)

}

export default AppointmentList;