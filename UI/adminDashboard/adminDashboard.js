import {addStudents, updateStudent, removeSingleStudent, addNewCourse, getSingleCourse, getCourses, addNewStudent, courseUpdate, deleteSingleCourse, getStudentById, getStudents, addPayment, getPayment, addModule, getAllModules, addExpense, changeRegFee, getRegFee, addBatch, getBatch, getExpense} from '../api.js';



let offCanvas = document.getElementById("offCanvas");
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById("menu2");
let studentManagement = document.getElementById("studentManagement");
let itec = document.getElementById("itec");
let topbar = document.getElementById("topbar");
let dashboard = document.getElementById("dashboard");
let courseManagement = document.getElementById("courseManagement");
let feeManagement = document.getElementById("feeManagement");
let instituteManagement = document.getElementById("instituteManagement");
let studyMaterials = document.getElementById("studyMaterials");



let tabDashboard = document.getElementById("tabDashboard");
let tabStudentManagement = document.getElementById("tabStudentManagement");
let tabCourseManagement = document.getElementById("tabCourseManagement");
let tabFeeManagement = document.getElementById("tabFeeManagement");
let tabInstituteManagement = document.getElementById("tabInstituteManagement");
let tabStudyMaterials = document.getElementById("tabStudyMaterials");

// ...................................................................................................
// Tab Navigation

// Dashboard
tabDashboard.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
    dashboard.style.display = "flex";

    tabDashboard.style.backgroundColor = "white";
    tabDashboard.style.color = "black";
    tabDashboard.style.borderRight = "none";

    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";

    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
}

// ........................................................................................
// Student Management
tabStudentManagement.onclick = function(){
    dashboard.style.display = "none";
    courseManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
    studentManagement.style.display = "flex"; 

    tabStudentManagement.style.backgroundColor = "white";
    tabStudentManagement.style.color = "black";
    tabStudentManagement.style.borderRight = "none";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }

// ..............................................................................................
// Course Management
tabCourseManagement.onclick = function(){
    dashboard.style.display = "none";
    studentManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
    courseManagement.style.display = "flex";

    tabCourseManagement.style.backgroundColor = "white";
    tabCourseManagement.style.color = "black";
    tabCourseManagement.style.borderRight = "none";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }

// .........................................................................................
// Fee Management
tabFeeManagement.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
    feeManagement.style.display = "flex";

    tabFeeManagement.style.backgroundColor = "white";
    tabFeeManagement.style.color = "black";
    tabFeeManagement.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }
    

// ............................................................................
//  Institute Management
tabInstituteManagement.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    feeManagement.style.display = "none";
    studyMaterials.style.display = "none";
    instituteManagement.style.display = "flex";

    tabInstituteManagement.style.backgroundColor = "white";
    tabInstituteManagement.style.color = "black";
    tabInstituteManagement.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }


// ...................................................................................
// Study materials
tabStudyMaterials.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "flex";

    tabStudyMaterials.style.backgroundColor = "white";
    tabStudyMaterials.style.color = "black";
    tabStudyMaterials.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";
    }

// ..............................................................................................
// Top bar menu - onclick
menu1.onclick = function(){
    offCanvas.style.display = "none";
    topbar.style.width = "100%";
    studentManagement.style.width = "100%";
    courseManagement.style.width = "100%";
    dashboard.style.width = "100%";
    feeManagement.style.width = "100%";
    instituteManagement.style.width = "100%";
    studyMaterials.style.width = "100%";
    menu2.style.display = "block";
    itec.innerText = "Information Technology Education Centre";

}

// .................................................................................................
// Off-canvas menu - onclick
menu2.onclick = function(){
    offCanvas.style.display = "block";
    tabDashboard.style.backgroundColor = "white";
    tabDashboard.style.color = "black";
    tabDashboard.style.borderRight = "none";
    topbar.style.width = "75%";
    topbar.style.position= "absolute";
    topbar.style.right = "0";
    studentManagement.style.width = "75%";
    courseManagement.style.width = "75%";
    feeManagement.style.width = "75%";
    instituteManagement.style.width = "75%";
    studyMaterials.style.width = "75%";
    dashboard.style.width = "75%";
    menu2.style.display = "none";
    itec.innerText = "ITEC";
    offCanvas.style.position = "absolute";
    offCanvas.style.top = "0";
}

// ...................................................................................................
// Showing Add Student Modal
let addStudent = document.getElementById("addStudent");

addStudent.onclick = function(){
    modalContainer.style.display = "block";
}


// let addStudentShortcut = document.getElementById("addStudentShortcut");
// addStudentShortcut.appendChild(addStudent);


let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let followup = document.getElementById("followup");
let register = document.getElementById("register");

// ......................................................
// Follow-up Tab
tab1.onclick = function(){
    followup.style.display = "block";
    register.style.display = "none"
    tab1.style.backgroundColor = "White"
    tab2.style.backgroundColor = "#80C574";
    tab1.style.color = "black";
    tab2.style.color = "white";
}


// ........................................................
// Register Tab
tab2.onclick = function(){
    followup.style.display = "none";
    register.style.display = "block";
    tab2.style.backgroundColor = "white";
    tab1.style.backgroundColor = "#D99340";
    tab2.style.color = "black";
    tab1.style.color = "white";
}

