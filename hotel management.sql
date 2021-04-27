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
    email varchar(40) primary key,
);

create table review(
	email varchar(40),
    room_review decimal(2,1),
    hotel_review decimal(2,1),
    suggestions varchar(200),
    foreign key(email) references customer(email),
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
	book_id varchar(10) primary key ,
    room_id varchar(4) not null,
    hotel_id varchar(5) not null,
    email varchar(40) not null,
    book_from date,
    book_to date,
    total_people decimal(3),
    foreign key (hotel_id,room_id) references room(hotel_id,room_id),
    foreign key (email) references customer(email)
);
create table payment(
	bill_no decimal(5) primary key,
    book_id varchar(10) not null,
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
    description varchar(200)
);

create table blogs(
    email varchar(40) not null,
    title varchar(20),
    img varchar(100),
    createdat date,
    foreign key (email) references customer(email)
)