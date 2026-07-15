import "./Contact.css";

function Contact(){
return(
<>
<section className="contact-hero">
<div className="contact-hero-text">
<span>
<i className="fa-solid fa-heart-pulse"></i>
DoctorCare
</span>

<h1>
همیشه در کنار سلامت شما هستیم
</h1>

<p>
برای دریافت معلومات، رزرو نوبت و ارتباط با تیم DoctorCare
با ما تماس بگیرید. ما آماده پاسخگویی به شما هستیم.
</p>

</div>

<div className="contact-hero-icon">
<i className="fa-solid fa-headset"></i>
</div>

</section>


<section className="contact-page">


<h2>
راه‌های ارتباط با ما
</h2>


<div className="contact-container">
<div className="contact-box">
<i className="fa-solid fa-phone"></i>

<div>
<h3>
تماس تلفنی
</h3>

<p>
+93 700 000 000
</p>
</div>
</div>
<div className="contact-box">

<i className="fa-solid fa-envelope"></i>

<div>

<h3>
ایمیل
</h3>

<p>
info@doctorcare.com
</p>

</div>

</div>

<div className="contact-box">
<i className="fa-solid fa-location-dot"></i>

<div>

<h3>
آدرس
</h3>

<p>
کابل، افغانستان
</p>

</div>

</div>


</div>


<section className="working">
<div className="working-box">
<i className="fa-solid fa-clock"></i>

<h3>
ساعات کاری
</h3>

<p>
شنبه تا پنجشنبه
</p>

<p>
8 صبح - 8 شب
</p>

</div>
<div className="working-box">
<i className="fa-solid fa-user-doctor"></i>

<h3>
پشتیبانی صحی
</h3>

<p>
راهنمایی در انتخاب داکتر و رزرو نوبت
</p>

</div>
<div className="working-box">
<i className="fa-solid fa-shield-heart"></i>

<h3>
اعتماد و امنیت
</h3>

<p>
محافظت از اطلاعات کاربران
</p>

</div>
</section>
<div className="contact-form">

<h2>
ارسال پیام
</h2>

<form>
<input 
type="text"
placeholder="نام کامل"
/>
<input
type="email"
placeholder="ایمیل"
/>

<input
type="text"
placeholder="شماره تماس"
/>


<textarea
rows="6"
placeholder="پیام خود را بنویسید"
></textarea>
<button>

<i className="fa-solid fa-paper-plane"></i>

ارسال پیام

</button>
</form>

</div>
<section className="faq">

<h2>
سوالات متداول
</h2>


<details className="faq-item">

<summary>
<i className="fa-solid fa-circle-question"></i>
چگونه نوبت داکتر را رزرو کنم؟
</summary>

<p>
ابتدا داکتر مورد نظر خود را از لیست انتخاب کنید، سپس روی گزینه رزرو نوبت کلیک کرده و معلومات لازم را وارد نمایید.
</p>

</details>


<details className="faq-item">

<summary>
<i className="fa-solid fa-circle-question"></i>
آیا می‌توانم داکتر مورد نظر خود را انتخاب کنم؟
</summary>

<p>
بلی، شما می‌توانید بر اساس تخصص، شهر، تجربه و امتیاز داکتر، بهترین گزینه را انتخاب کنید.
</p>

</details>


<details className="faq-item">

<summary>
<i className="fa-solid fa-circle-question"></i>
چگونه با تیم پشتیبانی تماس بگیرم؟
</summary>

<p>
می‌توانید از طریق شماره تماس، ایمیل یا فورم ارتباطی موجود در صفحه تماس با ما با تیم DoctorCare ارتباط برقرار کنید.
</p>

</details>


<details className="faq-item">

<summary>
<i className="fa-solid fa-circle-question"></i>
آیا معلومات بیماران محفوظ است؟
</summary>

<p>
بلی، DoctorCare تلاش می‌کند معلومات کاربران را با رعایت اصول امنیتی محافظت نماید.
</p>

</details>


</section>



</section>

</>
)
}

export default Contact;