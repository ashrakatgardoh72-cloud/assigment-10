// light and dark
let moonicon = document.querySelector(".moon")
let sunicon = document.querySelector(".sun")

let mytheame = document.querySelector('#checkDefault')
mytheame.addEventListener('change', function () {
    if (mytheame.checked) {
        document.body.classList.add("light-mode")
        moonicon.classList.add('d-none')
        sunicon.classList.remove('d-none')
    } else {
        document.body.classList.remove("light-mode")
        moonicon.classList.remove('d-none')
        sunicon.classList.add('d-none')
    }
})
// nav and tab
let allbtn = document.querySelector(".all1")
let web2btn = document.querySelector(".web2")
let app2btn = document.querySelector(".app2")
let design2btn = document.querySelector(".design2")
let commercebtn = document.querySelector(".e-commerce2")
let projects = [
    {
        category: 'website',
        label: "موقع ويب",
        Image: 'imgs/portfolio-1-BqicZ04C.webp',
        alt: 'modern e-commerce',
        title: 'متجر إلكتروني متكامل',
        desc: 'منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات',
        tech: ["React", "Node.js", "MongoDB"]
    },
    {
        category: 'app',
        label: "تطبيق ",
        Image: "imgs/portfolio-2-D0_acfF_.webp",
        alt: 'mobile task management app',
        title: ' تطبيق إدارة المهام',
        desc: 'تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي ',
        tech: ["Vue.js", "Firebase", "Tailwind"]
    },
    {
        category: 'design',
        label: "تصميم",
        Image: "imgs/portfolio-3-uJsBXCgl.webp",
        alt: 'modern portfolio website design',
        title: 'موقع شخصي إبداعي  ',
        desc: 'تصميم موقع شخصي بأسلوب عصري وألوان جريئة',
        tech: ["Figma", "UI/UX", "Prototype"]
    },
    {
        category: 'website',
        label: "موقع ويب",
        Image: "imgs/portfolio-4-Czusdp5K.webp",
        alt: 'corporate business website',
        title: ' موقع شركة استشارية  ',
        desc: 'موقع احترافي لشركة استشارات مع نظام حجز المواعيد',
        tech: ["Next.js", "TypeScript", "Prisma"]
    },
    {
        category: 'app',
        label: 'تطبيق',
        Image: "imgs/portfolio-5-ChqqtI-W.webp",
        alt: 'social media dashboard',
        title: 'لوحة تحليلات اجتماعية ',
        desc: 'منصة تحليل وإدارة حسابات التواصل الاجتماعي',
        tech: ["React", "Chart.js", "API"]

    },
    {
        category: 'commerce',
        label: 'تجارة',
        Image: "imgs/portfolio-6-C9bxzsei.webp",
        alt: 'fashion e-commerce website',
        title: ' متجر أزياء فاخر  ',
        desc: 'منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية',
        tech: ["Next.js", "Stripe", "Sanity"]
    },
    {
        category: 'website',
        label: "موقع ويب",
        Image: "imgs/portfolio-7-BXDNVwGk.webp",
        alt: 'restaurant website',
        title: '  موقع مطعم وتوصيل ',
        desc: 'منصة طلب طعام مع نظام توصيل وتتبع الطلبات',
        tech: ["React", "Express", "PostgreSQL"]
    },
    {
        category: 'app',
        label: 'تطبيق',
        Image: "imgs/portfolio-8-BnHB_F_a.webp",
        alt: 'fitness tracking app',
        title: '  تطبيق لياقة بدنية ',
        desc: 'تطبيق متكامل لتتبع التمارين والتغذية والتقدم',
        tech: ["React Native", " Redux", "Firebase"]
    },
    {
        category: 'design',
        label: 'تصميم',
        Image: "imgs/portfolio-9-Q6q-wpwU.webp",
        alt: 'mobile app ui design',
        title: '  تصميم تطبيق جوال ',
        desc: 'تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف',
        tech: ["Figma", "Adobe XD", "Sketch"]
    }
]
function addActive() {
    allcards()
    allbtn.classList.add("active")
}
addActive()
function removeActive() {
    allbtn.classList.remove("active");
}

