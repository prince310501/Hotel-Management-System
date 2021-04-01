
create table hotel(
hotel_id varchar(5) primary key,
hotel_name varchar(20),
hotel_adress varchar(100) unique);

create table customer(
	cust_id varchar(5) primary key,
    cust_name varchar(20),
    contact_info decimal(10),
    cust_adress varchar(80),
    email varchar(40),
    membership varchar(10)
);

create table review(
	cust_id varchar(5),
    room_review decimal(2,1),
    hotel_review decimal(2,1),
    suggestions varchar(200),
    foreign key(cust_id) references customer(cust_id),
    check (room_review >=0),
    check (room_review <=5),
	check (hotel_review >=0),
    check (hotel_review <=5)
);

create table room_type(
	type varchar(15) primary key,
	price decimal(7,2) not null,
    rating decimal(2,1),
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
	book_id varchar(10) primary key,
    room_id varchar(4) not null,
    hotel_id varchar(5) not null,
    cust_id varchar(5) not null,
    book_from date,
    book_to date,
    foreign key (hotel_id,room_id) references room(hotel_id,room_id),
    foreign key (cust_id) references customer(cust_id)
);
create table payment(
	bill_no decimal(5) primary key,
    cust_id varchar(5) not null,
    paid decimal(7,2),
    foreign key (cust_id) references customer(cust_id)
);
