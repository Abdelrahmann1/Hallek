// // تخصيص: علشان القائمة تفتح من جوا زر الهامبرجر (بدون navbar-expand-lg)
// document.addEventListener("DOMContentLoaded", function () {
//   const toggler = document.querySelector(".navbar-toggler");
//   const navbarNav = document.getElementById("navbarNav");
//   const navList = navbarNav.querySelector(".navbar-nav");

//   // إزالة الكلاسات الافتراضية لبوستراب
//   // navbarNav.classList.remove("collapse");
//   // navList.classList.remove("navbar-nav");

//   // إعادة تخصيص
//   navList.classList.add("navbar-nav-custom");
//   navList.style.display = "none";

//   // عند الضغط على الهامبرجر
//   toggler.addEventListener("click", function (e) {
//     console.log("clicked");
    
//     e.stopPropagation(); // 👈 منع انتشار الحدث للعناصر الأبوية
//     if (navList.style.display != "none") {
//       navList.style.display = "none";
//     } else {
//       navList.style.display = "block";
//     }
//   });

//   // عند الضغط على navbarNav (أي مكان غير الهامبرجر)
//   navbarNav.addEventListener("click", function () {
//     navList.style.display = "none";
//   });
//   document.addEventListener("click", function (e) {
//     if (!navbarNav.contains(e.target)) {
//       navList.style.display = "none";
//     }
//   });
// });
 const progressContainer = document.getElementById("preloader");
 const humbbtn = document.getElementById("humb");
  const navbar = document.getElementById("mainNavbar");
  const navbarnav = document.getElementById("navbarNav");
  
  const navitem = document.getElementsByClassName("nav-link");