allbtn.addEventListener('click', function () {
    removeActive()
    allcards()
})
web2btn.addEventListener('click', function () {
    removeActive()
    website()
})
app2btn.addEventListener('click', function () {
    removeActive()
    app()
})
design2btn.addEventListener('click', function () {
    removeActive()
    design()
})
commercebtn.addEventListener('click', function () {
    removeActive()
    commerce()
})
function allcards() {
    var cartona = ""
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == 'website' || projects[i].category == 'app' || projects[i].category == 'commerce' || projects[i].category == 'design') {
            let typebox = ""
            let spanclass = ""

            if (projects[i].category == 'website') {
                typebox = 'texttt-web'
                spanclass = 'web-edit'
            }
            else if (projects[i].category == 'app') {
                typebox = 'texttt-app'
                spanclass = 'app-edit'
            }
            else {
                typebox = 'texttt-design'
                spanclass = 'design-edit'
            }
            let propertys = ""
            for (let a = 0; a < projects[i].tech.length; a++) {
                propertys += `   <div class="textttt2">
                                          <span>${projects[i].tech[a]}</span>
                                         </div>`
            }
            let icontag = "git"
            let iconclass = "fa-github"
            if (projects[i].category == 'design') {
                icontag = "figma"
                iconclass = "fa-figma"
            }
            cartona += `   <div class="col-md-6 col-lg-4">
                            <div class="cart1 mt-5 ${projects[i].category}">
                                <figure>
                                    <img src="${projects[i].Image}" alt="${projects[i].alt}" class="w-100">
                                </figure>
                                <div class="content">
                                    <div class="parent d-flex justify-content-between align-items-center">
                                        <div class="${typebox}">
                                            <span class="${spanclass}"> ${projects[i].label}</span>
                                        </div>
                                        <div class="icons d-flex gap-2">
                                            <span class=" eye d-flex align-items-center justify-content-center"><i
                                                    class="fa-solid fa-eye"></i></span>
                                            <span class="${icontag} d-flex align-items-center justify-content-center"><i
                                                    class="fa-brands ${iconclass}"></i></span>

                                        </div>
                                    </div>
                                    <div class="title-cart mt-3">
                                        <h3>  ${projects[i].title}</h3>
                                        <p> ${projects[i].desc}  </p>
                                    </div>
                                    <div class="d-flex gap-2">
                                      
                                        ${propertys}
                                    </div>

                                </div>
                            </div>
                        </div>`
        }



    }
    document.getElementById('rowdata').innerHTML = cartona
}
function website() {

    let cartona = ""
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == 'website') {
            let propertys = ''
            for (let a = 0; a < projects[i].tech.length; a++) {
                propertys += `
         <div class="textttt2">
         <span>${projects[i].tech[a]}</span>
        </div>`
            }
            cartona += ` <div class="col-md-6 col-lg-4">
                            <div class="cart1 mt-5 website">
                                <figure>
                                    <img src="${projects[i].Image}" alt="${projects[i].alt}" class="w-100">
                                </figure>
                                <div class="content">
                                    <div class="parent d-flex justify-content-between align-items-center">
                                        <div class="texttt-web">
                                            <span class="web-edit"> ${projects[i].label}</span>
                                        </div>
                                        <div class="icons d-flex gap-2">
                                            <span class=" eye d-flex align-items-center justify-content-center"><i
                                                    class="fa-solid fa-eye"></i></span>
                                            <span class="git d-flex align-items-center justify-content-center"><i
                                                    class="fa-brands fa-github"></i></span>

                                        </div>
                                    </div>
                                    <div class="title-cart mt-3">
                                        <h3>${projects[i].title}</h3>
                                        <p>    ${projects[i].desc}  </p>
                                    </div>
                                    <div class="d-flex gap-2">
                                      ${propertys}
                                    </div>

                                </div>
                            </div>
                        </div>`
        }
    }
    document.getElementById('rowdata').innerHTML = cartona
}
function app() {
    let cartona = ''
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == 'app') {
            let propertys = ''
            for (let a = 0; a < projects[i].tech.length; a++) {
                propertys += `
         <div class="textttt2">
         <span>${projects[i].tech[a]}</span>
        </div>`
            }
            cartona += `   <div class="col-md-6 col-lg-4">
                            <div class="cart1 mt-5 app">
                                <figure>
                                    <img src="${projects[i].Image}" alt="${projects[i].alt}"
                                        class="w-100">
                                </figure>
                                <div class="content">
                                    <div class="parent d-flex justify-content-between align-items-center">
                                        <div class="texttt-app">
                                            <span class="app-edit"> ${projects[i].label}</span>
                                        </div>
                                        <div class="icons d-flex gap-2">
                                            <span class=" eye d-flex align-items-center justify-content-center"><i
                                                    class="fa-solid fa-eye"></i></span>
                                            <span class="git d-flex align-items-center justify-content-center"><i
                                                    class="fa-brands fa-github"></i></span>

                                        </div>
                                    </div>
                                    <div class="title-cart mt-3">
                                        <h3>   ${projects[i].title}</h3>
                                        <p style="max-width: 21.875rem;">  ${projects[i].desc}</p>
                                    </div>
                                    <div class="d-flex gap-2">
                                  ${propertys}
                                    </div>

                                </div>
                            </div>
                        </div>`
        }
    }
    document.getElementById('rowdata').innerHTML = cartona
}
function design() {
    let cartona = ''
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == 'design') {
            let propertys = ''
            for (let a = 0; a < projects[i].tech.length; a++) {
                propertys += `
         <div class="textttt2">
         <span>${projects[i].tech[a]}</span>
        </div>`
            }
            cartona += `   <div class="col-md-6 col-lg-4">
                            <div class="cart1 mt-5 design">
                                <figure>
                                    <img src="${projects[i].Image}" alt="${projects[i].alt}"
                                        class="w-100">
                                </figure>
                                <div class="content">
                                    <div class="parent d-flex justify-content-between align-items-center">
                                        <div class="texttt-design">
                                            <span class="design-edit"> ${projects[i].label}</span>
                                        </div>
                                        <div class="icons d-flex gap-2">
                                            <span class=" eye d-flex align-items-center justify-content-center"><i
                                                    class="fa-solid fa-eye"></i></span>
                                            <span class="figma d-flex align-items-center justify-content-center">
                                                <i class="fa-brands fa-figma"></i></span>

                                        </div>
                                    </div>
                                    <div class="title-cart mt-3">
                                        <h3>   ${projects[i].title} </h3>
                                        <p style="max-width: 21.875rem;">  ${projects[i].desc} </p>
                                    </div>
                                    <div class="d-flex gap-2">
                                  ${propertys}
                                    </div>

                                </div>
                            </div>
                        </div>`
        }
    }
    document.getElementById('rowdata').innerHTML = cartona
}
function commerce() {
    let cartona = ''
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == 'commerce') {

            let propertys = ''
            for (let a = 0; a < projects[i].tech.length; a++) {
                propertys += `
         <div class="textttt2">
         <span>${projects[i].tech[a]}</span>
        </div>`
            }
            cartona += ` <div class="col-md-6 col-lg-4">
                            <div class="cart1 mt-5 commerce">
                                <figure>
                                    <img src="${projects[i].Image}" alt="${projects[i].alt}"
                                        class="w-100">
                                </figure>
                                <div class="content">
                                    <div class="parent d-flex justify-content-between align-items-center">
                                        <div class="texttt-design">
                                            <span class="design-edit"> ${projects[i].label}</span>
                                        </div>
                                        <div class="icons d-flex gap-2">
                                            <span class=" eye d-flex align-items-center justify-content-center"><i
                                                    class="fa-solid fa-eye"></i></span>
                                            <span class="git d-flex align-items-center justify-content-center"><i
                                                    class="fa-brands fa-github"></i></span>

                                        </div>
                                    </div>
                                    <div class="title-cart mt-3">
                                        <h3> ${projects[i].title}</h3>
                                        <p >    ${projects[i].desc} </p>
                                    </div>
                                    <div class="d-flex gap-2">
                                    ${propertys}
                                    </div>

                                </div>
                            </div>
                        </div>`

        }
    }
    document.getElementById('rowdata').innerHTML = cartona
}


