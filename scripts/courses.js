const courses = [
{
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming.',
    technology: ['Python'],
    completed: true
},
{
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web.',
    technology: ['HTML','CSS'],
    completed: true
},
{
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to write and debug functions.',
    technology: ['Python'],
    completed: true
},
{
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces classes and objects.',
    technology: ['C#'],
    completed: false
},
{
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students create dynamic websites using JavaScript.',
    technology: ['HTML','CSS','JavaScript'],
    completed: true
},
{
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students focus on accessibility and optimization.',
    technology: ['HTML','CSS','JavaScript'],
    completed: false
}
];

const allBtn=document.getElementById("all-courses");
const wddBtn=document.getElementById("wdd-courses");
const cseBtn=document.getElementById("cse-courses");
const courseContainer=document.getElementById("course-container");
const totalCredits=document.getElementById("total-credits");

function displayCourses(filter){

courseContainer.innerHTML="";

let creditsTotal=0;

courses.forEach(course=>{

const card=document.createElement("div");

card.classList.add("course-card");

if(course.completed){
card.style.backgroundColor="#f59e0b";
card.style.color="white";
}else{
card.style.backgroundColor="#e5e7eb";
card.style.color="black";
}

if(filter==="wdd"){

if(course.subject==="WDD" && course.completed){
card.style.backgroundColor="#f59e0b";
card.style.color="white";
}

if(course.subject!=="WDD" && course.completed){
card.style.backgroundColor="#e5e7eb";
card.style.color="black";}

}

if(filter==="cse"){

if(course.subject==="CSE" && course.completed){
card.style.backgroundColor="#f59e0b";
card.style.color="white";
}

if(course.subject!=="CSE" && course.completed){
card.style.backgroundColor="#e5e7eb";
card.style.color="black";}

}

card.innerHTML=`<div class="course-header">${course.subject} ${course.number}</div>`;

courseContainer.appendChild(card);

creditsTotal+=course.credits;

});

totalCredits.textContent=`The total Credits for courses listed above is: ${creditsTotal}`;

}

function setActive(type){

[allBtn,wddBtn,cseBtn].forEach(btn=>btn.classList.remove("active"));

if(type==="all")allBtn.classList.add("active");

if(type==="wdd")wddBtn.classList.add("active");

if(type==="cse")cseBtn.classList.add("active");

}

function setNavActive(){

const currentPage=window.location.pathname.split("/").pop();

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

const href=link.getAttribute("href");

link.classList.remove("active");

link.removeAttribute("aria-current");

if((currentPage===""||currentPage==="index.html")&&href==="index.html"){

link.classList.add("active");

link.setAttribute("aria-current","page");

}else if(href===currentPage){

link.classList.add("active");

link.setAttribute("aria-current","page");

}

});

}

allBtn.addEventListener("click",()=>{

displayCourses("all");

setActive("all");

});

wddBtn.addEventListener("click",()=>{

displayCourses("wdd");

setActive("wdd");

});

cseBtn.addEventListener("click",()=>{

displayCourses("cse");

setActive("cse");

});

displayCourses("all");

setActive("all");

document.addEventListener("DOMContentLoaded",()=>{

const hamburger=document.getElementById("hamburger");

const nav=document.querySelector("nav");

hamburger.addEventListener("click",(e)=>{

e.stopPropagation();

nav.classList.toggle("open");

if(nav.classList.contains("open")){

hamburger.textContent="✖";

hamburger.setAttribute("aria-expanded","true");

}else{

hamburger.textContent="☰";

hamburger.setAttribute("aria-expanded","false");

}

});

document.addEventListener("click",(e)=>{

if(!nav.contains(e.target)&&!hamburger.contains(e.target)){

nav.classList.remove("open");

hamburger.textContent="☰";

hamburger.setAttribute("aria-expanded","false");

}

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("open");

hamburger.textContent="☰";

hamburger.setAttribute("aria-expanded","false");

});

});

setNavActive();

const year=document.getElementById("currentyear");

if(year)year.textContent=new Date().getFullYear();

const lastMod=document.getElementById("lastModified");

if(lastMod)lastMod.textContent=document.lastModified;

})