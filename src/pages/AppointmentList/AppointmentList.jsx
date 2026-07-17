import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./AppointmentList.css";
import Swal from "sweetalert2";

function AppointmentList(){

const [appointments,setAppointments]=useState([]);
const [doctors,setDoctors]=useState([]);



useEffect(()=>{

axios.get("https://doctorcare-api-jr6s.onrender.com/appointments")
.then(res=>{
setAppointments(res.data);
})
.catch(err=>{
console.log(err);
});


axios.get("https://doctorcare-api-jr6s.onrender.com/doctors")
.then(res=>{
setDoctors(res.data);
})
.catch(err=>{
console.log(err);
});


},[]);

const deleteAppointment=(id)=>{

Swal.fire({

title:"آیا مطمئن هستید؟",

text:"این نوبت حذف خواهد شد و قابل برگشت نیست.",

icon:"warning",
showCancelButton:true,
confirmButtonText:"بله، حذف شود",
cancelButtonText:"انصراف",
confirmButtonColor:"#ef4444",
cancelButtonColor:"#64748b",
background:"#ffffff",
color:"#1e293b"

}).then((result)=>{
if(result.isConfirmed){

axios.delete(
`https://doctorcare-api-jr6s.onrender.com/appointments/${id}`
)

.then(()=>{
setAppointments(
appointments.filter(a=>a.id!==id)
);
Swal.fire({
title:"حذف شد",
text:"نوبت با موفقیت حذف گردید.",
icon:"success",
confirmButtonText:"باشه",
confirmButtonColor:"#2563eb",
timer:2000,
timerProgressBar:true

});
});
}
});

};

return(

<section className="my-appointments">


<div className="list-header">

<i className="fa-solid fa-calendar-check"></i>

<h1>
نوبت‌های ثبت شده
</h1>

<p>
لیست نوبت‌های رزرو شده شما
</p>

</div>





<div className="appointment-grid">


{

appointments.length===0 ?


<div className="empty">

<i className="fa-solid fa-calendar-xmark"></i>

<p>
هیچ نوبتی ثبت نشده است
</p>

</div>


:


appointments.map(a=>{


const doctorInfo = doctors.find(
d=>String(d.id)===String(a.doctor)
);



return(


<div
className="appointment-card"
key={a.id}
>


<div className="doctor-header">


<img

src={
doctorInfo?.image ||
"/images/images/doctor.png"
}

alt={doctorInfo?.name}

/>


<div>

<h3>

<i className="fa-solid fa-user-doctor"></i>

{doctorInfo?.name || "داکتر"}

</h3>


<p>

<i className="fa-solid fa-stethoscope"></i>

{doctorInfo?.speciality || "تخصص مشخص نیست"}

</p>
</div>
</div>

<div className="patient-info">
<p>

<i className="fa-solid fa-user"></i>

{a.patient_name}

</p>
<p>

<i className="fa-solid fa-phone"></i>

{a.phone}

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

<i className="fa-solid fa-notes-medical"></i>

{a.reason || "بدون توضیحات"}

</p>

</div>

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
)
})
}
</div>
</section>
)
}
export default AppointmentList;