//.................................................................................
// Add Student Modal Close Button
let close = document.getElementById("close");
let modalContainer = document.getElementById("modalContainer");

close.onclick = function(){
    modalContainer.style.display = "none";
}

// ...............................................................................
// Follow-up Cancel Button
let followupCancel = document.getElementById("followupCancel");
let registerCancel = document.getElementById("registerCancel");

followupCancel.onclick = function(){
    modalContainer.style.display = "none";
}

// ................................................................................
// Register Cancel Button
registerCancel.onclick = function(){
    modalContainer.style.display = "none";
}

// .................................................................................
// Follow-up Add Button
document.getElementById("followup").addEventListener('submit', async function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;

    let studentobj = {Name:name, Mobile:mobile, Course:course, Date:date, Email:email, Address:address, Description:description};
    await addStudents(studentobj);
    event.target.reset();
    
    alert("Successfully added to follow-up list");
    
});

let allBatches = await getBatch();
let reversedBatch = allBatches.reverse();
reversedBatch.forEach(e => {
    let option = document.createElement('option');
    option.value = e.batchname;
    option.text = e.batchname;
    stuBatch.appendChild(option);
})

// stuBatch
// ......................................................................................
// Register Add Button

// let RegFee = await getRegFee();
// let sRegFee = await RegFee.find(e => e.nicNo === "1");
// let finalRegFee = sRegFee.regfee;

// let stuRegFee = document.getElementById("stuRegFee");
// stuRegFee.value = finalRegFee;



document.getElementById("register").addEventListener('submit', async function(event){
    event.preventDefault();

    let stuId = document.getElementById("stuId").value;
    // var singleStudent = await getStudentById(stuId);
    
    // if(singleStudent != null){
    //     alert("The Student ID is already exists");
    
    // }
    // else{
        
    let stuFName = document.getElementById("stuFName").value;
    let stuLName = document.getElementById("stuLName").value;
    let stuDate = document.getElementById("stuDate").value;
    let stuMobile = document.getElementById("stuMobile").value;
    let stuEmail = document.getElementById("stuEmail").value;
    let stuAddress = document.getElementById("stuAddress").value;  
   

    let studentObject = {nicNo:stuId, firstName:stuFName, lastName:stuLName, date:stuDate, mobileNo:stuMobile, email:stuEmail, address:stuAddress};

    
    await addNewStudent(studentObject);


    // let selectCourse = document.getElementById("selectCourse").value;
    // let stuBatch = document.getElementById("stuBatch").value;
    // let stuAddiFee = document.getElementById("stuAddiFee").value;

    alert("Successfully added as new student");

    let a = document.createElement('a');
    a.href = `mailto:${stuEmail}?subject=WelCome to ITEC&body=Hi ${stuFName}, Congratulations... %0A%0AYou just have registered in ITEC on ${stuDate} to follow the course ${selectCourse}. Please find the link below of our student portal. You can signup with your N.I.C No ${stuId} you used for your course registration. Thank you.%0A%0A%0A The Student portal link - https://www.itecstudentportal.com`;
    a.click();
    event.target.reset();
    // }
});

// ........................................................
// Showing Edit Student Modal
let editStudent = document.getElementById("editStudent");

editStudent.onclick = function(){
document.getElementById("editContainer").style.display = "block";
}

// ..........................................................
// Edit Student Modal Close Button
let editClose = document.getElementById("editClose");
editClose.onclick = function(){
    document.getElementById("editContainer").style.display = "none";
    
}

// .........................................................................
// Search Button in Edit Student
let search = document.getElementById("search");

