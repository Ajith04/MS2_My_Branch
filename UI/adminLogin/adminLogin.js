import {getAdmin, editAdmin} from '../api.js';

async function adminLogin() {

    const admin = await getAdmin();

// .......................................................................................................
// Admin Login Validation
    let loginButton = document.getElementById("loginButton");
      loginButton.onclick = async function(){

            
            let username = document.getElementById("username").value;
            let loginPassword = document.getElementById("loginPassword").value;

          if(await admin.find(e => e.username === username) && await admin.find(e => e.password === loginPassword)){
              window.location.href = "../adminDashboard/adminDashboard.html";
          }
          else{
            document.getElementById("error_message").innerText = "Please check your Username or Password!";
           
          }
      }


// .........................................................................................................
// Change Password
        let changePassword = document.getElementById("changePassword");
        changePassword.onclick = async function(){
            
        let oldPassword = document.getElementById("oldPassword").value;
        let newPassword = document.getElementById("newPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        

        if (newPassword === confirmPassword){
            if(await admin.find(e => e.password === oldPassword)){
                document.getElementById("changePasswordError").innerText = "";
                await editAdmin(newPassword);
                alert("Admin Password Successfully changed!");
                
            }
            else{
                document.getElementById("changePasswordError").innerText = "Type your old password correctly!";
            }
        }else{
            document.getElementById("changePasswordError").innerText = "Confirm password should match new password!";
            
        }
      }
  }
  
  adminLogin();

// ..............................................................
// showing Change Password Modal
  let label = document.getElementById("changePasswordLabel");
        label.onclick = function(){
        modal.style.display = "block";
  }

// ...............................................................
// Hiding change Password Modal Using Close Button
let modal = document.getElementById("modalContainer");
let close = document.getElementById("close");
close.onclick = function(){
    modal.style.display = "none";

}

// .............................................................
// Hiding change Password Modal Using Cancel Button
let cancel = document.getElementById("cancel");
cancel.onclick = function(){
    modal.style.display = "none";
}







