import {getFollowup, updateDescription} from '../api.js';


async function getAllStudents(){

    let allStudents = await getFollowup();

    let reversed = allStudents.reverse();

    let tbody = document.getElementById("tbody");
// ...........................................................................
// Student Table
// Creating table rows and table data using data from db.json/students
reversed.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574"

        let nameCell = document.createElement('td');
        nameCell.style.padding = "20px";
        nameCell.style.textAlign = "center";
        nameCell.textContent = e.name;
        row.appendChild(nameCell);

        let mobileCell = document.createElement('td');
        mobileCell.style.padding = "20px";
        mobileCell.style.textAlign = "center";
        mobileCell.style.color = "#C54D4D";
        mobileCell.style.fontWeight = "bolder";
        mobileCell.innerHTML = `<a href="tel:${e.mobile}">${e.mobile}</a>`;
        row.appendChild(mobileCell);

        let courseCell = document.createElement('td');
        courseCell.style.padding = "20px";
        courseCell.style.textAlign = "center";
        courseCell.textContent = e.course;
        row.appendChild(courseCell);

        let dateCell = document.createElement('td');
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";

        const date = new Date(e.date);
        const day = date.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        dateCell.textContent = `${day}.${month}.${year}`;
        row.appendChild(dateCell);

        let emailCell = document.createElement('td');
        emailCell.style.padding = "20px";
        emailCell.style.textAlign = "center";
        emailCell.textContent = e.email;
        row.appendChild(emailCell);

        let addressCell = document.createElement('td');
        addressCell.style.padding = "20px";
        addressCell.style.textAlign = "center";
        addressCell.textContent = e.address;
        row.appendChild(addressCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.style.padding = "20px";
        descriptionCell.style.textAlign = "center";
        let description = document.createElement('textarea');
        description.style.borderRadius = "10px"
        description.value = e.description;
        description.disabled = true;
        descriptionCell.appendChild(description);


        let container = document.createElement('div');
        container.style.display = "flex";
        container.style.justifyContent = "space-around";
        let editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.style.backgroundColor = "lightblue";
        editBtn.style.boxShadow = "1px 1px 5px black";
        editBtn.style.padding = "10px";
        editBtn.style.border = "none";
        editBtn.style.borderRadius = "10px";
        editBtn.style.width = "60px";
        editBtn.onclick = function(){
            description.disabled = false;
        }
        container.appendChild(editBtn);

        let updateBtn = document.createElement('button');
        updateBtn.innerText = "Save";
        updateBtn.style.backgroundColor = "orange";
        updateBtn.style.boxShadow = "1px 1px 5px black";
        updateBtn.style.padding = "10px";
        updateBtn.style.border = "none";
        updateBtn.style.borderRadius = "10px";
        updateBtn.style.width = "60px";
        updateBtn.onclick = function(){
            let changeDescription = {email:e.email, description:description.value};

            updateDescription(changeDescription);
            alert('Successfully changed');
        }
        container.appendChild(updateBtn);
        descriptionCell.appendChild(container);


        row.appendChild(descriptionCell);

        

        

        tbody.appendChild(row);

    
});
}

getAllStudents();


