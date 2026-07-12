import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import AppointmentList from "./pages/AppointmentList/AppointmentList";
import EditAppointment from "./pages/EditAppointment/EditAppointment";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login/Login";
function App(){

return(
<>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/appointments" element={<Appointment/>}/>
<Route 
path="/appointmentList"
element={
<ProtectedRoute>
<AppointmentList/>
</ProtectedRoute>
}
/>
<Route path="/edit/:id" element={<EditAppointment/>}/>
<Route path="/doctor/:id" element={<DoctorProfile/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
<Footer/>
<BottomNav/>
</>
)

}

export default App;


