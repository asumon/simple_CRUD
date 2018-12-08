create database mentors;

use mentors;


CREATE TABLE mentors (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR (100) NOT NULL,
    `last_name` VARCHAR (100) NOT NULL,
    `bday` varchar(50) NULL,
    `Type` VARCHAR (100) NOT NULL,
	`Slack_nickname` VARCHAR (250) NOT NULL,
	`Admission_date` date not NULL,
	`Status` VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
    );

insert into mentors (id, first_name, last_name, bday, Type, Slack_nickname, Admission_date, Status) values (1, 'Sohel' , 'Mahmud', '24/12/1988', 'Mentor','https://github.com/a-magdy','2018-06-17','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (2, 'Daniel' , 'Fernandes', '24/12/1988', 'Mentor','https://github.com/dpfernandes/','2018-06-1','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (3, 'Jacob' , 'Andresen', '24/12/1988', 'Mentor','https://github.com/jacobandresen','2018-06-7','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (4, 'Zaki' , 'Wasik', '24/12/1988', 'Mentor','https://github.com/zkwsk','2018-06-27','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (5, 'Ahammed' , 'Mahmud', '24/12/1988', 'Mentor','asumon','2018-06-22','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (6, 'Masiur' , 'Mahmud', '24/12/1988', 'Mentor','asumon','2018-06-11','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (7, 'Abed' , 'Mahmud', '24/12/1988', 'Mentor','asumon','2018-06-23','Active');
insert into mentors (id, first_name, last_name, bday, Type,Slack_nickname,Admission_date,Status) values (8, 'Karim' , 'Mahmud', '24/12/1988', 'Mentor','asumon','2018-06-04','Active');

show tables;
select * from mentors;