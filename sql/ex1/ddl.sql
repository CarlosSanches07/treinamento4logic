create database ex1;

	create schema persons;

		create table persons.users_types 
			(
				id_user_type 	int 			primary key,
				name 			nvarchar(100)	not null,
				removed 		int				not null default(0)
			);

		create	table persons.users_logins
			(
				id_user_login	int				primary key,
				id_user 		int 			not null,
				date 			datetime		not null
			);

		create table persons.users 
			(
				id_user 		int 			primary key,
				name 			nvarchar(100)	not null,
				removed 		int 			not null default(0),
				id_user_type 	int 			not null
			);

		alter table persons.users add constraint fk_id_user_type 
			foreign key(id_user_type) references persons.users_types(id_user_type);

		alter table persosn.users_logins add constraint fk_id_user
			foreign key(id_user) references persons.users(id_user);


	create schema courses;

		create table courses.courses
			( 
				id_course		int				primary key,
				name			nvarchar(100)	not null,
				removed			int				not null default(0)
			);