search.onclick = async function(){
    let id = document.getElementById("searchId").value;
    const singleStudent = await getStudentById(id);

    if(singleStudent != null){
    errMessage.textContent = "";
    document.getElementById("editDynamic").style.display = "block";
    document.getElementById("seId").value = singleStudent.nicNo;
    document.getElementById("seFname").value = singleStudent.firstName;
    document.getElementById("seLname").value = singleStudent.lastName;
    document.getElementById("seCourse").value = '';
    document.getElementById("seBatch").value = '';
    document.getElementById("seMobile").value = singleStudent.mobileNo;
    document.getElementById("seEmail").value = singleStudent.email;
    document.getElementById("seAddress").value = singleStudent.address;
    }
    else{
        let errMessage = document.getElementById("errMessage");
        document.getElementById("editDynamic").style.display = "none";
        errMessage.textContent = "No such record";
        errMessage.style.color = "red";
        errMessage.style.textAlign = "center";
        errMessage.style.marginBottom = "20px";
        errMessage.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
   
}

// .........................................................................................
// Edit Button in Edit Student Modal
let studentEdit = document.getElementById("studentEdit");
studentEdit.onclick = function(){
seFname.disabled = false;
seLname.disabled = false;
seCourse.disabled = false;
seBatch.disabled = false;
seMobile.disabled = false;
seEmail.disabled = false;
seAddress.disabled = false;
};

// ..........................................................................................
// Update Student
document.getElementById("editDynamic").addEventListener('submit', async function(event){
    event.preventDefault();
    let putId = document.getElementById("searchId").value;
    let seFname = document.getElementById("seFname").value;
    let seLname = document.getElementById("seLname").value;
    let seMobile = document.getElementById("seMobile").value;
    let seEmail = document.getElementById("seEmail").value;
    let seAddress = document.getElementById("seAddress").value;

    const putStudents = {Fname:seFname, Lname:seLname, Mobile:seMobile, Email:seEmail, Address:seAddress};

    await updateStudent(putId, putStudents);
    event.target.reset();
    alert("Successfully updated");

});

// .......................................................................
// View all Students in a New Page
let viewStudent = document.getElementById("viewStudent");

viewStudent.onclick = function(){
    let a= document.createElement('a');
    a.href= '../viewStudents/viewStudents.html';
    a.target= '_blank';
    a.click();
}

// .......................................................................................................
// Showing Remove Student Modal
let removeStudent = document.getElementById("removeStudent");
let removeStudetModal = document.getElementById("removeStudetModal");
removeStudent.onclick = function(){
    removeStudetModal.style.display = "block";
}

// ........................................................................
// Remove Student Moadl Cloase Button
document.getElementById("removeClose").onclick = function(){
    removeStudetModal.style.display = "none";
}

// ..................................................................................
// Remove Student Modal Search Button
let removeDynamic = document.getElementById("removeDynamic");

document.getElementById("removeSearch").onclick = async function(){
    let removeSearchId = document.getElementById("removeSearchId").value;
    const singleStudent = await getStudentById(removeSearchId);

    if(singleStudent != null){
    removeError.textContent = "";
    removeDynamic.style.display = "flex";
    document.getElementById("removeId").innerText = singleStudent.nicNo;
    document.getElementById("removeName").innerText = singleStudent.firstName;
    document.getElementById("removeBatch").innerText = '';
    }
    else{
        removeDynamic.style.display = "none";
        let removeError = document.getElementById("removeError");
        removeError.textContent = "No such record";
        removeError.style.color = "White";
        removeError.style.textAlign = "center";
        removeError.style.marginBottom = "20px";
        removeError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
}

// .....................................................................
// Remove Student Modal Remove Button
document.getElementById("removeBtn").onclick = async function(){
    let removeSearchId = document.getElementById("removeSearchId").value;
    await removeSingleStudent(removeSearchId);
    removeDynamic.style.display = "none";
    alert("Successfully removed");

}

// ........................................................................
// Showing Add Course Modal
let addCourse = document.getElementById("addCourse");

addCourse.onclick = function(){
    let addCourseModal = document.getElementById("addCourseModal");
    addCourseModal.style.display = "block";
}

// let addCourseShortcut = document.getElementById("addCourseShortcut");
// addCourseShortcut.appendChild(addCourse);

let addCourseClose = document.getElementById("addCourseClose");
let addCourseCancel = document.getElementById("addCourseCancel");
let addCourseModal = document.getElementById("addCourseModal");

// ...................................................
// Add Course Modal Close Button
addCourseClose.onclick = function(){
    addCourseModal.style.display = "none";
}

// ..................................................
// Add Course Modal Cancel button
addCourseCancel.onclick = function(){
    addCourseModal.style.display = "none";
}

// ..................................................................................................
// Add Course Function
document.getElementById("addCourseForm").addEventListener('submit', async function(event){
    event.preventDefault();
    let courseList = await getCourses();
    let addCourseId = document.getElementById("addCourseId").value;

    if(await courseList.find(e => e.id === addCourseId)){
        alert("The course ID is already exists");
    }else{

    let addCourseName = document.getElementById("addCourseName").value;
    let addFile = document.getElementById("addFile").files[0];
    let addCourseDuration = document.getElementById("addCourseDuration").value;
    let addCourseFee = document.getElementById("addCourseFee").value;
    let addCourseInstructor = document.getElementById("addCourseInstructor").value;
    let addCourseSyllabus = document.getElementById("addCourseSyllabus").value;
    
    const courseDetails = new FormData();
    courseDetails.append('CourseId',addCourseId);
    courseDetails.append('CourseName',addCourseName);
    courseDetails.append('CourseImage',addFile);
    courseDetails.append('Duration',addCourseDuration);
    courseDetails.append('Fee',addCourseFee);
    courseDetails.append('Instructor',addCourseInstructor);
    courseDetails.append('Syllabus',addCourseSyllabus);


    await addNewCourse(courseDetails);
    event.target.reset();
    alert("Successfully added");
    }
});


// ......................................................................................
// Adding Courses to Listbox in Add Student Modal
const courseList = await getCourses();

let reversedCourseList = courseList.reverse();
let selectCourse = document.getElementById("selectCourse");

reversedCourseList.forEach(e => {
    let option = document.createElement('option');
    option.value = e.courseName;
    option.text = e.courseName;
    selectCourse.appendChild(option);
});


// ....................................................................................
// Showing Edit Course Modal
let editCourse = document.getElementById("editCourse");
editCourse.onclick = function(){
    let editCourseModal = document.getElementById("editCourseModal");
    editCourseModal.style.display = "block";
}


// ........................................................................
// Edit Course Modal Close Button
document.getElementById("editcourseModalClose").onclick = function(){
    let editCourseModal = document.getElementById("editCourseModal");
    editCourseModal.style.display = "none";
}

// ..................................................................................
// Edit Course Modal Search Button
document.getElementById("courseSearch").onclick = async function(){
    let searchCourseId = document.getElementById("searchCourseId").value;
    const singleCourse = await getSingleCourse(searchCourseId);
    

    if(singleCourse != null){
        courseError.innerText = "";
    
    let editCourseDynamic = document.getElementById("editCourseDynamic");
    editCourseDynamic.style.display = "block";
    document.getElementById("editCourseId").value = singleCourse.courseId;
    document.getElementById("editCourseName").value = singleCourse.courseName;
    document.getElementById("oldImage").innerHTML = `<img src="data:image/jpg;base64,${singleCourse.courseImage}" height="30px">`;
    document.getElementById("editDuration").value = singleCourse.duration;
    document.getElementById("editFee").value = singleCourse.fee;
    document.getElementById("editInstructor").value = singleCourse.instructor;
    document.getElementById("editSyllabus").value = singleCourse.syllabus;
    }
    else{
        editCourseDynamic.style.display = "none";
        let courseError = document.getElementById("courseError");
        courseError.innerText = "No such record";
        courseError.style.color = "red";
        courseError.style.textAlign = "center";
        courseError.style.marginBottom = "20px";
        courseError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
}


// ............................................................................
// Edit Course Modal Edit Button
document.getElementById("courseEditBtn").onclick = function(){
    editCourseName.disabled = false;
    editImage.disabled = false;
    editDuration.disabled = false;
    editFee.disabled = false;
    editInstructor.disabled = false;
    editSyllabus.disabled = false;
}


// .......................................................................................................
// Edit Course Modal Update Function
document.getElementById("editCourseDynamic").addEventListener('submit', async function(event){
    event.preventDefault();
    let searchCourseId = document.getElementById("searchCourseId").value;

    let editCourseName = document.getElementById("editCourseName").value;
    let editImage = document.getElementById("editImage").files[0];
    let editDuration = document.getElementById("editDuration").value
    let editFee = document.getElementById("editFee").value;
    let editInstructor = document.getElementById("editInstructor").value;
    let editSyllabus = document.getElementById("editSyllabus").value;

    let updateCourse = new FormData();
    updateCourse.append('CourseName', editCourseName);
    updateCourse.append('CourseImage', editImage);
    updateCourse.append('Duration', editDuration);
    updateCourse.append('Fee', editFee);
    updateCourse.append('Instructor', editInstructor);
    updateCourse.append('Syllabus', editSyllabus);

    await courseUpdate(searchCourseId, updateCourse);
    
    
    alert("Successfully updated");
    document.getElementById("searchCourseId").value = "";
    document.getElementById("oldImage").innerHTML = ``;
    event.target.reset();
});


// ......................................................................................
// Showing All Courses in a New Page
let viewCourse = document.getElementById("viewCourse");
viewCourse.onclick = function(){
    let a= document.createElement('a');
    a.href= '../viewCourses/viewCourses.html';
    a.target= '_blank';
    a.click();
}


// ...................................................................................
// Showing Remove Course Modal
let removeCourse = document.getElementById("removeCourse");
let removeCourseModal = document.getElementById("removeCourseModal");
removeCourse.onclick = function(){
    removeCourseModal.style.display = "block";
}

// ...................................................................................
// Remove Course Modal close Button
document.getElementById("removeCourseClose").onclick = function(){
    removeCourseModal.style.display = "none";
}


// ..................................................................................
// Remove Course Model Search button
let removeCourseSearch = document.getElementById("removeCourseSearch");
removeCourseSearch.onclick = async function(){
    let courseSearchId = document.getElementById("courseSearchId").value;
    var singleCourse = await getSingleCourse(courseSearchId);

    if(singleCourse != null){
        removeCourseError.innerText = "";
        document.getElementById("removeCourseDynamic").style.display = "flex";
        document.getElementById("cId").innerText = singleCourse.courseId;
        document.getElementById("cName").innerText = singleCourse.courseName;
        document.getElementById("cInstructor").innerText = singleCourse.instructor; 
    }else{
        document.getElementById("removeCourseDynamic").style.display = "none";
        let removeCourseError = document.getElementById("removeCourseError");
        removeCourseError.innerText = "No such record";
        removeCourseError.style.color = "white";
        removeCourseError.style.textAlign = "center";
        removeCourseError.style.marginBottom = "20px";
        removeCourseError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";

    } 
}

// .............................................................................................
// Remove Course Modal Remove Button
let deleteCourse = document.getElementById("deleteCourse");
deleteCourse.onclick = async function(){
    document.getElementById("removeCourseDynamic").style.display = "none";
    let courseSearchId = document.getElementById("courseSearchId").value;
    await deleteSingleCourse(courseSearchId);
    alert("Successfully deleted");
}

let addStudentShortcut = document.getElementById("addStudentShortcut");
let addCourseShortcut = document.getElementById("addCourseShortcut");
let addPaymentShortcut = document.getElementById("addPaymentShortcut");
let addExpenseShortcut = document.getElementById("addExpenseShortcut");

addStudentShortcut.onclick = function(){
    modalContainer.style.display = "block";
}

addCourseShortcut.onclick = function(){
    addCourseModal.style.display = "block";
}

async function displayLastStudents(){
    let allStudents = await getStudents();
    let reversedStudent = allStudents.reverse();
    let filteredStudents = await reversedStudent.slice(0, 5);
    
    let lastStudents = document.getElementById("lastStudents");

    filteredStudents.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574";
        row.style.color = "black";
        row.style.borderBottom = "1px solid black";
        row.style.borderRadius = "5px";
        
        
        

        let idCell = document.createElement('td');
        idCell.style.padding = "3px";
        idCell.textContent = e.nicNo;
        row.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.style.padding = "3px";
        nameCell.textContent = e.firstName;
        row.appendChild(nameCell);

        let courseCell = document.createElement('td');
        courseCell.style.padding = "3px";
        courseCell.textContent = e.courseId;
        row.appendChild(courseCell);

        let dateCell = document.createElement('td');
        dateCell.style.padding = "3px";
        dateCell.textContent = e.date;
        row.appendChild(dateCell);

        lastStudents.appendChild(row);


    })
}
displayLastStudents();



async function displayLastCourses(){
    let allCourses = await getCourses();
    let reversedCourses = allCourses.reverse();
    let filteredCourses = await reversedCourses.slice(0, 5);
    
    let lastCourses = document.getElementById("lastCourses");

    filteredCourses.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#D99340";
        row.style.color = "black";
        row.style.borderBottom = "1px solid black";
        
        

        let idCell = document.createElement('td');
        idCell.style.padding = "3px";
        idCell.textContent = e.courseId;
        row.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.style.padding = "3px";
        nameCell.textContent = e.courseName;
        row.appendChild(nameCell);

        let feeCell = document.createElement('td');
        feeCell.style.padding = "3px";
        feeCell.textContent = e.fee;
        row.appendChild(feeCell);

        let instructorCell = document.createElement('td');
        instructorCell.style.padding = "3px";
        instructorCell.textContent = e.instructor;
        row.appendChild(instructorCell);

        lastCourses.appendChild(row);


    })
}

