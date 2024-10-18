import {getCourses} from '../api.js';


let topBarMenu = document.getElementById("topBarMenu");
let topBar = document.getElementById("topBar");
let offCanvas = document.getElementById("offCanvas");
let mainBody = document.getElementById("mainBody");

topBarMenu.onclick = function(){
    topBarMenu.style.display = "none";
    topBar.style.width = "80%";
    offCanvas.style.display = "block";
    mainBody.style.width = "80%";
}

let offMenu = document.getElementById("offMenu");

offMenu.onclick = function(){
    offCanvas.style.display = "none";
    topBar.style.width = "100%";
    mainBody.style.width = "100%";
    topBarMenu.style.display = "block";
}

// Showing all courses grid dynamically
let showCourseDiv = document.getElementById("showCourseDiv");

let allCourses = await getCourses();



allCourses.forEach(e => {
    let courseCard = document.createElement('div');
    courseCard.classList.add("courseCard");
    
    let courseHeading = document.createElement('span');
    courseHeading.classList.add("courseHeading");
    courseHeading.textContent = e.courseName;
    courseCard.appendChild(courseHeading);

    let courseImg = document.createElement('img');
    courseImg.classList.add("courseImg");
    courseImg.src = `data:image/jpg;base64,${e.courseImage}`;
    courseCard.appendChild(courseImg);

    let courseFee = document.createElement('span');
    courseFee.classList.add("courseFee");
    courseFee.textContent = `Rs: ${e.fee}.00`
    courseCard.appendChild(courseFee);

    let courseDuration = document.createElement('span');
    courseDuration.classList.add("courseDuration");
    courseDuration.innerHTML = `Duration: <span style="color:brown">${e.duration}</span>`;
    courseCard.appendChild(courseDuration);

    let courseInstructor = document.createElement('span');
    courseInstructor.classList.add("courseInstructor");
    courseInstructor.innerHTML = `By: <span style="color:green">${e.instructor}</span>`;
    courseCard.appendChild(courseInstructor);

    let btnContainer = document.createElement('div');
    btnContainer.classList.add("btnContainer");

    let viewBtn = document.createElement('button');
    viewBtn.classList.add("viewBtn");
    viewBtn.textContent = "See more"
    btnContainer.appendChild(viewBtn);

    let enrollBtn = document.createElement('button');
    enrollBtn.classList.add("enrollBtn");
    enrollBtn.textContent = "Enroll now"
    btnContainer.appendChild(enrollBtn);

    courseCard.appendChild(btnContainer)
    

    
    
    showCourseDiv.appendChild(courseCard);

});


let profileTab = document.getElementById("profileTab");
let courseTab = document.getElementById("courseTab");
let myProfileDiv = document.getElementById("myProfileDiv");


profileTab.onclick = function(event){
    event.preventDefault();
    showCourseDiv.style.display = "none";
    myProfileDiv.style.display = "grid";
}

courseTab.onclick = function(event){
    event.preventDefault();
    myProfileDiv.style.display = "none";
    showCourseDiv.style.display = "flex";
}

