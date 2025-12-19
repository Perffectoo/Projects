
let first_a=document.querySelectorAll(".gap-8 a"); /* de list matnsa4*/
let hero=document.getElementById("hero-section");
let about=document.getElementById("about");
let portfolio=document.getElementById("portfolio");
let experience=document.getElementById("experience");
let testimonials=document.getElementById("testimonials");
let contact=document.getElementById("contact");

let myListOfNav=[hero,about,portfolio,experience,testimonials,contact]

for(let i=0;i<myListOfNav.length;i++){

myListOfNav[i].addEventListener("mouseenter",function(){
mouse_enter();
})

myListOfNav[i].addEventListener("mouseleave",function(){
mouse_leave();
})


function mouse_enter(){
        first_a[i].style.cssText=`
  text-decoration: underline;          
  text-decoration-color:#7463F3;
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;     
    `
}
function mouse_leave(){
        first_a[i].style.cssText=`
  text-decoration: none;  
    `
}
}





// let wholebody=document.html;
let change=document.getElementById("theme-toggle-button")
change.addEventListener("click",function(){
document.documentElement.classList.toggle("dark");
} )






// let Wholething=document.getElementById('portfolio-grid')


let allBtn=document.querySelector('[data-filter="all"]')
let webBtn=document.querySelector('[data-filter="web"]')  
let appBtn=document.querySelector('[data-filter="app"]')  
let designBtn=document.querySelector('[data-filter="design"]')
let ecommerceBtn=document.querySelector('[data-filter="ecommerce"]')


let web = Array.from(document.querySelectorAll('[data-category="web"]'));
let app = Array.from(document.querySelectorAll('[data-category="app"]'));
let design = Array.from(document.querySelectorAll('[data-category="design"]'));
let ecommerce = Array.from(document.querySelectorAll('[data-category="ecommerce"]'));

let bigList= [web,app,design,ecommerce]


allBtn.addEventListener("click" ,function(){
//   for(let i=0;i< bigList.length;i++){
//     bigList[i].web[i].app[i].style.cssText=`
//     display:none;
//     `
//   }

for(let i=0;i< bigList.length;i++){
    let current= bigList[i]
    for(let j=0;j< current.length;j++){
         current[j].style.cssText=`
     display:block;
    `}
}
})

webBtn.addEventListener("click", function(){
    for(let i=0;i<bigList.length;i++){
    let current= bigList[i];
        if(i===0){
        for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:block;
            `
        }
        }else{
            for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:none;
            `
        }
        }
    }
    })

    appBtn.addEventListener("click", function(){
    for(let i=0;i<bigList.length;i++){
    let current= bigList[i];
        if(i===1){
        for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:block;
            `
        }
        }else{
            for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:none;
            `
        }
        }
    }
    })

    designBtn.addEventListener("click", function(){
    for(let i=0;i<bigList.length;i++){
    let current= bigList[i];
        if(i===2){
        for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:block;
            `
        }
        }else{
            for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:none;
            `
        }
        }
    }
    })


    ecommerceBtn.addEventListener("click", function(){
    for(let i=0;i<bigList.length;i++){
    let current= bigList[i];
        if(i===3){
        for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:block;
            `
        }
        }else{
            for(let j=0;j<current.length;j++){
            current[j].style.cssText=`
                display:none;
            `
        }
        }
    }
    })






    let myupButton=document.getElementById("scroll-to-top")


hero.addEventListener("mouseleave",function(){
    myupButton.classList.remove("invisible","opacity-0")
})

hero.addEventListener("mouseenter",function(){
    myupButton.classList.add("invisible","opacity-0")
})


// myupButton.addEventListener("click",function(){
// let a=document.createElement("a")
// a.setAttribute("href","#herosection")
// myupButton.append(a);
// })


myupButton.addEventListener("click", function() {
    window.location.href = "#hero-section";
});









let box=document.getElementById('testimonials-carousel')
let nextBtn=document.getElementById('next-testimonial')
let prevBtn=document.getElementById('prev-testimonial')
let index=0;
let List_cards=document.querySelectorAll(".testimonial-card"); //list  ya 7oss

function showThreeCards(){
    for(let i=0;i<List_cards.length;i++){
        List_cards[i].style.display = "none";
    }

    //show 3 cards bs 
     for (let i = index; i < index + 3; i++) {
            List_cards[i].style.display = "block"; 
    }
}


showThreeCards();

nextBtn.addEventListener('click',function(){
index++;
if(index > List_cards.length-3){
    index=0;
}
    showThreeCards();

})


prevBtn.addEventListener('click',function(){
index--;

if(index <0){
    index= List_cards.length-3
}

    showThreeCards();

})


let closbtn=document.getElementById('close-settings')
let settingbar=document.getElementById('settings-sidebar')
let settingbtn=document.getElementById('settings-toggle')

let alexandriaFont=document.querySelector('[data-font="alexandria"]')
let tajawalFont=document.querySelector('[data-font="tajawal"]')
let cairoFont=document.querySelector('[data-font="cairo"]')




settingbtn.addEventListener('click',function(){
settingbar.classList.toggle('translate-x-full')
settingbtn.style.display('none')
})

closbtn.addEventListener('click',function(){
    settingbar.classList.add('translate-x-full')
})






alexandriaFont.addEventListener('click', function() {
    document.documentElement.style.fontFamily = "'Alexandria', sans-serif";
});

tajawalFont.addEventListener('click', function() {
    document.documentElement.style.fontFamily = "'Tajawal', sans-serif ";
});

cairoFont.addEventListener('click', function() {
    document.documentElement.style.fontFamily = "'Cairo', sans-serif ";
});