displayLastCourses();


document.getElementById("paymentSearchBtn").onclick = async function(){
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    const paymentAllStudents = await getStudents();

    if (await paymentAllStudents.find(e => e.id === paymentSearchInput)){
        err.style.display = "none";
        historyErr.style.display = "none";
        let singleStudent = await paymentAllStudents.find(e => e.id === paymentSearchInput)
        let paymentCourseName = singleStudent.course;

        const allCourses = await getCourses();
        let singleCourse = await allCourses.find(e => e.courseName === paymentCourseName);
        let courseFee = singleCourse.fees;
        
        
        const allPayments = await getPayment();
        
        let oldPayments = 0;
        await allPayments.forEach(e => {
            if(e.id === paymentSearchInput){
                oldPayments += parseInt(e.fee);
            }
        });

        let payableAmount = courseFee - oldPayments;


        let payDiv = document.getElementById("payDiv");
        payDiv.style.display = "block";

        document.getElementById("idCell").textContent = singleStudent.id;
        document.getElementById("nameCell").textContent = singleStudent.firstname;
        document.getElementById("mobileCell").textContent = singleStudent.mobile;
        document.getElementById("payableCell").textContent = payableAmount;

        
    }else{
        historyErr.style.display = "none";
        payHistoryDiv.style.display = "none";
        payDiv.style.display = "none";
        let err = document.getElementById("err");
        err.style.display = "block";
        err.textContent = "The Student ID is not exists";
    }


}



