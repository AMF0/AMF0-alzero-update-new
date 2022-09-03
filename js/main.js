// Start Auto Function
moods();
language();
// For Get Scroll
window.scrollTo(0, window.localStorage.getItem("scrolling"));
document.onscroll = () => {
  window.localStorage.setItem("scrolling", window.scrollY);
};
// Start Function Mood
let dark = document.querySelector(".dark");
dark.onclick = () => {
  window.localStorage.setItem("--color-white", "black");
  window.localStorage.setItem("--color-black", "white");
  window.localStorage.setItem("--section-background", "#141414");
  window.localStorage.setItem("--color-fafa", "#0f0f0f");
  window.localStorage.setItem("--color-ddd", "#323131");
  window.localStorage.setItem("--shadow-box", "rgb(255 255 255/ 10%)");
  window.localStorage.setItem("--shadow-box-hover", "rgb(255 255 255/ 20%)");
  window.localStorage.setItem(
    "--slider-background",
    "rgba(255, 255, 255, 0.7)"
  );
  window.localStorage.setItem("--color-f3f3", "#1d1d1d");
  window.localStorage.setItem("--color-e4e4", "#4e4e4e");
  window.localStorage.setItem("--color-d5d5", "#5d5d5d");
  window.localStorage.setItem("--color-f9f9", "#9f9f9f");
  window.localStorage.setItem("--color-f6f6", "#6f6f6f");
  window.localStorage.setItem("--color-b-w-95", "rgb(0 0 0 / 95%)");
  moods();
};
let light = document.querySelector(".light");
light.onclick = () => {
  window.localStorage.setItem("--color-white", "white");
  window.localStorage.setItem("--color-black", "black");
  window.localStorage.setItem("--section-background", "#ececec");
  window.localStorage.setItem("--color-fafa", "#f0f0f0");
  window.localStorage.setItem("--color-ddd", "#ddd");
  window.localStorage.setItem("--shadow-box", "rgb(0 0 0/ 10%)");
  window.localStorage.setItem("--shadow-box-hover", "rgb(0 0 0/ 20%)");
  window.localStorage.setItem("--slider-background", "rgba(0, 0, 0, 0.7)");
  window.localStorage.setItem("--color-f3f3", "#f3f3f3");
  window.localStorage.setItem("--color-e4e4", "#e4e4e4");
  window.localStorage.setItem("--color-d5d5", "#d5d5d5");
  window.localStorage.setItem("--color-f9f9", "#f9f9f9");
  window.localStorage.setItem("--color-f6f6", "#f6f6f6");
  window.localStorage.setItem("--color-b-w-95", "rgb(255 255 255 / 95%)");

  moods();
};
function moods() {
  document.documentElement.style.setProperty(
    "--color-white",
    window.localStorage.getItem("--color-white")
  );
  document.documentElement.style.setProperty(
    "--color-black",
    window.localStorage.getItem("--color-black")
  );
  document.documentElement.style.setProperty(
    "--section-background",
    window.localStorage.getItem("--section-background")
  );
  document.documentElement.style.setProperty(
    "--color-fafa",
    window.localStorage.getItem("--color-fafa")
  );
  document.documentElement.style.setProperty(
    "--color-ddd",
    window.localStorage.getItem("--color-ddd")
  );
  document.documentElement.style.setProperty(
    "--shadow-box",
    window.localStorage.getItem("--shadow-box")
  );
  document.documentElement.style.setProperty(
    "--shadow-box-hover",
    window.localStorage.getItem("--shadow-box-hover")
  );
  document.documentElement.style.setProperty(
    "--slider-background",
    window.localStorage.getItem("--slider-background")
  );
  document.documentElement.style.setProperty(
    "--color-f3f3",
    window.localStorage.getItem("--color-f3f3")
  );
  document.documentElement.style.setProperty(
    "--color-e4e4",
    window.localStorage.getItem("--color-e4e4")
  );
  document.documentElement.style.setProperty(
    "--color-d5d5",
    window.localStorage.getItem("--color-d5d5")
  );
  document.documentElement.style.setProperty(
    "--color-f9f9",
    window.localStorage.getItem("--color-f9f9")
  );
  document.documentElement.style.setProperty(
    "--color-f6f6",
    window.localStorage.getItem("--color-f6f6")
  );
  document.documentElement.style.setProperty(
    "--color-b-w-95",
    window.localStorage.getItem("--color-b-w-95")
  );
}
// End Function Mood
// Start onclick Function to setting menu & other links menu
let setting = document.querySelector(".setting");
let settingMenu = document.querySelector(".setting .btns");
let megabtn = document.querySelector(".megabtn ");
let mega = document.querySelector(".megabtn .mega-menu");
setting.onclick = () => {
  mega.style.opacity = "0";
  settingMenu.style.opacity = "1";
  settingMenu.style.zIndex = "100";
  settingMenu.style.top = "calc(100% + 1px)";
  settingMenu.focus();
};
settingMenu.onmouseleave = () => {
  settingMenu.style.opacity = "0";
};
megabtn.onclick = () => {
  settingMenu.style.opacity = "0";
  mega.style.opacity = "1";
  mega.style.zIndex = "100";
  mega.style.top = "calc(100% + 1px)";
};
mega.onmouseleave = () => {
  mega.style.opacity = "0";
};
// End onclick Function to setting menu & other links menu
// Start Funcation Language
let en = document.querySelector(".en");
let ar = document.querySelector(".ar");
en.onclick = () => {
  window.localStorage.setItem("language", "en");
  language();
};
ar.onclick = () => {
  window.localStorage.setItem("language", "ar");
  language();
};
function language() {
  if (window.localStorage.getItem("language") == "ar") {
    document.querySelector(".logo").innerHTML = "الزيرو";
    document.querySelector(".articles-a").innerHTML = "مقالات";
    document.querySelector(".gallery-a").innerHTML = "صالة عرض";
    document.querySelector(".features-a").innerHTML = "الميزات";
    document.querySelector(".other-links-a").innerHTML = "روابط اخرى";
    document.querySelector(".testimonials-a").innerHTML =
      'التوصيات <i class="far fa-comments fa-fw"></i>';
    document.querySelector(".team-a").innerHTML =
      'فريق <i class="far fa-user fa-fw"></i>';
    document.querySelector(".services-a").innerHTML =
      'الخدمات <i class="far fa-building fa-fw"></i>';
    document.querySelector(".our-skills-a").innerHTML =
      'مهارتنا <i class="far fa-check-circle fa-fw"></i>';
    document.querySelector(".work-steps-a").innerHTML =
      'خطوات العمل <i class="far fa-clipboard fa-fw"></i>';
    document.querySelector(".events-a").innerHTML =
      'الأحداث <i class="far fa-calendar-alt fa-fw"></i>';
    document.querySelector(".pricing-a").innerHTML =
      'التسعير <i class="fas fa-server fa-fw"></i>';
    document.querySelector(".video-a").innerHTML =
      'فيديو <i class="far fa-play-circle fa-fw"></i>';
    document.querySelector(".stats-a").innerHTML =
      'احصائيات <i class="far fa-chart-bar fa-fw"></i>';
    document.querySelector(".discount-a").innerHTML =
      'الخصومات <i class="fas fa-percent fa-fw"></i>';
    document.querySelector(".dark").innerHTML = "مظلم";
    document.querySelector(".light").innerHTML = "فاتح";
    document.querySelector(".land-left h1").innerHTML = "مرحبا , فى عالم الزيرو";
    document.querySelector(".land-left p").innerHTML =
      "أنا هنا سأشارك كل شيء عن حياتي. كتب أنا أقرأ وألعاب وألعاب وقصص وأحداث";
    document.querySelector(".articles .articles-a").innerHTML = "المقالات";
    document.querySelectorAll(".articles .box .content h3").forEach((ele) => {
      ele.innerHTML = "عنوان";
    });
    document.querySelectorAll(".articles .box .content p").forEach((ele) => {
      ele.innerHTML = "اى كلام اى كلام اى كلام, اى كلام.وخلاص";
    });
    document
      .querySelectorAll(".articles .box .info .read-more-a")
      .forEach((ele) => {
        ele.innerHTML = "اقرا اكثر";
      });
    document.querySelector(".gallery .main-title").innerHTML = "صالة عرض";
    document.querySelector(".features .main-title").innerHTML = "الميزات";
    document.querySelector(".features .quality h2").innerHTML = "الجودة";
    document.querySelector(".features .time h2").innerHTML = "الوقت";
    document.querySelector(".features .passion h2").innerHTML = "شغف";
    document.querySelectorAll(".features .box p").forEach((ele) => {
      ele.innerHTML =
        "اى كلام اى كلام اى كلام اى كلام. اى كلام اى كلام اى كلام";
    });
    document.querySelectorAll(".features .box a").forEach((ele) => {
      ele.innerHTML = "اكثر";
    });
    document.querySelector(".testimonials .main-title").innerHTML = "التوصيات";
    document.querySelector("h3.mf").innerHTML = "محمد فراج";
    document.querySelector("h3.mi").innerHTML = "محمد ابراهيم";
    document.querySelector("h3.sn").innerHTML = "شادى نبيل";
    document.querySelector("h3.ah").innerHTML = "عمر الهنداوى";
    document.querySelector("h3.sa").innerHTML = "شريف اشرف";
    document.querySelector("h3.om").innerHTML = "اسامة محمد";
    document.querySelectorAll(".testimonials .title").forEach((ele) => {
      ele.innerHTML = "فول ساتك ديفولبر";
    });
    document.querySelectorAll(".testimonials p").forEach((ele) => {
      ele.innerHTML =
        "اى كلام اى كلام اى كلام اى كلام. اى كلام اى كلام, اى كلام اى كلام وخلاص";
    });
    document.querySelector(".team .main-title").innerHTML = "أعضاء الفريق";
    document.querySelectorAll(".team .box h3").forEach((ele) => {
      ele.innerHTML = "الاسم";
    });
    document.querySelectorAll(".team .box p").forEach((ele) => {
      ele.innerHTML = "وصف قصير بسيط";
    });
    document.querySelector(".services .main-title").innerHTML = "الخدمات";
    document.querySelector(".services .security").innerHTML = "حماية";
    document.querySelector(".services .fixing").innerHTML = "حل المشكلات";
    document.querySelector(".services .location").innerHTML = "موقعك";
    document.querySelector(".services .coding").innerHTML = "تشفير";
    document.querySelector(".services .security2").innerHTML = "حماية";
    document.querySelector(".services .marketing").innerHTML = "التسويق";
    document.querySelectorAll(".services .box .info a").forEach((ele) => {
      ele.innerHTML = "التفاصيل";
    });
    document.querySelector(".our-skills .main-title").innerHTML = "مهارتنا";
    document.querySelector(".work-steps .main-title").innerHTML =
      "كيف يكون العمل؟";
    document.querySelector(".work-steps .box .businessaanalysis").innerHTML =
      "تحليل العمل";
    document.querySelector(".work-steps .box .Architecture").innerHTML =
      "هندسة عامة";
    document.querySelector(".work-steps .box .developement").innerHTML =
      "التطوير";
    document.querySelectorAll(".work-steps .box p").forEach((ele) => {
      ele.innerHTML =
        "اى, كلام اى كلام اى كلام اى كلام. اى كلام اى كلام اى كلام اى كلام وخلاص";
    });
    document.querySelector(".events .main-title").innerHTML = "قائمة الاخبار";
    document.querySelector(".events .days + span").innerHTML = "الايام";
    document.querySelector(".events .hours + span").innerHTML = "الساعات";
    document.querySelector(".events .minutes + span").innerHTML = "الدقايق";
    document.querySelector(".events .seconds + span").innerHTML = "الثوانى";
    document.querySelector(".events .title").innerHTML =
      "فعالية أساتذة التكنولوجيا 2022";
    document.querySelector(".events p").innerHTML =
      "اى كلام اى كلام اى كلام اى كلام. اى كلام اى كلام اى كلام اى كلام اى كلام اى كلام اى كلام, اى كلام";
    document.querySelector(
      ".events .subscribe form input[type='email']"
    ).placeholder = "ادخل برايدك الالكتروتى";
    document.querySelector(
      ".events .subscribe form input[type='submit']"
    ).value = "اشتراك";
    document.querySelector(".pricing .main-title").innerHTML = "قائمة الاسعار";
    document.querySelectorAll(".pricing .time").forEach((ele) => {
      ele.innerHTML = "كل شهر";
    });
    document.querySelectorAll(".pricing a").forEach((ele) => {
      ele.innerHTML = "اختر القائمة";
    });
    document.querySelector(".box.bf .hdd").innerHTML =
      "مساحة قرص صلب 10 جيجا بايت";
    document.querySelector(".box.popular .hdd").innerHTML =
      "مساحة قرص صلب 20 جيجا بايت";
    document.querySelector(".box.bl .hdd").innerHTML =
      "مساحة قرص صلب 50 جيجا بايت";
    document.querySelector(".box.bf .email").innerHTML =
      "5 عناوين بريد إلكتروني";
    document.querySelector(".box.popular .email").innerHTML =
      "10 عناوين بريد إلكتروني";
    document.querySelector(".box.bl .email").innerHTML =
      "20 عناوين بريد إلكتروني";
    document.querySelector(".box.bf .subdomains").innerHTML = "2 نطاقات فرعية";
    document.querySelector(".box.popular .subdomains").innerHTML =
      "5 نطاقات فرعية";
    document.querySelector(".box.bl .subdomains").innerHTML = "10 نطاقات فرعية";
    document.querySelector(".box.bf .database").innerHTML = "4 قواعد بيانات";
    document.querySelector(".box.popular .database").innerHTML =
      "8 قواعد بيانات";
    document.querySelector(".box.bl .database").innerHTML = "20 قواعد بيانات";
    document.querySelector(".box.bf .support").innerHTML = "الدعم الأساسي";
    document.querySelector(".box.popular .support").innerHTML = "دعم متقدم";
    document.querySelector(".box.bl .support").innerHTML = "دعم احترافي";
    document.querySelector(".popular .label").innerHTML = "الأكثر شهرة";
    document.querySelector(".pricing .bf .title").innerHTML = "أساسي";
    document.querySelector(".pricing .popular .title").innerHTML = "متقدم";
    document.querySelector(".pricing .bl .title").innerHTML = "احترافي";
    //
    document.querySelector(".videos .main-title").innerHTML =
      "أهم مقاطع الفيديو";
    document.querySelector(".videos .name").innerHTML = "أهم مقاطع الفيديو";
    document.querySelector(".videos .one").innerHTML =
      "كيفية إنشاء المجال الفرعي<span>05:18</span></li>";
    document.querySelector(".videos .two").innerHTML =
      "اللعب مع DNS<span>03:18</span></li>";
    document.querySelector(".videos .three").innerHTML =
      "كل شيء عن المضيفين الظاهريين<span>05:25</span>";
    document.querySelector(".videos .four").innerHTML =
      "كيف تراقب موقع الويب الخاص بك<span>04:16</span>";
    document.querySelector(".videos .five").innerHTML =
      "مجهول ضرب الزعيم الأخير<span>07:48</span>";
    document.querySelector(".videos .six").innerHTML =
      "Ys Oath In Felghana نظرة عامة <span>03:12</span>";
    document.querySelector(".videos .seven").innerHTML =
      "سلسلة Ys جميع الألعاب تنتهي <span>08:10</span>";
    document.querySelector(".videos .preview .info").innerHTML =
      "كل شيء عن المضيفين الظاهريين";
    document.querySelector(".stats h2").innerHTML = "احصائياتنا الرائعة";
    document.querySelector(".stats .text.clients").innerHTML = "عملاء";
    document.querySelector(".stats .text.projects").innerHTML = "المشاريع";
    document.querySelector(".stats .text.countries").innerHTML = "الدول";
    document.querySelector(".stats .text.money").innerHTML = "فلوس";
    document.querySelector(".discount .image .content h2").innerHTML =
      "لدينا خصم";
    document.querySelector(".discount .image .content p").innerHTML =
      "اى كلام اى كلام اى كلام, اى كلام. اى كلام اى, كلام اى كلام اى, كلام اى كلام اى كلام اى. كلام اى كلام اى كلام اى كلام اى كلام.";
    document.querySelector(".discount .form .content h2").innerHTML = "طلب خصم";
    document.querySelector(
      ".discount .form .content input[name='name']"
    ).placeholder = "اسمك";
    document.querySelector(
      ".discount .form .content input[name='email']"
    ).placeholder = "بريدك الالكترونى";
    document.querySelector(
      ".discount .form .content input[name='mobile']"
    ).placeholder = "رقم هاتفك";
    document.querySelector(
      ".discount .form .content textarea[name='message']"
    ).placeholder = "أخبرنا عن احتياجاتك";
    document.querySelector(
      ".discount .form .content input[type='submit']"
    ).value = "إرسال";
    document.querySelector(".footer h3").innerHTML = "الزيرو";
    document.querySelector(".footer .text").innerHTML =
      "اى كلام, اى كلام اى كلام اى كلام. اى كلام اى, كلام اى كلام";
    document.querySelector(".footer .one a").innerHTML = "رابط مهم 1";
    document.querySelector(".footer .two a").innerHTML = "رابط مهم 2";
    document.querySelector(".footer .three a").innerHTML = "رابط مهم 3";
    document.querySelector(".footer .four a").innerHTML = "رابط مهم 4";
    document.querySelector(".footer .five a").innerHTML = "رابط مهم 5";
    document.querySelector(".footer .addresses").innerHTML =
      " مصر الزقازيق الشرقيه ";
    document.querySelector(".footer .clock").innerHTML =
      "ساعات العمل: من 10:00 إلى 18:00";
    document.querySelector(".footer .copyright").innerHTML =
      " مصنوع من <3 بواسطة الزيرو";
    phrases = [
      "مرحبك فى عالم الزيرو",
      
      "صناعه اسامة الزيرو",
      "حدثه بواسطه A.m",
    ];
    document.querySelector(".landing .land-left h1").style.borderLeft =
      "5px solid";
    document.querySelector(".landing .land-left h1").style.borderRight =
      "0px solid";
    document.querySelector(".landing .land-left h1").style.padding =
      "0px 0px 0px 10px";
  } else if (window.localStorage.getItem("language") == "en") {
    document.querySelector(".logo").innerHTML = "Elzero";
    document.querySelector(".articles-a").innerHTML = "Articles";
    document.querySelector(".gallery-a").innerHTML = "Gallery";
    document.querySelector(".features-a").innerHTML = "Features";
    document.querySelector(".other-links-a").innerHTML = "Other Links";
    document.querySelector(".testimonials-a").innerHTML =
      '<i class="far fa-comments fa-fw"></i> Testimonials';
    document.querySelector(".team-a").innerHTML =
      '<i class="far fa-user fa-fw"></i> Team';
    document.querySelector(".services-a").innerHTML =
      '<i class="far fa-building fa-fw"></i> Services';
    document.querySelector(".our-skills-a").innerHTML =
      '<i class="far fa-check-circle fa-fw"></i> Our Skills';
    document.querySelector(".work-steps-a").innerHTML =
      '<i class="far fa-clipboard fa-fw"></i> Work Steps';
    document.querySelector(".events-a").innerHTML =
      '<i class="far fa-calendar-alt fa-fw"></i> Events';
    document.querySelector(".pricing-a").innerHTML =
      '<i class="fas fa-server fa-fw"></i> Pricing';
    document.querySelector(".video-a").innerHTML =
      '<i class="far fa-play-circle fa-fw"></i> Video';
    document.querySelector(".stats-a").innerHTML =
      '<i class="far fa-chart-bar fa-fw"></i> Stats';
    document.querySelector(".discount-a").innerHTML =
      '<i class="fas fa-percent fa-fw"></i> Discount';
    document.querySelector(".dark").innerHTML = "Dark";
    document.querySelector(".light").innerHTML = "Light";
    document.querySelector(".land-left h1").innerHTML =
      "Welcome, To Elzero World";
    document.querySelector(".land-left p").innerHTML =
      "Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events";
    document.querySelector(".articles .articles-a").innerHTML = "Articles";
    document.querySelectorAll(".articles .box .content h3").forEach((ele) => {
      ele.innerHTML = "Test Title";
    });
    document.querySelectorAll(".articles .box .content p").forEach((ele) => {
      ele.innerHTML =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit";
    });
    document
      .querySelectorAll(".articles .box .info .read-more-a")
      .forEach((ele) => {
        ele.innerHTML = "Read More";
      });
    document.querySelector(".gallery .main-title").innerHTML = "Gallery";
    document.querySelector(".features .main-title").innerHTML = "Features";
    document.querySelector(".features .quality h2").innerHTML = "Quality";
    document.querySelector(".features .time h2").innerHTML = "Time";
    document.querySelector(".features .passion h2").innerHTML = "Passion";
    document.querySelectorAll(".features .box p").forEach((ele) => {
      ele.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima";
    });
    document.querySelectorAll(".features .box a").forEach((ele) => {
      ele.innerHTML = "More";
    });
    document.querySelector(".testimonials .main-title").innerHTML =
      "Testimonials";
    document.querySelector("h3.mf").innerHTML = "Mohamed Farag";
    document.querySelector("h3.mi").innerHTML = "Mohamed Ibrahim";
    document.querySelector("h3.sn").innerHTML = "Shady Nabil";
    document.querySelector("h3.ah").innerHTML = "Amr Hendawy";
    document.querySelector("h3.sa").innerHTML = "Sherief Ashraf";
    document.querySelector("h3.om").innerHTML = "Osama Mohamed";
    document.querySelectorAll(".testimonials .title").forEach((ele) => {
      ele.innerHTML = "Full Stack Developer";
    });
    document.querySelectorAll(".testimonials p").forEach((ele) => {
      ele.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus";
    });
    document.querySelector(".team .main-title").innerHTML = "أعضاء الفريق";
    document.querySelectorAll(".team .box h3").forEach((ele) => {
      ele.innerHTML = "الاسم";
    });
    document.querySelectorAll(".team .box p").forEach((ele) => {
      ele.innerHTML = "وصف قصير بسيط";
    });
    document.querySelector(".team .main-title").innerHTML = "Team Members";
    document.querySelectorAll(".team .box h3").forEach((ele) => {
      ele.innerHTML = "Name";
    });
    document.querySelectorAll(".team .box p").forEach((ele) => {
      ele.innerHTML = "Simple Short Description";
    });
    document.querySelector(".services .main-title").innerHTML = "Services";
    document.querySelector(".services .security").innerHTML = "Security";
    document.querySelector(".services .fixing").innerHTML = "Fixing Issues";
    document.querySelector(".services .location").innerHTML = "Location";
    document.querySelector(".services .coding").innerHTML = "Coding";
    document.querySelector(".services .security2").innerHTML = "Security";
    document.querySelector(".services .marketing").innerHTML = "Marketing";
    document.querySelectorAll(".services .box .info a").forEach((ele) => {
      ele.innerHTML = "Details";
    });
    document.querySelector(".our-skills .main-title").innerHTML = "Our Skills";
    document.querySelector(".work-steps .main-title").innerHTML =
      "HOW IT WORKS ?";
    document.querySelector(".work-steps .box .businessaanalysis").innerHTML =
      "Business Analysis";
    document.querySelector(".work-steps .box .Architecture").innerHTML =
      "Architecture";
    document.querySelector(".work-steps .box .developement").innerHTML =
      "Developement";
    document.querySelectorAll(".work-steps .box p").forEach((ele) => {
      ele.innerHTML =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel";
    });
    document.querySelector(".events .main-title").innerHTML = "LATEST EVENTS";
    document.querySelector(".events .days + span").innerHTML = "Days";
    document.querySelector(".events .hours + span").innerHTML = "Hours";
    document.querySelector(".events .minutes + span").innerHTML = "Minutes";
    document.querySelector(".events .seconds + span").innerHTML = "Seconds";
    document.querySelector(".events .title").innerHTML =
      "Tech Masters Event 2022";
    document.querySelector(".events p").innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro";
    document.querySelector(
      ".events .subscribe form input[type='email']"
    ).placeholder = "Enter Your Email";
    document.querySelector(
      ".events .subscribe form input[type='submit']"
    ).value = "Subscribe";
    document.querySelector(".pricing .main-title").innerHTML = "PRICING PLANS";
    document.querySelectorAll(".pricing .time").forEach((ele) => {
      ele.innerHTML = "Per Month";
    });
    document.querySelectorAll(".pricing a").forEach((ele) => {
      ele.innerHTML = "Choose Plan";
    });
    document.querySelector(".box.bf .hdd").innerHTML = "10GB HDD Space";
    document.querySelector(".box.popular .hdd").innerHTML = "20GB HDD Space";
    document.querySelector(".box.bl .hdd").innerHTML = "50GB HDD Space";
    document.querySelector(".box.bf .email").innerHTML = "5 Email Addresses";
    document.querySelector(".box.popular .email").innerHTML =
      "10 Email Addresses";
    document.querySelector(".box.bl .email").innerHTML = "20 Email Addresses";
    document.querySelector(".box.bf .subdomains").innerHTML = "2 Subdomains";
    document.querySelector(".box.popular .subdomains").innerHTML =
      "5 Subdomains";
    document.querySelector(".box.bl .subdomains").innerHTML = "10 Subdomains";
    document.querySelector(".box.bf .database").innerHTML = "4 Databases";
    document.querySelector(".box.popular .database").innerHTML = "8 Databases";
    document.querySelector(".box.bl .database").innerHTML = "20 Databases";
    document.querySelector(".box.bf .support").innerHTML = "Basic Support";
    document.querySelector(".box.popular .support").innerHTML =
      "Advanced Support";
    document.querySelector(".box.bl .support").innerHTML =
      "Professional Support";
    document.querySelector(".popular .label").innerHTML = "Most Popular";
    document.querySelector(".pricing .bf .title").innerHTML = "Basic";
    document.querySelector(".pricing .popular .title").innerHTML = "Advanced";
    document.querySelector(".pricing .bl .title").innerHTML = "Professional";
    //
    document.querySelector(".videos .main-title").innerHTML = "TOP VIDEOS";
    document.querySelector(".videos .name").innerHTML = "TOP VIDEOS";
    document.querySelector(".videos .one").innerHTML =
      "How To Create Sub Domain<span>05:18</span>";
    document.querySelector(".videos .two").innerHTML =
      "Playing With The DNS <span>03:18</span>";
    document.querySelector(".videos .three").innerHTML =
      "Everything About The Virtual Hosts <span>05:25</span>";
    document.querySelector(".videos .four").innerHTML =
      "How To Monitor Your Website <span>04:16</span>";
    document.querySelector(".videos .five").innerHTML =
      "Uncharted Beating The Last Boss <span>07:48</span>";
    document.querySelector(".videos .six").innerHTML =
      "Ys Oath In Felghana Overview <span>03:12</span>";
    document.querySelector(".videos .seven").innerHTML =
      "Ys Series All Games Ending <span>08:10</span>";
    document.querySelector(".videos .preview .info").innerHTML =
      "Everything About The Virtual Hosts";
    document.querySelector(".stats h2").innerHTML = "Our Awesome Stats";
    document.querySelector(".stats .text.clients").innerHTML = "Clients";
    document.querySelector(".stats .text.projects").innerHTML = "Projects";
    document.querySelector(".stats .text.countries").innerHTML = "Countries";
    document.querySelector(".stats .text.money").innerHTML = "Money";
    //
    document.querySelector(".discount .image .content h2").innerHTML =
      "We Have A Discount";
    document.querySelector(".discount .image .content p").innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.";
    document.querySelector(".discount .form .content h2").innerHTML =
      "Request A Discount";
    document.querySelector(
      ".discount .form .content input[name='name']"
    ).placeholder = "Your Name";
    document.querySelector(
      ".discount .form .content input[name='email']"
    ).placeholder = "Your Email";
    document.querySelector(
      ".discount .form .content input[name='mobile']"
    ).placeholder = "Your Mobile";
    document.querySelector(
      ".discount .form .content textarea[name='message']"
    ).placeholder = "Tell Us About Your Needs";
    document.querySelector(
      ".discount .form .content input[type='submit']"
    ).value = "Send";
    document.querySelector(".footer h3").innerHTML = "Elzero";
    document.querySelector(".footer .text").innerHTML =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur";
    document.querySelector(".footer .one a").innerHTML = "Important Link 1";
    document.querySelector(".footer .two a").innerHTML = "Important Link 2";
    document.querySelector(".footer .three a").innerHTML = "Important Link 3";
    document.querySelector(".footer .four a").innerHTML = "Important Link 4";
    document.querySelector(".footer .five a").innerHTML = "Important Link 5";
    document.querySelector(".footer .addresses").innerHTML =
      "Egypt, New Damietta, Almarkazia";
    document.querySelector(".footer .clock").innerHTML =
      "Business Hours: From 10:00 To 18:00";
    document.querySelector(".footer .copyright").innerHTML =
      "Made With <3 By Elzero";
    phrases = [
      "Welcome To Elzero World",
     
      "Made With Osama Elzero",
      "Update With Ammar.m",
    ];
    document.querySelector(".landing .land-left h1").style.borderRight =
      "5px solid";
    document.querySelector(".landing .land-left h1").style.borderLeft =
      "0px solid";
    document.querySelector(".landing .land-left h1").style.padding =
      "0px 10px 0px 0px";
  }
}
// End Funcation Language
// Start btn Scrolling
document.querySelector(".scrolling").onclick = () => {
  window.scrollTo(0, 0);
};
// End btn Scrolling
// Start Popup slider
let numImg = 0;
document.querySelectorAll(".gallery .box").forEach((ele, i) => {
  ele.onclick = () => {
    i += 1;
    numImg = i;
    document.querySelector(".silder-gallery").style.display = "flex";
    document.querySelector(".silder-gallery").style.width = "100%";
    document.querySelector(".silder-gallery").style.height = "100%";
    document.querySelector(".silder-gallery").style.opacity = "1";
    document.querySelector(
      ".images-silder"
    ).innerHTML = `<img src="/images/gallery-0${i}.png" alt="" />`;
  };
});
document.querySelector(".silder-gallery .close-slider").onclick = () => {
  document.querySelector(".silder-gallery").style.display = "none";
};
document.querySelector(".silder-gallery .silder .right").onclick = () => {
  if (numImg <= 5) {
    numImg += 1;
  }
  document.querySelector(
    ".images-silder"
  ).innerHTML = `<img src="/images/gallery-0${numImg}.png" alt="" />`;
};
document.querySelector(".silder-gallery .silder .left").onclick = () => {
  if (numImg >= 2) {
    numImg -= 1;
  }

  document.querySelector(
    ".images-silder"
  ).innerHTML = `<img src="/images/gallery-0${numImg}.png" alt="" />`;
};
// End Popup slider
// Start Text Landing
const textDisplay = document.querySelector(".writer");

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = 50;
  const normalSpeed = 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
loop();
// End Text Landing
// Start Animation Skills
let ourSkills = document.getElementById("our-skills");
let spansp = document.querySelectorAll(".the-progress span");
window.addEventListener("scroll", () => {
  if (this.pageYOffset >= ourSkills.offsetTop) {
    spansp.forEach((ele) => {
      ele.style.width = ele.getAttribute("data-width");
    });
  }
});
// End Animation Skills
// Start loop Stats
let statsScroll = document.querySelector(".stats");
let spansStats = document.querySelectorAll(".stats .number");
window.onscroll = () => {
  if (this.pageYOffset >= statsScroll.offsetTop) {
    spansStats.forEach((nnn) => {
      startCount(nnn);
    });
  }
};

function startCount(el) {
  let goal = el.getAttribute("goal");
  let count = setInterval(() => {
    if (Number(el.textContent) == goal) {
      clearInterval(count);
    } else {
      el.textContent++;
    }
  }, 2000 / goal);
}
// Start loop Stats
//Start Loading
let loading = document.querySelector(".loading");
window.onload = () => {
  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.display = "none";
  }, 1000);
};
//
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//End Loading
