create database InternsData
Use Internsdata
GO
create table Interns 
(intern_id int identity(1,1)  primary key ,
intern_name varchar(30),
intern_age int ,
intern_university varchar(30) , 
intern_phonenumber bigint)

insert into Interns values
('Ankit Bhasin' , 20 ,'chitkara' , 7051492342),
('Somnath' , 22, 'chitkara' , 7082460949),
('Sourav', 19, 'chitkara' , 9315046707),
('HarshPreetSingh' , 21 , 'chitkara' , 8556924468),
('kunal' , 21 , 'chitkara' , 8556924468)