document.getElementById("payDiv").addEventListener('submit', async function(event){
    event.preventDefault();
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    let singlePayment = document.getElementById("singlePayment").value;
    let paymentDate = document.getElementById("paymentDate").value;

    let paymentObj = {studentId:paymentSearchInput, studentDate:paymentDate, studentAddiFee:singlePayment};

    await addPayment(paymentObj);

    alert("Payment successfully added");
});

document.getElementById("reminderBtn").onclick = async function(event){
    event.preventDefault();
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    const paymentAllStudents = await getStudents();
    let singleStudent = await paymentAllStudents.find(e => e.id === paymentSearchInput);
    
    
    
    let a = document.createElement('a');
    a.href = `mailto:${singleStudent.email}?subject=Payment Reminder&body=Hi ${singleStudent.firstname}, %0A%0AThis is a kindly reminder, You have a payment due. Please pay the amount asap. %0A%0AThank you.`;
    a.click();
}

let paymentHistory = document.getElementById("paymentHistory");
paymentHistory.onclick = async function(event){
    event.preventDefault();
    let singleStudent = [];
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    let allPayments = await getPayment();

    if(await allPayments.find(e => e.id === paymentSearchInput)){
        let payHistoryDiv = document.getElementById("payHistoryDiv");
        payHistoryDiv.style.display = "block";
        
        let historyErr = document.getElementById("historyErr");
        historyErr.style.display = "none";
    await allPayments.forEach(e => {
        if(e.id === paymentSearchInput){
            singleStudent.push(e);           
        }
    });
    payHistory.innerHTML = "";
    singleStudent.forEach(e => {

        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574";

        let dateCell = document.createElement('td');
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";
        dateCell.style.color = "White";
        dateCell.textContent = e.date;
        row.appendChild(dateCell);

        let feeCell = document.createElement('td');
        feeCell.style.padding = "20px";
        feeCell.style.textAlign = "center";
        feeCell.style.color = "White";
        feeCell.textContent = e.fee;
        row.appendChild(feeCell);
        
        payHistory.appendChild(row);

    });
    

}else{
    payHistoryDiv.style.display = "none";
    historyErr.style.display = "block";
    historyErr.textContent = "No history";
    historyErr.style.color = "white";

}
}

