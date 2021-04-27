create table hotel(
	hotel_id varchar(5) primary key,
	hotel_name varchar(20),
	rating decimal(2,1),
	total_rating decimal(5),
	hotel_adress varchar(100) unique,
    img varchar(100) ,
	check (rating <=5),
    check (rating >=0)
);

create table customer(
    cust_name varchar(20),
    contact_info decimal(10),
    cust_adress varchar(80),
    email varchar(40) primary key
);

create table review(
	book_id int unique,
    room_review decimal(2,1),
    hotel_review decimal(2,1),
    suggestions varchar(200),
    
    foreign key(book_id) references book(book_id),
    check (room_review >=0),
    check (room_review <=5),
	check (hotel_review >=0),
    check (hotel_review <=5)
);

create table room_type(
	type varchar(15) primary key,
	price decimal(7,2) not null,
    rating decimal(2,1),
    img varchar(100) ,
    total_rating decimal(5),
    ac decimal(1,0) not null,
    lunch decimal(1,0) not null,
    check (rating <=5),
    check (rating >=0)
);

create table room( 
	room_id varchar(4) not null,
    hotel_id varchar(5) not null,
    room_type varchar(15),
    primary key(room_id,hotel_id),
    foreign key (hotel_id) references hotel(hotel_id),
    foreign key (room_type) references room_type(type)
);

create table book(
	book_id int primary key auto_increment,
    room_id varchar(4) not null,
    hotel_id varchar(5) not null,
    email varchar(40) not null,
    book_from date,
    book_to date,
    total_people decimal(3),
    bookat datetime,
    foreign key (hotel_id,room_id) references room(hotel_id,room_id),
    foreign key (email) references customer(email)
);
create table payment(
	bill_no int primary key auto_increment,
    book_id int not null,
    amount decimal(7,2),
    foreign key (book_id) references book(book_id)
);

create table contactus(
    email varchar(40),
    name varchar(20),
    message varchar(500)
);

create table facilities(
    name varchar(20) primary key, 
    img varchar(100),
    timing varchar(20),
    description varchar(200),
    flaticon varchar(50),
    tab varchar(10)
);

create table blogs(
	id int primary key auto_increment,
    book_id int,
    title varchar(20),
    img varchar(100),
    createdat date,
    foreign key (book_id) references book(book_id)
);

create table users(
	email varchar(40) primary key,
    password varchar(10000)
);


insert into facilities values('swimming','swimming.jfif','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-swimming','tab1');
insert into facilities values('spa','swimming.jpg','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-massage','tab2');
insert into facilities values('gym','gym.jfif','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-bicycle','tab3');
insert into facilities values('bar','bar.jfif','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-cup','tab4');
insert into facilities values('pick up','pick.jpg','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-car','tab5');
insert into facilities values('restaurant','restaurant.jfif','7AM-9PM','swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming swimming ','flaticon-restaurant','tab6');

insert into customer values('cust1','9999888877','hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust1@gmail.com');
insert into customer values('cust2','9999888876','hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust2@gmail.com');
insert into customer values('cust3','9999888875','hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust3@gmail.com');
insert into customer values('cust4','9999888874','hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust4@gmail.com');
insert into customer values('cust5','9999888873','hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust5@gmail.com');
insert into customer values('cust6',99988,'hudh whdbwqhd  dhbqhd efehfbehf efefbe wfehfbewhf  ehfeefhbehf  fewf','cust9@gmail.com');

insert into room_type values('normal',1000,3,'room1.jpg',1,0,0);
insert into room_type values('master',2000,3,'room2.jfif',1,0,1);
insert into room_type values('delux',3000,3,'room3.jfif',1,1,0);
insert into room_type values('super delux',4000,3,'room4.jpg',1,1,1);

insert into hotel values(1,'hotel1',3,1,'hdvwhd ewdhew efewf ew  efewfed  e f efe ere r e','hotel1.jfif');
insert into hotel values(2,'hotel2',3,1,'hdvwhd ewdhew efewf ew  efewfed  e f efe ere r f','hotel2.jfif');
insert into hotel values(3,'hotel3',3,1,'hdvwhd ewdhew efewf ew  efewfed  e f efe ere r g','hotel3.jpg');
insert into hotel values(4,'hotel4',3,1,'hdvwhd ewdhew efewf ew  efewfed  e f efe ere r h','hotel4.jfif');

insert into room values(1,1,'normal');
insert into room values(2,1,'master');
insert into room values(3,1,'delux');
insert into room values(4,1,'super delux');
insert into room values(1,2,'normal');
insert into room values(2,2,'master');
insert into room values(3,2,'delux');
insert into room values(4,2,'super delux');
insert into room values(1,3,'normal');
insert into room values(2,3,'master');
insert into room values(3,3,'delux');
insert into room values(4,3,'super delux');
insert into room values(1,4,'normal');
insert into room values(2,4,'master');
insert into room values(3,4,'delux');
insert into room values(4,4,'super delux');