document.addEventListener("DOMContentLoaded", function () {

  // ✅ التصحيح: استخدم Array.from() أو spread operator بدل forEach.call
  Array.from(navitem).forEach(function (item) {
    item.addEventListener("click", function () {
      // إغلاق الهامبرغر لو مفتوح
      if (navbarnav.classList.contains("show")) {
        navbarnav.classList.remove("show");
      }

      // تحديث حالة الـ navbar حسب التمرير
      if (window.scrollY > 50) {
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
        navbar.classList.add("navbar-transparent");
      }
    });
  });

  // تحديث سنة الكوبي رايت
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // تفعيل/إيقاف الهامبرغر
  if (humbbtn) {
    humbbtn.addEventListener("click", function () {
      this.classList.toggle("active");

      // لما يفتح الهامبرغر، خلي الـ navbar مش شفاف
      if (navbar.classList.contains("navbar-transparent")) {
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("navbar-scrolled");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  progressContainer.classList.add("d-none");

  // ✅ دالة لفحص موقع التمرير وتحديث navbar
  function updateNavbarOnScroll() {
    if (window.scrollY > 50) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-scrolled");
    } else {
      if (navbarnav.classList.contains("show")) {
      }else{
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-scrolled");
      }
    }
  }

  // 🚀 شغل الدالة أول مرة لما الصفحة تتحمّل (حتى لو اليوزر في نص الصفحة من الأول)
  updateNavbarOnScroll();

  // 🔄 شغل الدالة كل ما يحصل scroll
  window.addEventListener("scroll", updateNavbarOnScroll);
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    showTooltip();
  // setInterval(showTooltip, 60000);
}, 3000);
  const swiper = new Swiper(".clients-swiper", {
    direction: "horizontal",
    loop: true, // ← مهم جدًا — يعمل infinite scroll
    slidesPerView: 6,
    speed: 2000, // السرعة — كل ما زاد الرقم، بطيء أكثر
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    // allowTouchMove: false, // منع التمرير باللمس
    freeMode: true, // حركة حرة بدون توقف عند كل slide
    freeModeMomentum: false, // إيقاف الزخم — عشان يتحرك بثبات
  });

  // عند الهوفر — نوقف autoplay
  const swiperContainer = document.querySelector(".clients-swiper");
  swiperContainer.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  swiperContainer.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formCol = document.querySelector(".form-col");
  const worksSection = document.getElementById("works");

  // تأكد من وجود العناصر
  if (!formCol || !worksSection) return;

  // تخزين العنصر الأصلي علشان نرجعه بعدين
  let originalParent = formCol.parentNode;
  let isMoved = false;

  function moveFormForMobile() {
    if (window.innerWidth < 768 && !isMoved) {
      // في الموبايل: انقل الفورم وحطه كأول عنصر داخل قسم #works
      worksSection.prepend(formCol);
      isMoved = true;
    } else if (window.innerWidth >= 768 && isMoved) {
      // في الشاشات الكبيرة: رجع الفورم لمكانه الأصلي
      if (originalParent) {
        originalParent.appendChild(formCol);
        isMoved = false;
      }
    }
  }

  // شغل عند التحميل أول مرة
  moveFormForMobile();

  // شغل عند تغيير حجم الشاشة
  window.addEventListener("resize", moveFormForMobile);
});


function showThankYouPopup() {
  document.getElementById("thankyou-popup").classList.remove("hidden");
  
  document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("thankyou-popup").classList.add("hidden");
  // history.pushState({}, "index.html", "index.html#thankyou");
if (window.location.hash === "#thankyou") {
  history.replaceState({}, "index.html", "index.html");
}

  });
} 

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target; // The form element
  const name = form.name.value.trim(); // Assuming your input has name="name"
  const phone = form.phone.value.trim(); // Assuming your input has name="phone"
  const entity = form.entity.value.trim(); // Assuming your input has name="phone"

  // // Validate inputs
  if (!name || !phone|| !entity) {
    showAlert("الرجاء إدخال الاسم ورقم الهاتف.", "warning");
    return;
  }
  // console.log(name, phone, entity);
  
  // Show progress bar
  const progressContainer = document.getElementById("preloader");
  progressContainer.classList.remove("d-none");

  try {
    const response = await fetch('./submit-sheet.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: name,
        phone: phone,
        entity: entity
      })
    });

    const result = await response.json();
    if (result.success) {
      name.value = "";
      phone.value = "";
    preloader.classList.add('hidden');
    showAlert("لقد تم أرسال الطلب بنجاح", "success");
     if (window.location.hash !== "#thankyou") {
    history.pushState({}, "index.html", "index.html#thankyou");
  }
  showThankYouPopup();

    } else {
      preloader.classList.add('hidden');
      throw new Error(result.error || "Submission failed");

    }
  } catch (error) {
    console.error("Error:", error);
    preloader.classList.add('hidden');
    showAlert("حدث خطأ، برجاء المحاولة مرة أخرى.", "danger");
  } finally {
    progressContainer.classList.add("d-none");
    preloader.classList.add('hidden');
  }
}

