import {getCourses} from '../api.js';


async function getAllCourses(){

    let allCourses = await getCourses();

    let reversed = allCourses.reverse();

    let tbody = document.getElementById("tbody");

    // ...........................................................................
// Course Table
// Creating table rows and table data using data from db.json/courses
    reversed.forEach(e => {

        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574"

        let idcell = document.createElement('td');
        idcell.style.padding = "20px";
        idcell.style.textAlign = "center";
        idcell.textContent = e.courseId;
        row.appendChild(idcell);

        let coursenamecell = document.createElement('td');
        coursenamecell.style.padding = "20px";
        coursenamecell.style.textAlign = "center";
        coursenamecell.textContent = e.courseName;
        row.appendChild(coursenamecell);

        let courseImageCell = document.createElement('td');
        courseImageCell.style.padding = "20px";
        courseImageCell.style.textAlign = "center";
        courseImageCell.innerHTML = `<img src="data:image/jpg;base64,${e.courseImage}" height="80px">`;
        row.appendChild(courseImageCell);

        let durationcell = document.createElement('td');
        durationcell.style.padding = "20px";
        durationcell.style.textAlign = "center";
        durationcell.textContent = e.duration;
        row.appendChild(durationcell);        

        let feescell = document.createElement('td');
        feescell.style.padding = "20px";
        feescell.style.textAlign = "center";
        feescell.textContent = e.fee;
        row.appendChild(feescell);

        let instructorcell = document.createElement('td');
        instructorcell.style.padding = "20px";
        instructorcell.style.textAlign = "center";
        instructorcell.textContent = e.instructor;
        row.appendChild(instructorcell);
      

        tbody.appendChild(row);      

    
});

}

getAllCourses();