insert into contactus values('abc@gmail.com','abc','w efr34f  tg54 t45 t45 t');

insert into blogs(book_id,title,img,createdat) values(1,'caption1','blog1.jpg','2021-04-21');
insert into blogs(book_id,title,img,createdat) values(1,'caption2','blog2.jpg','2021-04-22');
insert into blogs(book_id,title,img,createdat) values(2,'caption3','blog3.jpg','2021-04-24');
insert into blogs(book_id,title,img,createdat) values(3,'caption4','blog4.jpg','2021-04-26');
insert into blogs(book_id,title,img,createdat) values(4,'caption5','blog5.jpg','2021-04-26');
insert into blogs(book_id,title,img,createdat) values(5,'caption6','blog6.jpg','2021-04-25');
insert into blogs(book_id,title,img,createdat) values(7,'caption7','blog7.jpg','2021-04-27');

insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(4,2,'custe@gmail.com','2021-04-21','2021-04-21',2,'2021-04-20 07:00:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(1,1,'custa@gmail.com','2021-04-23','2021-04-25',2,'2021-04-20 07:01:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(2,2,'custb@gmail.com','2021-04-26','2021-04-28',2,'2021-04-20 07:20:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(3,3,'custc@gmail.com','2021-04-26','2021-04-29',2,'2021-04-20 07:30:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(2,1,'custe@gmail.com','2021-04-23','2021-04-25',2,'2021-04-21 07:00:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(4,4,'custd@gmail.com','2021-04-26','2021-04-29',2,'2021-04-21 07:15:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(2,3,'custa@gmail.com','2021-04-27','2021-04-29',2,'2021-04-22 07:15:00');
insert into book(
    room_id ,
    hotel_id ,
    email ,
    book_from ,
    book_to ,
    total_people,bookat) values(4,4,'custb@gmail.com','2021-04-30','2021-05-02',2,'2021-04-25 07:15:00');
    
insert into payment(book_id,amount) values(1,8000);
insert into payment(book_id,amount) values(2,6000);
insert into payment(book_id,amount) values(3,12000);
insert into payment(book_id,amount) values(4,24000);
insert into payment(book_id,amount) values(5,12000);
insert into payment(book_id,amount) values(6,32000);
insert into payment(book_id,amount) values(7,12000);
insert into payment(book_id,amount) values(8,24000);

insert into review values(2,3,3,'The lunch was cold .Long lines for using facilities. None of the staff member graduated from mit');
insert into review values(3,3,3,'Awesome. Totally Enjoyed. One of the nicest hotel ever ever seen');
insert into review values(4,3,3,'Needs To Improve. ac is too warm. Good Facilities But Bad Services');
insert into review values(6,3,3,'Needs To Improve. ac is too cold. Good Services But Bad Facilities');
-- insert into review values(5,5,4,'hebwjfnewjf djf efef efewf fef efewf ef e ere fe  i');



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '#Psvnit123';
flush privileges;


-- SELECT c.cust_name,r.suggestions 
-- FROM review r 
-- JOIN book b ON r.book_id=b.book_id 
-- JOIN customer c ON b.email=c.email;

-- SELECT room_id FROM room WHERE room_id NOT IN (SELECT room_id FROM book WHERE book_from < '2021-04-05' AND book_to > '2021-04-02' and hotel_id = 1) AND room_type = 'master' and hotel_id = 1 ORDER BY room_id ASC LIMIT 1;

-- SELECT ((datediff('2021-04-05','2021-04-05')+1)*price)*(3) AS amount FROM room_type WHERE type = 'delux';

-- SELECT b.book_id,b.book_from,b.book_to,b.bookat,b.total_people,c.cust_name,c.email,h.hotel_id,h.hotel_name,h.hotel_adress,r.room_id,r.room_type,p.bill_no,p.amount FROM book b 
-- JOIN customer c ON b.email=c.email
-- JOIN payment p ON b.book_id=p.book_id
-- JOIN hotel h ON b.hotel_id=h.hotel_id
-- JOIN room r ON b.room_id=r.room_id AND b.hotel_id=r.hotel_id
-- WHERE b.book_id=2 AND b.email='cust2@gmail.com'

-- SELECT b.book_id,b.book_from,b.book_to,b.bookat,b.total_people,b.email,c.cust_name,h.hotel_id,h.hotel_name,h.hotel_adress,r.room_id,r.room_type,p.bill_no,p.amount FROM book b JOIN customer c ON b.email=c.email JOIN payment p ON b.book_id=p.book_id JOIN hotel h ON b.hotel_id=h.hotel_id JOIN room r ON b.room_id=r.room_id AND b.hotel_id=r.hotel_id WHERE b.email='cust7@gmail.com';
