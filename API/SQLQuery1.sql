create database ITECH_DB;

use ITECH_DB;

create table Student(
NicNo nvarchar(50) primary key not null,
FirstName nvarchar(50) not null,
LastName nvarchar(50) not null,
CourseId nvarchar(50) ,
foreign key(CourseId)references Course(CourseId),
Batch nvarchar(20)not null,
Date date not null,
MobileNo nvarchar(20)not null,
Email nvarchar(30)not null,
Address nvarchar(60)not null,
RegFee decimal(20,2)not null,
AdditionalFee decimal(20,2)not null,
);

select * from Course

select * from Student

create table Courses(
CourseId nvarchar (10) primary key,
CourseName nvarchar (20),
CourseImage varbinary (max),
Duration nvarchar (20),
Fee int,
Instructor nvarchar (20),
Syllabus nvarchar (max)
);