addPaymentShortcut.onclick = function(){
    feeManagement.style.display = "flex";
    dashboard.style.display = "none";
    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "White";
    tabDashboard.style.borderRight = "1px solid black";
    tabFeeManagement.style.backgroundColor = "White";
    tabFeeManagement.style.color = "black";
    tabFeeManagement.style.borderRight = "none";
    

}

let addmoduleBtn = document.getElementById("addmoduleBtn");
addmoduleBtn.onclick = function(){
let addModuleModal = document.getElementById("addModuleModal");
addModuleModal.style.display = "block";
}

document.getElementById("moduleModalClose").onclick = function(){
    addModuleModal.style.display = "none";
}

document.getElementById("moduleModalCancel").onclick = function(){
    addModuleModal.style.display = "none";
}

async function ModuleCourses(){
let courseList = document.getElementById("courseList");
let allCourses = await getCourses();
let reversedallCourses = allCourses.reverse();

await reversedallCourses.forEach(e => {
    let courseOption = document.createElement('option');
    courseOption.value = e.courseName;
    courseOption.text = e.courseName;
    courseList.appendChild(courseOption);
})



}

ModuleCourses();


let batches = await getBatch();
let reversedBatches = batches.reverse();
reversedBatches.forEach(e => {
    let option = document.createElement('option');
    option.value = e.batchname;
    option.text = e.batchname;
    moduleBatch.appendChild(option);
})



document.getElementById("module").addEventListener('submit', async function(event){
    event.preventDefault();

let moduleTitle = document.getElementById("moduleTitle").value;
let courseList = document.getElementById("courseList").value;
let moduleBatch = document.getElementById("moduleBatch").value;
let moduleDate = document.getElementById("moduleDate").value;
let moduleFile = document.getElementById("moduleFile").value;
let ModuleDescription = document.getElementById("ModuleDescription").value;

let moduleObj = {mModuleTitle:moduleTitle, mCourseList:courseList, mModulebatch:moduleBatch, mModuleDate:moduleDate, mModuleFile:moduleFile, mModuleDescription:ModuleDescription};

await addModule(moduleObj);

alert("Successfully added");

})



async function getModules(){

    let allModules = await getAllModules();

    let reversedModules = await allModules.reverse();
    
    let moduleTBody = document.getElementById("moduleTBody");

    // ...........................................................................
// Module History Table
// Creating table rows and table data using data from db.json/modules
reversedModules.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574"

        let titleCell = document.createElement('td');
        titleCell.style.padding = "20px";
        titleCell.style.textAlign = "center";
        titleCell.style.border = "1px solid white";
        titleCell.textContent = e.title;
        row.appendChild(titleCell);


        let courseCell = document.createElement('td');
        courseCell.style.padding = "20px";
        courseCell.style.textAlign = "center";
        courseCell.style.border = "1px solid white";
        courseCell.textContent = e.course;
        row.appendChild(courseCell);

        let batchCell = document.createElement('td');
        batchCell.style.padding = "20px";
        batchCell.style.textAlign = "center";
        batchCell.style.border = "1px solid white";
        batchCell.textContent = e.batch;
        row.appendChild(batchCell);

        let dateCell = document.createElement('td');
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";
        dateCell.style.border = "1px solid white";
        dateCell.textContent = e.date;
        row.appendChild(dateCell);

        let fileCell = document.createElement('td');
        fileCell.style.padding = "20px";
        fileCell.style.textAlign = "center";
        fileCell.style.border = "1px solid white";
        fileCell.textContent = e.file;
        row.appendChild(fileCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.style.padding = "20px";
        descriptionCell.style.textAlign = "center";
        descriptionCell.style.border = "1px solid white";
        descriptionCell.textContent = e.description;
        row.appendChild(descriptionCell);
      

        moduleTBody.appendChild(row);

    
});
}

getModules();

let addExpenseModal = document.getElementById("addExpenseModal");
document.getElementById("addExpenseBtn").onclick = function(){
    addExpenseModal.style.display = "block";
}

document.getElementById("expenseModalClose").onclick = function(){
    addExpenseModal.style.display = "none";
}

document.getElementById("addExpenseShortcut").onclick = function(){
    addExpenseModal.style.display = "block";
}

document.getElementById("expenseCancelBtn").onclick = function(){
    addExpenseModal.style.display = "none";
}



document.getElementById("expenseForm").addEventListener('submit', async function(event){
event.preventDefault();
let eTitle = document.getElementById("eTitle").value;
let eDate = document.getElementById("eDate").value;
let ePrice = document.getElementById("ePrice").value;
let eReceipt = document.getElementById("eReceipt").value;
let eDescription = document.getElementById("eDescription").value;

let expenseObj = {title:eTitle, date:eDate, price:ePrice, receipt:eReceipt, description:eDescription};

await addExpense(expenseObj);
event.target.reset();

alert("Successfully added");

})

