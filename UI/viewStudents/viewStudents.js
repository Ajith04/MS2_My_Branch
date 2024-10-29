import {getStudents} from '../api.js';


async function getAllStudents(){

    let allStudents = await getStudents();

    let reversed = allStudents.reverse();

    let tbody = document.getElementById("tbody");
    // ...........................................................................
    // Student Table
    // Creating table rows and table data using data from db.json/students
    reversed.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574"

        let idcell = document.createElement('td');
        idcell.style.padding = "20px";
        idcell.style.textAlign = "center";
        idcell.textContent = e.nicNo;
        row.appendChild(idcell);

        let fnamecell = document.createElement('td');
        fnamecell.style.padding = "20px";
        fnamecell.style.textAlign = "center";
        fnamecell.textContent = e.firstName;
        row.appendChild(fnamecell);

        let coursecell = document.createElement('td');
        coursecell.style.padding = "20px";
        coursecell.style.textAlign = "center";
        coursecell.textContent = e.courseName;
        row.appendChild(coursecell);

        let batchcell = document.createElement('td');
        batchcell.style.padding = "20px";
        batchcell.style.textAlign = "center";
        batchcell.textContent = e.batch;
        row.appendChild(batchcell);

        let dateofjoincell = document.createElement('td');
        dateofjoincell.style.padding = "20px";
        dateofjoincell.style.textAlign = "center";
        const date = new Date(e.date);
        let day = date.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        dateofjoincell.textContent = `${day}.${month}.${year}`;
        row.appendChild(dateofjoincell);

        let mobilecell = document.createElement('td');
        mobilecell.style.padding = "20px";
        mobilecell.style.textAlign = "center";
        mobilecell.innerHTML = `<a href="tel:${e.mobileNo}">${e.mobileNo}</a>`;
        row.appendChild(mobilecell);

        let emailcell = document.createElement('td');
        emailcell.style.padding = "20px";
        emailcell.style.textAlign = "center";
        emailcell.textContent = e.email;
        row.appendChild(emailcell);

        let addresscell = document.createElement('td');
        addresscell.style.padding = "20px";
        addresscell.style.textAlign = "center";
        addresscell.textContent = e.address;
        row.appendChild(addresscell);

        let intakeCell = document.createElement('td');
        intakeCell.style.padding = "20px";
        intakeCell.style.textAlign = "center";
        intakeCell.textContent = e.intake;
        row.appendChild(intakeCell);

        

        tbody.appendChild(row);

    
});
}

getAllStudents();


