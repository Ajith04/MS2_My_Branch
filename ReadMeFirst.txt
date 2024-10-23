1. FrontEnd is in UI folder - open that folder in VS Code.
2. If npm server is not installed in your computer, just install it using 'npm install json-server' command.
(you can use opened VS Code terminal to run that command)
3. Then 'run npm jsondata' command on that terminal.

4. BackEnd is in API folder => ITEC-API
5. Before open that a_zApi file, don't forget to execute the SQL command below in SSMS.

The SQL command.....
***************************************
create database ITECH_DB;

use ITECH_DB;

create table Students(
StudentId nvarchar (15) primary key,
FirstName nvarchar (20),
LastName nvarchar (20),
JoinDate date,
Mobile nvarchar (15),
Email nvarchar (20),
[Address] nvarchar (50)
);

create table Courses(
CourseId nvarchar (10) primary key,
CourseName nvarchar (20),
CourseImage varbinary (max),
Duration nvarchar (20),
Fee int,
Instructor nvarchar (20),
Syllabus nvarchar (max)
);

***************************************

finally change the server name as in your PC in the ConnectionString (Appsettings.json). Enjoy.

