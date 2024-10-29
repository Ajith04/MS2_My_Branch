export async function getAdmin() {
    const response = await fetch('http://localhost:5064/api/Admin/get-admin');
    const data = await response.json();
    return data;
  }


  export async function editAdmin(newPassword){
    await fetch(`http://localhost:5064/api/Admin/edit-admin?newpassword=${newPassword}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'}
  })      
}

export async function addStudents(obj){
  await fetch('http://localhost:5064/api/Followup/add-followup',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"Name":obj.Name, "Mobile":obj.Mobile, "Course":obj.Course, "Date":obj.Date, "Email":obj.Email, "Address":obj.Address, "Description":obj.Description})
  })
  
}


export async function getStudentById(id) {
  const response = await fetch(`http://localhost:5064/api/Student/Get_Student_By_Id?NicNo=${id}`);
  const text = await response.text();
  if (!text) {
    return null; 
  }
  const data = JSON.parse(text);
  return data; 
}


export async function updateStudent(putId, obj) {
  await fetch(`http://localhost:5064/api/Student/Update_Student?NicNo=${putId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({firstName:obj.Fname, lastName:obj.Lname, mobileNo:obj.Mobile, email:obj.Email, address:obj.Address})
  });
}

export async function getStudents() {
  const response = await fetch('http://localhost:5064/api/Student/Get_All_Student');
  const data = await response.json();
  return data;
}


export async function removeSingleStudent(nicNo) {
  await fetch(`http://localhost:5064/api/Student/Delete_Student-By-Id?NicNo=${nicNo}`, {
  method:'DELETE'
  });
}

export async function addNewCourse(courseDetails){
  await fetch('http://localhost:5064/api/Course/Create_Course',{
    method:'POST',
    body: courseDetails
  })
}

export async function getCourses() {
  const response = await fetch('http://localhost:5064/api/Course/Get_All_Course');
  const data = await response.json();
  return data;
}

export async function addNewStudent(obj){
  await fetch('http://localhost:5064/api/Student/Create_Student',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({NicNo:obj.nicNo, FirstName:obj.firstName, LastName:obj.lastName, Date:obj.date, MobileNo:obj.mobileNo, Email:obj.email, Address:obj.address, Intake:obj.Intake})
  })
}

export async function getSingleCourse(courseId) {
  const response = await fetch(`http://localhost:5064/api/Course/Get_Course_By_Id?CourseId=${courseId}`);
  const text = await response.text();
  if(!text){
    return null;
  }
  const data = JSON.parse(text);
  return data;
}


export async function courseUpdate(courseId, obj) {
  await fetch(`http://localhost:5064/api/Course/Update_Course?CourseId=${courseId}`, {
    method: 'PATCH',
    body: obj
  });
}


export async function deleteSingleCourse(courseId) {
  await fetch(`http://localhost:5064/api/Course/Delete_Course_By_Id?CourseId=${courseId}`, {
  method:'DELETE'
  });
}

export async function getPayment(studentId) {
  const response = await fetch(`http://localhost:5064/api/Payment/get-all-payments-by-Id?studentId=${studentId}`);
  const text = await response.text();
  if(!text){
    return null;
  }
  const data = JSON.parse(text);
  return data;
  
}


export async function addModule(obj){
  await fetch('http://localhost:5064/api/IM/add-module',{
    method:'POST',
    body: obj
  })
  
}

export async function getAllModules() {
  const response = await fetch('http://localhost:5064/api/IM/get-modules');
  const data = await response.json();
  return data;
}


// export async function addExpense(obj){
//   await fetch('http://localhost:3000/expense',{
//     method:'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({"title":obj.title, "date":obj.date, "price":obj.price, "receipt":obj.receipt, "file":obj.mModuleFile, "description":obj.description})
//   })
  
// }


export async function changeRegFee(newReg){
  await fetch(`http://localhost:5064/api/IM/change-reg-fee?regFee=${newReg}`, {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},

})      
}



export async function addBatch(batch){
  await fetch(`http://localhost:5064/api/IM/add-new-batch?batch=${batch}`,{
    method:'POST',
    headers: {'Content-Type': 'application/json'},

  })
  
}

export async function getBatch() {
  const response = await fetch('http://localhost:5064/api/IM/get-all-batches');
  const data = await response.json();
  return data;
}


export async function getFollowup() {
  const response = await fetch('http://localhost:5064/api/Followup/get-all-followup');
  const data = await response.json();
  return data;
}

// export async function getExpense() {
//   const response = await fetch('http://localhost:3000/expense');
//   const data = await response.json();
//   return data;
// }

export async function getCourseIDFee(courseName) {
  const response = await fetch(`http://localhost:5064/api/Course/get-course-id-fee?courseName=${courseName}`);
  const data = await response.json();
  return data;
}

export async function createEnrollment(obj){
  await fetch('http://localhost:5064/api/Enrollment/add-new-enrollment',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"StudentId":obj.studentId, "CourseId":obj.courseId, "EnrollmentDate":obj.enrollDate, "Fee":obj.courseFee, "Batch":obj.batch})
  })
  
}


export async function getCourseBatch(studentId) {
  const response = await fetch(`http://localhost:5064/api/Enrollment/get-course-batch?studentId=${studentId}`);
  const data = await response.json();
  return data;
}

export async function addRegFee(obj){
  await fetch('http://localhost:5064/api/Enrollment/add-reg-fee',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"StudentId":obj.studentId, "RegistrationFee":obj.fee})
  })
  
}

export async function addStudentAccount(obj){
  await fetch('http://localhost:5064/api/Enrollment/add-student-account',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"StudentId":obj.studentId, "Password":obj.Password})
  })
  
}


export async function addPayment(obj){
  await fetch('http://localhost:5064/api/Payment/add-payment',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"StudentId":obj.studentId, "Fee":obj.payment, "Date":obj.date})
  })
  
}


export async function getDueAmount(studentId) {
  const response = await fetch(`http://localhost:5064/api/Payment/get-payment-details?studentId=${studentId}`);
  const data = await response.json();
  return data;
}

export async function updateDescription(obj){
  await fetch('http://localhost:5064/api/Followup/update-description', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ "Email":obj.email, "Description":obj.description })
})      
}

export async function getAllDue() {
  const response = await fetch('http://localhost:5064/api/Payment/get-all-due');
  const data = await response.json();
  return data;
}

export async function getDefaultRegFee() {
  const response = await fetch('http://localhost:5064/api/IM/get-reg-fee');
  const data = await response.json();
  return data;
}



