let changeRegModal = document.getElementById("changeRegModal");
document.getElementById("changeRegFee").onclick = function(){
    changeRegModal.style.display = "block";
}

document.getElementById("regClose").onclick = function(){
    changeRegModal.style.display = "none";
}

document.getElementById("regForm").addEventListener('submit', async function(event){
event.preventDefault();
let newReg = document.getElementById("newReg").value;
await changeRegFee(newReg);

event.target.reset();

alert("successfully changed");
})

let addBatchModal = document.getElementById("addBatchModal");
document.getElementById("addBatch").onclick = function(){
    addBatchModal.style.display = "block";
}

document.getElementById("batchModalCloseBtn").onclick = function(){
    addBatchModal.style.display = "none";
}

document.getElementById("addBatchForm").addEventListener('submit', async function(event){
event.preventDefault();

let batches = await getBatch();
let batchName = document.getElementById("batchName").value;
if(await batches.find(e => e.batchname === batchName)){
    let exists = document.getElementById("exists");
    exists.textContent = "Already exists";
    exists.style.color = "white";
    exists.style.textAlign = "center";
    exists.style.marginBottom = "10px";
}else{
exists.textContent = "";
let batchObj = {batch:batchName};
await addBatch(batchObj);
alert("Successfully added");

}
});

document.getElementById("followupBtn").onclick = function(){
    let a = document.createElement('a');
    a.href = "../followupList/followup.html";
    a.target= '_blank';
    a.click();
}

let imSelectCourse = await getCourses();
let reversedImCourses = imSelectCourse.reverse();
let imCourseList = document.getElementById("imCourseList");

reversedImCourses.forEach(e => {
    let imCourseOption = document.createElement('option');
    imCourseOption.value = e.courseName;
    imCourseOption.text = e.courseName;
    imCourseList.appendChild(imCourseOption);
    
})


let imSelectBatch = await getBatch();
let reversedImBatches = imSelectBatch.reverse();
let imBatchList = document.getElementById("imBatchList");

reversedImBatches.forEach(e => {
    let imBatchOption = document.createElement('option');
    imBatchOption.value = e.batchname;
    imBatchOption.text = e.batchname;
    imBatchList.appendChild(imBatchOption);
    
})

document.getElementById("searchByCourse").onclick = async function(){
    
    let courseAllStudents = await getStudents();
    let courseStudents = [];

    let imCourseList = document.getElementById("imCourseList").value;
    
if(await courseAllStudents.find(e => e.course === imCourseList)){
    await courseAllStudents.forEach(e => {
        if(e.course === imCourseList){
            courseStudents.push(e);
        }
    });
    let reversedCourseStudents = courseStudents.reverse();
    

    let byCourse = document.getElementById("byCourse");
    let byBatch = document.getElementById("byBatch");
    byBatch.style.display = "none";
    byCourse.style.display = "block";
    let errM = document.getElementById("errM");
    errM.style.display = "none";
    let courseOrBatch = document.getElementById("courseOrBatch");
    courseOrBatch.innerHTML = "";

    reversedCourseStudents.forEach(e => {
        let courseRow = document.createElement('tr');

        let cIdCell = document.createElement('td');
        cIdCell.textContent = e.id;
        cIdCell.style.padding = "20px";
        cIdCell.style.textAlign = "center";
        cIdCell.style.border = "1px solid white";
        courseRow.appendChild(cIdCell);

        let cnameCell = document.createElement('td');
        cnameCell.textContent = e.firstname;
        cnameCell.style.padding = "20px";
        cnameCell.style.textAlign = "center";
        cnameCell.style.border = "1px solid white";
        courseRow.appendChild(cnameCell);

        let cCourseCell = document.createElement('td');
        cCourseCell.textContent = e.course;
        cCourseCell.style.padding = "20px";
        cCourseCell.style.textAlign = "center";
        cCourseCell.style.border = "1px solid white";
        courseRow.appendChild(cCourseCell);

        let cBatchCell = document.createElement('td');
        cBatchCell.textContent = e.batch;
        cBatchCell.style.padding = "20px";
        cBatchCell.style.textAlign = "center";
        cBatchCell.style.border = "1px solid white";
        courseRow.appendChild(cBatchCell);

        let cDateCell = document.createElement('td');
        cDateCell.textContent = e.date;
        cDateCell.style.padding = "20px";
        cDateCell.style.textAlign = "center";
        cDateCell.style.border = "1px solid white";
        courseRow.appendChild(cDateCell);

        let cMobileCell = document.createElement('td');
        cMobileCell.textContent = e.mobile;
        cMobileCell.style.padding = "20px";
        cMobileCell.style.textAlign = "center";
        cMobileCell.style.border = "1px solid white";
        courseRow.appendChild(cMobileCell);
        
        courseOrBatch.appendChild(courseRow);


    })
}else{
    byBatch.style.display = "none";
    byCourse.style.display = "none";
    errM.style.display = "block";
    errM.innerText = "";
    errM.textContent = "No students for the selected course";
    courseOrBatch.style.textAlign = "center";
}
    
}


