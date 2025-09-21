// تخصيص: علشان القائمة تفتح من جوا زر الهامبرجر (بدون navbar-expand-lg)
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.getElementById("navbarNav");
  const navList = navbarNav.querySelector(".navbar-nav");

  // إزالة الكلاسات الافتراضية لبوستراب علشان نتحكم بالعرض يدويًا
  navbarNav.classList.remove("collapse");
  navList.classList.remove("navbar-nav");

  // إعادة تخصيص
  navList.classList.add("navbar-nav-custom");
  navList.style.display = "none";

  // عند الضغط على الهامبرجر
  toggler.addEventListener("click", function () {
    if (navList.style.display === "block") {
      navList.style.display = "none";
    } else {
      navList.style.display = "block";
    }
  });
    navbarNav.addEventListener("click", function () {
      navList.style.display = "none";
  });
});

document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector(".gradient-btn");
  btn.innerHTML = "جارٍ الإرسال...";
  btn.disabled = true;

  // هنا تقدر تضيف كود إرسال حقيقي (AJAX)
  setTimeout(() => {
    alert("تم إرسال طلبك! سنعاود الاتصال بك قريبًا.");
    btn.innerHTML = "🚀 احجز استشارة مجانية";
    btn.disabled = false;
    this.reset();
  }, 1500);
});
document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('navbar-transparent');
        }
    });
});




