import "./About.css";

function About(){

const steps=[
{
icon:"fa-solid fa-magnifying-glass",
title:"جستجوی داکتر",
text:"داکتر مورد نظر خود را بر اساس تخصص و شهر پیدا کنید."
},
{
icon:"fa-solid fa-calendar-check",
title:"رزرو نوبت",
text:"زمان مناسب را انتخاب کرده و نوبت خود را آنلاین ثبت کنید."
},
{
icon:"fa-solid fa-user-doctor",
title:"مراجعه به داکتر",
text:"در زمان تعیین شده به داکتر مراجعه نمایید."
}
];


const features=[
{
icon:"fa-solid fa-user-doctor",
title:"داکتران متخصص",
text:"دسترسی آسان به داکتران با تجربه در رشته‌های مختلف."
},
{
icon:"fa-solid fa-clock",
title:"صرفه جویی در زمان",
text:"بدون انتظار طولانی و مراجعه‌های غیرضروری."
},
{
icon:"fa-solid fa-shield-heart",
title:"امنیت اطلاعات",
text:"اطلاعات بیماران با امنیت کامل نگهداری می‌شود."
},
{
icon:"fa-solid fa-mobile-screen",
title:"دسترسی آسان",
text:"رزرو نوبت از هرجا و در هر زمان."
}
];


return(

<>

<section className="about-hero">

<div className="about-text">

<span className="badge">
<i className="fa-solid fa-heart-pulse"></i>
DoctorCare
</span>

<h1>
سلامت شما، اولویت ما است
</h1>

<p>
DoctorCare یک سیستم آنلاین مدرن برای ارتباط میان بیماران و داکتران متخصص است.
ما تلاش می‌کنیم خدمات صحی را سریع‌تر، ساده‌تر و قابل دسترس‌تر بسازیم.
</p>

<a href="/appointments" className="about-btn">
<i className="fa-solid fa-calendar-check"></i>
رزرو نوبت
</a>

</div>





</section>



<section className="mission">

<h2>
ماموریت ما
</h2>

<p>
ایجاد یک پل مطمئن میان بیماران و داکتران متخصص برای دریافت خدمات صحی با کیفیت.
</p>

</section>



<section className="how-work">

<h2>
چگونه کار می‌کند؟
</h2>


<div className="steps">

{
steps.map((step,index)=>(

<div className="step-card" key={index}>

<i className={step.icon}></i>

<h3>
{step.title}
</h3>

<p>
{step.text}
</p>

</div>

))
}

</div>

</section>



<section className="features">

<h2>
چرا DoctorCare؟
</h2>


<div className="feature-container">

{
features.map((item,index)=>(

<div className="feature-card" key={index}>

<i className={item.icon}></i>

<h3>
{item.title}
</h3>

<p>
{item.text}
</p>

</div>

))
}

</div>

</section>



<section className="stats">

<div className="stat-box">
<h2>500+</h2>
<p>داکتر متخصص</p>
</div>

<div className="stat-box">
<h2>10K+</h2>
<p>نوبت ثبت شده</p>
</div>

<div className="stat-box">
<h2>95%</h2>
<p>رضایت کاربران</p>
</div>

<div className="stat-box">
<h2>24/7</h2>
<p>خدمات آنلاین</p>
</div>

</section>



<section className="about-cta">

<h2>
آماده دریافت خدمات صحی بهتر هستید؟
</h2>

<p>
همین حالا داکتر مورد نظر خود را پیدا کنید.
</p>

<a href="/appointments">
شروع رزرو نوبت
</a>

</section>


</>

)

}

export default About;