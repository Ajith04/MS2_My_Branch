import {getFollowup} from '../api.js';


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
        mobileCell.textContent = e.mobile;
        row.appendChild(mobileCell);

        let courseCell = document.createElement('td');
        courseCell.style.padding = "20px";
        courseCell.style.textAlign = "center";
        courseCell.textContent = e.course;
        row.appendChild(courseCell);

        let dateCell = document.createElement('td');
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";
        dateCell.textContent = e.date;
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
        descriptionCell.textContent = e.description;
        row.appendChild(descriptionCell);

        

        

        tbody.appendChild(row);

    
});
}

getAllStudents();