function showAlert(message, type) {
  const alertContainer = document.getElementById("alertContainer");

  // Clear any existing alerts
  while (alertContainer.firstChild) {
    alertContainer.firstChild.remove();
  }

  if (!message || !type) return;

  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    ${message}
  `;

  alertContainer.appendChild(alertDiv);

  // Trigger reflow to enable transition
  void alertDiv.offsetWidth;

  // Trigger fade-in
  alertDiv.classList.add("show");

  // Auto-close after 10 seconds
  const AUTO_CLOSE_DELAY = 10000;
  // This runs AFTER the fade-out animation completes
  if (type === "success") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  setTimeout(() => {
    const bsAlert = bootstrap.Alert.getOrCreateInstance(alertDiv);
    bsAlert.close(); // Starts fade-out
  }, AUTO_CLOSE_DELAY);

  // ✅ Listen for when Bootstrap finishes removing the alert

}



let programmaticPause = false; // لما احنا نوقف الفديوهات بالسكربت نخلي العلم ده true
let lastPauseAllAt = 0;       // لقفل مؤقت بين منادات pauseAll
let players = [];
let userPaused = {}; // ✅ نخزن هنا: هل المستخدم وقف الفيديو يدويًا؟
window.addEventListener('scroll', () => {
  requestAnimationFrame(playActiveIfVisible);
});

function onYouTubeIframeAPIReady() {
    const videoIds = [
        'saS0xDPouAg', // فيديو 1
        'i87HHxN7McQ', // فيديو 2
        'T-w7TtaWwEw', // فيديو 3
        'TIPFuYiAAMU', // فيديو 4
        '8AJEw63VtGU', // فيديو 5
        '2IuqrlDodFY', // فيديو 6
        'fhSCx4Pj1TY', // فيديو 7
        "vDaQJX81onU",
        "CpZOT0Bigyk",
        "kRAq-iUEnQM",
        "DsPW8Rov2AI"
    ];

    videoIds.forEach((videoId, index) => {
        const playerId = `player${index + 1}`;
        const targetDiv = document.getElementById(playerId);

        if (!targetDiv) {
            console.error(`❌ مش لاقي div: ${playerId}`);
            return;
        }

        players[index] = new YT.Player(playerId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                autoplay: 0,
                mute: 0,
                loop: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                modestbranding: 1,
                disablekb: 1,
                playlist: videoId
            },
        //     events: {
        //         'onReady': function(event) {
        //             // console.log(`✅ Player ${index + 1} جاهز`);
        //             if (index === 0) {
        //                 const firstItem = document.querySelector('.carousel-item.active');
        //                 // if (firstItem) {
        //                 //     event.target.playVideo();
        //                 // }
        //             }
        //         },
        //         'onStateChange': function(event) {
        //             const playerIndex = players.indexOf(event.target);
        //             if (playerIndex !== -1) {
        //                 userPaused[playerIndex] = event.data === YT.PlayerState.PAUSED;
        //             }
        //         }
        //     }
        // });
        events: {
  'onStateChange': function(event) {
    const playerIndex = players.indexOf(event.target);
    if (playerIndex === -1) return;

    // لو الوقف كان برمجيا متسجلينه متغير programmaticPause
    if (programmaticPause) {
      // نتجاهل تغييرات الحالة الناتجة عن سكربتنا
      return;
    }

    // دلوقتي نقدر نميز لو المستخدم وقف الفيديو يدويا
    userPaused[playerIndex] = (event.data === YT.PlayerState.PAUSED);
  }
}
        });
    });

    // ربط مع الكاروسيل
    const carousel = document.getElementById('videoCarousel');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function(e) {
            const activeIndex = [...carousel.querySelectorAll('.carousel-item')].indexOf(e.relatedTarget);

            // إيقاف كل الفيديوهات — لكن من غير تغيير حالة userPaused
            players.forEach(player => {
                if (player && typeof player.pauseVideo === 'function' && player.getPlayerState() === YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                }
            });

            // تشغيل الفيديو النشط الجديد — فقط لو المستخدم ما وقفهوش
            const currentPlayer = players[activeIndex];
            if (currentPlayer && typeof currentPlayer.playVideo === 'function' && !userPaused[activeIndex]) {
                currentPlayer.playVideo();
            }
        });
    }
}

// function pauseAll() {
//   players.forEach(player => {
//     if (player && typeof player.pauseVideo === 'function' && player.getPlayerState() === YT.PlayerState.PLAYING) {
//           console.log("⏸️ إيقاف كل الفيديوهات");
//             player.pauseVideo();
//         }
//     });
// }
function pauseAll() {
  const now = Date.now();

  // منع منادات متكررة سريعة
  if (now - lastPauseAllAt < 150) return;
  lastPauseAllAt = now;

  // نعلم أن الوقف ده من السكربت عشان ما نعتبروش "userPaused"
  programmaticPause = true;

  players.forEach((player, i) => {
    try {
      if (!player) return;
      if (typeof player.getPlayerState !== 'function') return;
      if (typeof player.pauseVideo !== 'function') return;

      const state = player.getPlayerState();

      // بس نوقف لو الفيديو شغّال فعلا
      if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        console.log('pauseAll paused player', i);
      }
    } catch (err) {
      console.warn('pauseAll error for player', i, err);
    }
  });

  // نفك العلم بعد فترة قصيرة عشان onStateChange يرجع يسجل الـ user pause طبيعي لو حد وقف الفيديو يدويا
  setTimeout(() => {
    programmaticPause = false;
  }, 250);
}

// دالة تشغل الفيديو النشط لو ظاهر أكتر من 50%
function playActiveIfVisible() {
    const carousel = document.getElementById('videoCarousel');
    if (!carousel) return;

    const items = [...carousel.querySelectorAll('.carousel-item')];
    const activeIndex = items.findIndex(item => item.classList.contains('active'));
    if (activeIndex === -1) return;

    const activeItem = items[activeIndex];
    const rect = activeItem.getBoundingClientRect();
    const height = rect.height;
    const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

    if (visibleHeight / height >= 0.5) {
        const currentPlayer = players[activeIndex];
        if (currentPlayer && typeof currentPlayer.playVideo === 'function') {
            if (currentPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
                currentPlayer.playVideo();
            }
        }
        // وقف باقي الفيديوهات
        players.forEach((player, i) => {
            if (player && i !== activeIndex && player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        });
    } else {
        pauseAll();
    }
}
// مراقب لكل عنصر فيديو في الكاروسيل
let playTimeout;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            clearTimeout(playTimeout);
            playTimeout = setTimeout(() => {
                if (entry.isIntersecting) { 
                    playActiveIfVisible();
                }
            }, 500); // ثانية واحدة
        } else {
            clearTimeout(playTimeout);
            pauseAll();
        }
    });
}, {
    threshold: [0, 0.25, 0.5, 0.75, 1]
});


// اربط المراقب بكل العناصر
const carouselItems = document.querySelectorAll('#videoCarousel .ratio');
carouselItems.forEach(item => observer.observe(item));

// عند تحميل الصفحة شغل الفيديو النشط لو ظاهر 50% أو أكتر
window.addEventListener('load', () => {
    playActiveIfVisible();
});

// دالة تتحكم في الفيديوهات حسب الظهور والكاروسيل
function handleVideoVisibility() {
    const carousel = document.getElementById('videoCarousel');
    if (!carousel || !players.length) return;

    const isCarouselVisible = isElementInViewport(carousel);
    const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));

    if (activeIndex === -1) return;

    const currentPlayer = players[activeIndex];
    if (!currentPlayer || typeof currentPlayer.playVideo !== 'function') return;

    if (isCarouselVisible) {
        // لو الكاروسيل ظاهر → شغّل الفيديو النشط (لو المستخدم ما وقفهوش)
        if (!userPaused[activeIndex] && currentPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
            currentPlayer.playVideo();
        }

        // إيقاف باقي الفيديوهات
        players.forEach((player, i) => {
            if (player && i !== activeIndex && player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        });
    } else {
        // لو الكاروسيل مش ظاهر → إيقاف كل الفيديوهات
        players.forEach(player => {
            if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        });
    }
}

// دالة تتعامل مع تغيير السلايد
function handleCarouselSlide(e) {
    const carousel = e.target;
    const activeIndex = [...carousel.querySelectorAll('.carousel-item')].indexOf(e.relatedTarget);

    // إيقاف كل الفيديوهات
    players.forEach(player => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        }
    });

    // تشغيل الفيديو الجديد (لو الكاروسيل ظاهر)
    if (isElementInViewport(carousel)) {
        const currentPlayer = players[activeIndex];
        if (currentPlayer && !userPaused[activeIndex]) {
            currentPlayer.playVideo();
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
  // لو اتجاه الصفحة RTL
  if (window.getComputedStyle(document.body).direction === 'rtl') {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
      // منع السلوك الافتراضي للـ swipe في الـ RTL
      carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
      carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('videoCarousel');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      touch: true, // تأكيد تفعيل اللمس
      interval: false // لو مش عايز يتحرك تلقائي
    });
  }
});
let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) return;

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  // تجاهل الحركة الرأسية
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // منع السلوك الافتراضي (عشان Bootstrap متتحكمش)
    evt.preventDefault();

    // في الـ RTL: السحب لليسار = تقدم للأمام (next)
    // لكن Bootstrap بيفهمه كـ "prev" → فخليه يعكس الإشارة
    if (xDiff > 0) {
      // السحب لليسار → في LTR ده "prev"، لكن في RTL ده "next"
      bootstrap.Carousel.getInstance(this).next();
    } else {
      // السحب لليمين → في LTR ده "next"، لكن في RTL ده "prev"
      bootstrap.Carousel.getInstance(this).prev();
    }
  }

  // reset values
  xDown = null;
  yDown = null;
}