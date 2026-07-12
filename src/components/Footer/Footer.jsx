import "./Footer.css";

function Footer(){
return(
<footer className="footer">
<div className="footer-container">

<div className="footer-box footer-about">
<h3>
DoctorCare
<i className="fa-solid fa-heart-pulse"></i>
</h3>

<p>
پلتفرم آنلاین نوبت‌دهی داکتران برای دسترسی سریع، آسان و مطمئن به خدمات صحی.
</p>

<div className="social-icons">
<a href="#"><i className="fa-brands fa-facebook"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
<a href="#"><i className="fa-brands fa-twitter"></i></a>
</div>

</div>


<div className="footer-box footer-services">

<h4>
خدمات ما
</h4>

<p>
<i className="fa-solid fa-user-doctor"></i>
معرفی داکتران متخصص
</p>

<p>
<i className="fa-solid fa-calendar-check"></i>
رزرو آنلاین نوبت
</p>

<p>
<i className="fa-solid fa-hospital"></i>
دسترسی به خدمات صحی
</p>

<p>
<i className="fa-solid fa-shield-heart"></i>
حفظ امنیت اطلاعات
</p>

</div>


<div className="footer-box footer-contact">

<h4>
تماس با ما
</h4>

<p>
<i className="fa-solid fa-phone"></i>
+93 700 000 000
</p>

<p>
<i className="fa-solid fa-location-dot"></i>
کابل، افغانستان
</p>

<p>
<i className="fa-solid fa-envelope"></i>
info@doctorcare.com
</p>

<p>
<i className="fa-solid fa-clock"></i>
پشتیبانی 24/7
</p>

</div>


</div>


<div className="footer-bottom">
<p>
© 2026 DoctorCare | تمامی حقوق محفوظ است
</p>
</div>


</footer>
)
}

export default Footer;