let persons = [
    {
        name: 'أحمد السعيد',
        job: 'مدير شركة التقنية الحديثة',
        desc: '"شغل أحمد معانا كان حاجة تانية خالص. قدم حلول مبتكرة لكل المشاكل اللي واجهتنا. الموقع اللي عمله عدى كل توقعاتنا في التصميم والأداء."',
        image: "imgs/avatar-1-BQH9KX0X.webp",
        alt: 'avatar1'
    },
    {
        name: 'سيف أسامة',
        job: 'ميديا باير',
        desc: '"المتجر بتاعنا بقى محترف ومريح جداً في الاستخدام. مبيعاتنا زادت 60% في أول شهر. شكراً يا أحمد على المجهود الجبار!"',
        image: "imgs/avatar-2-CyFiVXIH.webp",
        alt: 'avatar2'
    },
    {
        name: 'خالد صلاح',
        job: 'مدير تطوير الأعمال',
        desc: '"شغل محترفين بجد ومواعيد مظبوطة. التطبيق اللي عمله لنا شغال زي الفل على كل الأجهزة. بننصح بيه جداً لأي مشروع."',
        image: "imgs/avatar-3-CmoFRkys.webp",
        alt: 'avatar3'
    },
    {
        name: 'أحمد الرفاعي',
        job: 'جرافيك ديزاينر',
        desc: '"تجربة ممتازة من الأول للآخر. أحمد سمع طلباتنا كويس وقدم أفكار برة الصندوق. الموقع الجديد عجب العملاء جداً."',
        image: "imgs/avatar-4-CI2X8fvY.webp",
        alt: 'avatar4'
    },
    {
        name: 'عمر عادل',
        job: 'مؤسس شركة ناشئة',
        desc: '"أحمد ساعدنا نحول الفكرة لواقع. الـ MVP اللي عمله كان ممتاز عشان نجذب مستثمرين. شطارة تقنية وإبداع ملوش حل."',
        image: "imgs/avatar-5-BF_5vAuR.webp",
        alt: 'avatar5'
    },
    {
        name: 'كريم ياسر',
        job: 'دكتور صيدلي',
        desc: '"الشغل مع أحمد كان مريح ومنظم جداً. دايماً بيبعت تحديثات وبيرد بسرعة على أي تعديل. النتيجة النهائية أحسن من اللي كنا متخيلينه."',
        image: "imgs/avatar-6-IIG--UcM.webp",
        alt: 'avatar6'
    }
]
let nextbtn = document.getElementById('next')
let prevbtn = document.getElementById('prev')
let circle1 = document.querySelector('.dot1')
let circle2 = document.querySelector('.dot2')
let circle3 = document.querySelector('.dot3')
let circle4 = document.querySelector('.dot4')
let dots = document.querySelectorAll('.buttons2 button')
let count = 0
function showpersons() {
    let cartona = ''
let howmany = 3
if (window.innerWidth <= 768) {
    howmany = 1
}
else if (window.innerWidth <= 991) {
    howmany = 2
}
    for (let i = count; i < count + howmany; i++) {
        let cols = 'person'
        if (i % 3 == 1) {
            cols = 'person2'
        } else if (i % 3 == 2) {
            cols = 'person3'
        }
        cartona += `   <div class="col-md-6 col-lg-4">
                                <div class="${cols}">
                                    <div class="d-flex gap-3 div-avatar">
                                        <figure>
                                            <img src="${persons[i].image}" alt="${persons[i].alt}">
                                        </figure>
                                        <div class="client1">
                                            <h3> ${persons[i].name}</h3>
                                            <p class=" custom-p">    ${persons[i].job}</p>
                                        </div>

                                    </div>
                                    <div class="d-flex mt-3 mb-3 container-star ">
                                        <span class="star"><i class="fa-solid fa-star"></i></span>
                                        <span class="star"><i class="fa-solid fa-star"></i></span>
                                        <span class="star"><i class="fa-solid fa-star"></i></span>
                                        <span class="star"><i class="fa-solid fa-star"></i></span>
                                        <span class="star"><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <p class="edit-p">${persons[i].desc}</p>
                                </div>
                            </div>`
    }
    document.getElementById('persons').innerHTML = cartona
    for (let a = 0; a < dots.length; a++) {
        dots[a].classList.remove('active-dot')
    }
    dots[count].classList.add('active-dot')
}
showpersons()
nextbtn.addEventListener('click', function () {
    if (count < 3) {
        count++
        showpersons()
    }
})
prevbtn.addEventListener('click', function () {
    if (count > 0) {
        count--
        showpersons()
    }
})
circle1.addEventListener('click', function () {
    count = 0
    circle1.classList.add('active-dot')
    showpersons()

})
circle2.addEventListener('click', function () {
    count = 1
    circle1.classList.remove('active-dot')
    circle2.classList.add('active-dot')
    showpersons()
})
circle3.addEventListener('click', function () {
    count = 2
    circle2.classList.remove('active-dot')
    circle3.classList.add('active-dot')
    showpersons()
})
circle4.addEventListener('click', function () {
    count = 3
    circle3.classList.remove('active-dot')
    circle4.classList.add('active-dot')
    showpersons()
})
window.addEventListener('resize', function () {
    showpersons()
})

