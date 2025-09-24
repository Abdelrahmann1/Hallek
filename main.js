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

document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");

  // ✅ دالة لفحص موقع التمرير وتحديث navbar
  function updateNavbarOnScroll() {
    if (window.scrollY > 50) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("navbar-transparent");
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
const notificationSound = new Audio('/assets/sounds/notify.mp3'); // ← غير المسار لو مختلف

const tooltipInstances = tippy("#form-btn", {
  content: "بدك تزيد مبيعاتك 5 اضعاف ؟ </br>  راسلنا ونقولك كيف",
  animation: "fade",
  theme: "gradient",
  arrow: true, // سهم
  zIndex: 10000,
  placement: "top-end",

  interactive: true,
  allowHTML: true,
});
const tooltip = tooltipInstances[0];
// showTooltip();

function showTooltip() {
    notificationSound.currentTime = 0; // رجّعه للبداية لو كان شغال قبل كده
  notificationSound.play().catch(e => {
    // لو حصل مشكلة (مثل سياسة autoplay)، متقلقش
    console.log("ماقدرش أشغّل الصوت تلقائيًا – محتاج تفاعل أول من المستخدم");
  });
  tooltip.show();

  // بعد 20 ثانية → ينقفل
  setTimeout(() => {
    tooltip.hide();
  }, 20000);
}
setTimeout(() => {
  showTooltip();

  // يتكرر كل 10 دقائق
  setInterval(showTooltip, 600000);
}, 30000);

  progressContainer.classList.add("d-none");
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
  console.log(name, phone, entity);
  
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
        Entity: entity
      })
    });

    const result = await response.json();
    if (result.success) {
      name.value = "";
      phone.value = "";
    preloader.classList.add('hidden');
    showAlert("لقد تم أرسال الطلب بنجاح", "success");

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




let players = [];
let userPaused = {}; // ✅ نخزن هنا: هل المستخدم وقف الفيديو يدويًا؟

function onYouTubeIframeAPIReady() {
    console.log("✅ YouTube API جاهز!");

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
        "kRAq-iUEnQM"
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
            events: {
                'onReady': function(event) {
                    // console.log(`✅ Player ${index + 1} جاهز`);
                    if (index === 0) {
                        const firstItem = document.querySelector('.carousel-item.active');
                        if (firstItem) {
                            event.target.playVideo();
                        }
                    }
                },
                'onStateChange': function(event) {
                    const playerIndex = players.indexOf(event.target);

                    // // ✅ لو المستخدم ضغط Pause — نسجل إن هو اللي وقفه
                    // if (event.data === YT.PlayerState.PAUSED) {
                    //     userPaused[playerIndex] = true;
                    //     console.log(`⏸️ المستخدم وقف الفيديو ${playerIndex + 1} يدويًا`);
                    // }

                    // // ✅ لو الفيديو بدأ يشتغل (Play) — نمسح العلامة
                    // if (event.data === YT.PlayerState.PLAYING) {
                    //     userPaused[playerIndex] = false;
                    //     console.log(`▶️ الفيديو ${playerIndex + 1} شغال — إيقاف يدوي ملغي`);
                    // }

                    // // لو انتهى → يعيد التشغيل (حتى لو كان موقوف يدويًا — لأن المستخدم ممكن يحب يكمل)
                    // if (event.data === YT.PlayerState.ENDED) {
                    //     event.target.playVideo();
                    // }
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
// بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('videoCarousel');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      touch: true, // تأكيد تفعيل اللمس
      interval: false // لو مش عايز يتحرك تلقائي
    });
  }
});
window.addEventListener('scroll', () => {
    const carousel = document.getElementById('videoCarousel');
    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const isVisible = carouselRect.top < window.innerHeight && carouselRect.bottom > 0;

    // لو الكاروسيل مش ظاهر → إيقاف كل الفيديوهات
    if (!isVisible) {
        players.forEach(player => {
            if (player && typeof player.pauseVideo === 'function' && player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        });
        return;
    }

    // لو الكاروسيل ظاهر → شغل الفيديو النشط فقط
    const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));
    if (activeIndex === -1) return; // مفيش عنصر نشط

    const currentPlayer = players[activeIndex];
    if (!currentPlayer || typeof currentPlayer.playVideo !== 'function') return;

    // لو الفيديو مش شغال → شغّله
    if (currentPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
        currentPlayer.playVideo();
    }

    // إيقاف باقي الفيديوهات (لو في أي فيديو شغال غير النشط)
    players.forEach((player, i) => {
        if (player && i !== activeIndex && player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        }
    });
});

// window.addEventListener('scroll', () => {

//     const carousel = document.getElementById('videoCarousel');
//     if (!carousel) return;

//     const rect = carousel.getBoundingClientRect();
//     const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//     if (!isVisible) {
//         players.forEach((p, i) => {
//             if (p?.getPlayerState?.() === YT.PlayerState.PLAYING && !userPaused[i]) {
//                 p.pauseVideo();
//             }
//         });
//         return;
//     }

//     const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(el => el.classList.contains('active'));
//     if (activeIndex < 0 || !players[activeIndex]) return;

//     if (!userPaused[activeIndex]) {
//         const state = players[activeIndex].getPlayerState?.();
//         if (state !== YT.PlayerState.PLAYING && state !== undefined) {
//             players[activeIndex].playVideo();
//         }
//     }

//     players.forEach((p, i) => {
//         if (p && i !== activeIndex && p.getPlayerState?.() === YT.PlayerState.PLAYING && !userPaused[i]) {
//             p.pauseVideo();
//         }
//     });
// });

// window.addEventListener('scroll', () => {
//     const carousel = document.getElementById('videoCarousel');
//     if (!carousel) return;

//     const rect = carousel.getBoundingClientRect();
//     const fullyOutOfView = rect.bottom < 0 || rect.top > window.innerHeight; // ✅ الكاروسيل خارج الشاشة بالكامل

//     if (fullyOutOfView) {
//         // ✅ لو الكاروسيل خارج الشاشة → أوقف الفيديوهات (لو مش موقوفة يدويًا)
//         players.forEach((p, i) => {
//             if (p?.getPlayerState?.() === YT.PlayerState.PLAYING && !userPaused[i]) {
//                 p.pauseVideo();
//             }
//         });
//         return;
//     }

//     // ✅ لو جزء منه ظاهر → شغل الفيديو النشط (لو المستخدم ما وقفهوش)
//     const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(el => el.classList.contains('active'));
//     if (activeIndex < 0 || !players[activeIndex]) return;

//     if (!userPaused[activeIndex]) {
//         const state = players[activeIndex].getPlayerState?.();
//         if (state !== YT.PlayerState.PLAYING && state !== undefined) {
//             players[activeIndex].playVideo();
//         }
//     }

//     // ✅ إيقاف باقي الفيديوهات (لو شغالين ومش موقوفين يدويًا)
//     players.forEach((p, i) => {
//         if (p && i !== activeIndex && p.getPlayerState?.() === YT.PlayerState.PLAYING && !userPaused[i]) {
//             p.pauseVideo();
//         }
//     });
// });




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