document.getElementById("searchByBatch").onclick = async function(){
    
    let batchAllStudents = await getStudents();
    let batchStudents = [];

    let imBatchList = document.getElementById("imBatchList").value;
    
if(await batchAllStudents.find(e => e.batch === imBatchList)){
    await batchAllStudents.forEach(e => {
        if(e.batch === imBatchList){
            batchStudents.push(e);
        }
    });
    let reversedBatchStudents = batchStudents.reverse();

    let byCourse = document.getElementById("byCourse");
    let byBatch = document.getElementById("byBatch");
    byCourse.style.display = "none";
    byBatch.style.display = "block";

    let errM = document.getElementById("errM");
    errM.style.display = "none";
    let batchOrCourse = document.getElementById("batchOrCourse");
    batchOrCourse.innerHTML = "";
    

    reversedBatchStudents.forEach(e => {
        let batchRow = document.createElement('tr');

        let idCell = document.createElement('td');
        idCell.textContent = e.id;
        idCell.style.padding = "20px";
        idCell.style.textAlign = "center";
        idCell.style.border = "1px solid white";
        batchRow.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.textContent = e.firstname;
        nameCell.style.padding = "20px";
        nameCell.style.textAlign = "center";
        nameCell.style.border = "1px solid white";
        batchRow.appendChild(nameCell);

        let courseCell = document.createElement('td');
        courseCell.textContent = e.course;
        courseCell.style.padding = "20px";
        courseCell.style.textAlign = "center";
        courseCell.style.border = "1px solid white";
        batchRow.appendChild(courseCell);

        let batchCell = document.createElement('td');
        batchCell.textContent = e.batch;
        batchCell.style.padding = "20px";
        batchCell.style.textAlign = "center";
        batchCell.style.border = "1px solid white";
        batchRow.appendChild(batchCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = e.date;
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";
        dateCell.style.border = "1px solid white";
        batchRow.appendChild(dateCell);

        let mobileCell = document.createElement('td');
        mobileCell.textContent = e.mobile;
        mobileCell.style.padding = "20px";
        mobileCell.style.textAlign = "center";
        mobileCell.style.border = "1px solid white";
        batchRow.appendChild(mobileCell);
        
        batchOrCourse.appendChild(batchRow);


    })
}else{
    byBatch.style.display = "none";
    byCourse.style.display = "none";
    errM.style.display = "block";
    errM.innerText = "";
    errM.textContent = "No students for the selected batch";
    errM.style.textAlign = "center";
}
    
}

document.getElementById("report").onclick = async function(){
    let reportModal = document.getElementById("reportModal");
    reportModal.style.display = "block";

    let totalRegFee = 0;
    let regFeeStudents = await getStudents();
    await regFeeStudents.forEach(e => {
        totalRegFee += parseInt(e.regfee);
    })

    let totalCourseFee = 0;
    let paymentStudents = await getPayment();
    await paymentStudents.forEach(e => {
        totalCourseFee += parseInt(e.fee);
    })

    let allExpenses = 0;
    let companyExpenses = await getExpense();
    await companyExpenses.forEach(e => {
        allExpenses += parseInt(e.price);
    })
    console.log(totalRegFee);
    console.log(totalCourseFee);
    console.log(allExpenses);

    let tBody = document.createElement('tbody');

    let reportRow = document.createElement('tr');
    reportRow.style.padding = "10px";
    reportRow.style.backgroundColor = "rgb(210, 105, 30)";
    reportRow.style.color = "white";

    let regFeeCell = document.createElement('td');
    regFeeCell.textContent = totalRegFee;
    regFeeCell.style.padding = "10px";
    regFeeCell.style.textAlign = "center";
    reportRow.appendChild(regFeeCell);

    let courseFeeCell = document.createElement('td');
    courseFeeCell.textContent = totalCourseFee;
    courseFeeCell.style.padding = "10px";
    courseFeeCell.style.textAlign = "center";
    reportRow.appendChild(courseFeeCell);

    let expenseCell = document.createElement('td');
    expenseCell.textContent = allExpenses;
    expenseCell.style.padding = "10px";
    expenseCell.style.textAlign = "center";
    reportRow.appendChild(expenseCell);

    tBody.appendChild(reportRow);
    
    let genReportTable = document.getElementById("genReportTable");
    genReportTable.appendChild(tBody);

    let message = document.getElementById("message");
    if(totalRegFee+totalCourseFee>allExpenses){
        message.textContent = `Profit : ${(totalRegFee+totalCourseFee)-allExpenses}`;
        message.style.padding = "10px";
        message.style.color = "rgb(0, 100, 0)";
        message.style.textAlign = "center";
        

    }else{
        message.textContent = `Lose : ${allExpenses-(totalRegFee+totalCourseFee)}`;
        message.style.padding = "10px";
        message.style.color = "#C54D4D"
        message.style.textAlign = "center"
    }

    

    

    // document.getElementById("reportTable").innerHTML = `<table>
    // <tr>
    // <th style="padding:5px;">Total Reg Fee</th>
    // <th style="padding:5px;">Total Course fee</th>
    // <th style="padding:5px;">Total Expense</th>
    // </tr>
    // <tr>
    // <td style="padding:5px;">${totalRegFee}</td>
    // <td style="padding:5px;">${totalCourseFee}</td>
    // <td style="padding:5px;">${allExpenses}</td>
    // <td></td>
    // </tr>
    // </table>`;


}

document.getElementById("reportClose").onclick = function(){
    reportModal.style.display = "none";
}