let selects = document.querySelectorAll(".my-select");

for (let i = 0; i < selects.length; i++) {
    let btn = selects[i].querySelector(".my-select-btn");
    let list = selects[i].querySelector(".my-select-list");
    let text = selects[i].querySelector(".my-select-btn span");
    let options = selects[i].querySelectorAll(".my-option");

    btn.addEventListener("click", function () {
        list.classList.toggle("open");
        btn.classList.toggle("active");
    });

    for (let j = 0; j < options.length; j++) {
        options[j].addEventListener("click", function () {
            text.textContent = options[j].textContent;
            text.style.color = "#ffffff";
            list.classList.remove("open");
            btn.classList.remove("active");
        });
    }

}

let settingbtn = document.querySelector('.settings-btn')
settingbtn.addEventListener('click', function () {
    showsidebar()
})
function showsidebar() {
    let cartona = ''
    cartona += `  <div class="container-sidebar">
        <header class="d-flex justify-content-between ">
            <div class="title-side d-flex gap-2 text-white ">
                <span class="sliders"><i class="fa-solid fa-sliders"></i></span>
                <h3>تخصيص المظهر</h3>
            </div>
            <span class="close d-flex  justify-content-center align-items-center"><i
                    class="fa-solid fa-xmark"></i></span>
        </header>
        <div class="sidebar-body">
            <div class="type-font d-flex gap-2">
                <span class="char-a"><i class="fa-solid fa-a"></i></span>
                <h6>نوع الخط</h6>
            </div>
            <div class="font-1 font-box d-flex justify-content-between align-items-center" data-font="--secound-font">
                <div>
                    <h5 class="mt-1">Alexandria</h5>
                    <p>Alexandria</p>
                </div>
                <span class="d-none check"><i class="fa-solid fa-circle-check check"></i></span>
            </div>
            <div class="font-2  font-box mt-3  d-flex justify-content-between align-items-center" data-font="--first-font">
                <div>
                    <h5 class="mt-1">Tajawal</h5>
                    <p>الخط الافتراضي</p>
                </div>
                <span class=" check d-none "> <i class="fa-solid fa-circle-check check"></i></span>
            </div>
            <div class="font-3 font-box mt-3  d-flex justify-content-between align-items-center" data-font="--third-font">
                <div>
                    <h5 class="mt-1">Cairo</h5>
                    <p>Cairo</p>
                </div>
                <span class=" check d-none"> <i class="fa-solid fa-circle-check check"></i></span>
            </div>
            <div class="line-break"></div>
            <div>
                <div class="color-theme  d-flex gap-2">
                    <span><i class="fa-solid fa-palette"></i></span>
                    <h6>لون الثيم</h6>
                </div>
                <div class="colors">
                    <span class="color-purple color-circle allcolor" data-primary="99, 102, 241" data-secondary="139, 92, 246" data-accent="168, 85, 247"></span>
                    <span class="color-red-orange color-circle allcolor" data-primary="236, 72, 153" data-secondary="249, 115, 22" data-accent="244, 63, 94"></span>
                    <span class="color-green color-circle allcolor" data-primary="16, 185, 129" data-secondary="5, 150, 105" data-accent="52, 211, 153"></span>
                    <span class="color-blue color-circle allcolor" data-primary="59, 130, 246" data-secondary="6, 182, 212" data-accent="14, 165, 233"></span>
                    <span class="color-red color-circle allcolor" data-primary="239, 68, 68" data-secondary="244, 63, 94" data-accent="251, 113, 133"></span>
                    <span class="color-orange color-circle allcolor" data-primary="245, 158, 11" data-secondary="234, 88, 12" data-accent="251, 146, 60"></span>
                </div>
            </div>
            <div class="line-break"></div>
            <button class="btn btn-lg edit-setting d-flex justify-content-center align-items-center">
                <div class="d-flex gap-2">
                    <span><i class="fa-solid fa-rotate-right"></i></span>
                    <span class="edit-text"> إعادة الضبط </span>
                </div>
            </button>
        </div>
    </div>`
    document.querySelector('.sidebar-box').innerHTML = cartona

    let closebtn = document.querySelector('.close')
    closebtn.addEventListener('click', function () {
        document.querySelector('.sidebar-box').innerHTML = ''
    })
   

    let fontsbtn = document.querySelectorAll('.font-box')
    for (let i = 0; i < fontsbtn.length; i++) {
        fontsbtn[i].addEventListener('click', function () {
            for (let j = 0; j < fontsbtn.length; j++) {
                fontsbtn[j].classList.remove('active')
                fontsbtn[j].querySelector('span').classList.add('d-none')
            }
            fontsbtn[i].classList.add('active')
            fontsbtn[i].querySelector('span').classList.remove('d-none')
            let fontvar = fontsbtn[i].dataset.font
            document.documentElement.style.setProperty('--main-font', `var(${fontvar})`)
        })
    }

    let colorbtn = document.querySelectorAll('.allcolor')
    for (let i = 0; i < colorbtn.length; i++) {
        colorbtn[i].addEventListener('click', function () {
            for (let a = 0; a < colorbtn.length; a++) {
                colorbtn[a].classList.remove('active')
            }
            colorbtn[i].classList.add('active')

            let colorvar = colorbtn[i].dataset
            let root = document.documentElement
            root.style.setProperty('--color-primary', `rgb(${colorvar.primary})`)
            root.style.setProperty('--color-secondary', `rgb(${colorvar.secondary})`)
            root.style.setProperty('--color-accent', `rgb(${colorvar.accent})`)
            root.style.setProperty('--primary-rgb', colorvar.primary)
            root.style.setProperty('--secondary-rgb', colorvar.secondary)
            root.style.setProperty('--accent-rgb', colorvar.accent)
        })
    }
}
let nameinput=document.getElementById('fullname')
let mailinput=document.getElementById('mail')
let phoneinput=document.getElementById('phone')
let projecttypeinput=document.getElementById('typeproject')
let budjetinput=document.getElementById('budget')
let textareainput=document.getElementById('textarea')

