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
const bodyList = document.querySelectorAll('.list__question-item__body');
const arrows = document.querySelectorAll('.fa-chevron-down');

list.forEach(question => {
    question.addEventListener('click', () => {
        bodyList.forEach(element => {
            element.classList.remove('expanded');
            element.classList.remove('expand-list');
            element.classList.add('closed');

            arrows.forEach(arrow => {
                arrow.classList.remove('rotate-arrow');
            })
        })
        
        const arrow = question.childNodes[3];

        if(arrow.classList.contains('rotate-arrow')){
            arrow.classList.remove('rotate-arrow');
            arrow.classList.add('rotate-arrow-reverse');

            question.nextElementSibling.classList.remove('expanded');
            question.nextElementSibling.classList.remove('expand-list');
            question.nextElementSibling.classList.add('closed');
        } else {
            arrow.classList.remove('rotate-arrow-reverse');
            arrow.classList.add('rotate-arrow');

            question.nextElementSibling.classList.add('expanded');
            question.nextElementSibling.classList.add('expand-list');
        }        
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