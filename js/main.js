// ============
//    TABS    |
// ============

const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = e.target;
        
        tabs.forEach(tabs => {
            tabs.classList.remove('active');
        });

        targetTab.classList.add('active');

        tabsContent.forEach(tabContent => {
            const tabCheck = function(tabContent){
                tabsContent.forEach(tabContent => {
                    tabContent.classList.remove('active');
                    tabContent.classList.add('hiden');
                });
            }

            if(targetTab.id == "tab1"){
                tabCheck(tabContent);
                tabsContent[0].querySelector('.tab-content__img-box').classList.add('slide-from-left');
                tabsContent[0].querySelector('.tab-content__info').classList.add('slide-from-right');
                tabsContent[0].classList.add('active');
            }

            if(targetTab.id == "tab2"){
                tabCheck(tabContent);
                tabsContent[1].querySelector('.tab-content__img-box').classList.add('slide-from-left');
                tabsContent[1].querySelector('.tab-content__info').classList.add('slide-from-right');
                tabsContent[1].classList.add('active');
            }

            if(targetTab.id == "tab3"){
                tabCheck(tabContent);
                tabsContent[2].querySelector('.tab-content__img-box').classList.add('slide-from-left');
                tabsContent[2].querySelector('.tab-content__info').classList.add('slide-from-right');
                tabsContent[2].classList.add('active');
            }
        })
    })
})

// =======================
//    EXPANDABLE LIST    |
// =======================

const list = document.querySelectorAll('.list__question-item__head');

list.forEach(question => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('closed');
        const arrow = question.childNodes[3];
        
        if(arrow.classList.contains('rotate-arrow')){
            arrow.classList.remove('rotate-arrow');
            arrow.classList.add('rotate-arrow-reverse');

        } else {
            arrow.classList.remove('rotate-arrow-reverse');
            arrow.classList.add('rotate-arrow');
        }
        
        question.nextElementSibling.classList.toggle('expanded');
        question.nextElementSibling.classList.toggle('expand-list');
    });
})

// ===================
//    MOBILE MENU    |
// ===================

const menuCloseIcon = document.querySelector(".menu__close-icon"),
menuOpenIcon = document.querySelector(".menu__open-icon"),
menu = document.querySelector(".menu");

menuOpenIcon.addEventListener('click', () => {
    menu.classList.add("show");
    menu.classList.add("mobile");
    menuOpenIcon.style.display = "none";
});

menuCloseIcon.addEventListener('click', () => {
    menu.classList.remove("show");
    menu.classList.remove("mobile");
    menuOpenIcon.style.display = "block";
});