function validation(Element){
    var text=Element.value
    let rejex={
        fullname: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,
         mail: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.com$/,
         phone: /^(?:\+20|002)?01[0125][0-9]{8}$/,
        typeproject: /^(موقع ويب|تطبيق ويب|تطبيق جوال|تصميم UI\/UX|استشارة تقنية)$/i,
        budget:/^(  أقل من 20,000 جنيه| 20,000 - 50,000 جنيه| 50,000 - 100,000 جنيه|أكثر من 100,000 جنيه)$/i,
          textarea: /^.{10,500}$/
    }
        let msg = Element.nextElementSibling
       if (rejex[Element.id].test(text)) {
        if (msg) msg.classList.add('d-none')
        return true
    } else {
        if (msg) msg.classList.remove('d-none')
        return false
    }
} 
let myform = document.querySelector('.contact form')

myform.addEventListener('submit', function (e) {
    e.preventDefault()
    let nameok = validation(nameinput)
    let mailok = validation(mailinput)
    if (nameok && mailok) {
 Swal.fire({
    iconHtml: '<i class="fa-solid fa-check"></i>',
    title: 'تم إرسال رسالتك بنجاح!',
    text: 'شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.',
    background: '#1E293B',
    color: '#fff',
    confirmButtonText: 'حسناً',
    customClass: {
        popup: 'my-popup',
        icon: 'my-icon',
        htmlContainer: 'my-text',
        confirmButton: 'my-confirm'
    }
})
    }
})
let topbtn=document.getElementById('rockett')
window.addEventListener('scroll', function () {
    // console.log(window.scrollY)
    if(window.scrollY>500){
    topbtn.classList.add('show')
}
else{
      topbtn.classList.remove('show')  
}

})
topbtn.addEventListener('click',function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})