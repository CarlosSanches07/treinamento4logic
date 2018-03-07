create database ex1;

	use ex1;

	exec ('create schema persons');

		create table persons.users_types 
			(
				id_user_type 	int 			primary key identity,
				name 			nvarchar(100)	not null,
				removed 		int				not null default(0)
			);

		create	table persons.users_logins
			(
				id_user_login	int				primary key identity,
				id_user 		int 			not null,
				date 			datetime		not null
			);

		create table persons.users 
			(
				id_user 		int 			primary key identity,
				name 			nvarchar(100)	not null,
				removed 		int 			not null default(0),
				id_user_type 	int 			not null
			);

		alter table persons.users add constraint fk_id_user_type 
			foreign key(id_user_type) references persons.users_types(id_user_type);

		alter table persons.users_logins add constraint fk_id_user
			foreign key(id_user) references persons.users(id_user);


	exec ('create schema courses');

		create table courses.courses
			( 
				id_course		int				primary key identity,
				name			nvarchar(100)	not null,
				removed			int				not null default(0)
			);

		create table courses.tutors 
			(
				id_course_tutor	int				primary key identity,
				id_course 		int				not null,
				id_user 		int				not null,
				removed			int 			not null default(0)
			);

		alter table courses.tutors add constraint fk_id_course
			foreign key(id_course) references courses.courses(id_course);

		alter table courses.tutors add constraint fk_id_course_tutor
			foreign key(id_course_tutor) references courses.tutors(id_course_tutor);


	
	exec ('create schema classes');

		create table classes.courses_classes_tutors 
			(
				id_course_classes_tutors  	int  primary key identity,
				id_course_class 			int  not null,
				id_course_tutor 			int  not null,
				removed 					int  not null default(0)
			);

		create table classes.courses_classes_students 
			(
				id_course_class_student		int  primary key identity,
				id_course_class 			int  not null,
				id_user 					int  not null,
				removed 					int  not null default(0)				
			);

		create table classes.courses_classes 
			(
				id_course_class 			int 			primary key identity,
				name						nvarchar(100)   not null,
				removed 					int  			not null default(0),
				id_course 					int 			not null
			);

		create table classes.courses_classes_schedule 
			(
				id_schedule 		int			primary key identity,
				id_course_class 	int			not null,
				date 				datetime	not null,
				date_finished 		datetime 	not null,
				removed 			int 		not null default(0)
			);

		create table classes.courses_classes_contents 
			(
				id_course_class_contents	int 			primary key identity,
				removed 					int  			not null default(0),
				description					nvarchar(MAX)	not null,
				id_course_class 			int 			not null
			);

		alter table classes.courses_classes_tutors add constraint fk_id_course_class_tutors
			foreign key(id_course_class) references classes.courses_classes(id_course_class);

		alter table classes.courses_classes_tutors add constraint fk_id_course_tutor_classes
			foreign key(id_course_tutor) references courses.tutors(id_course_tutor);

		alter table classes.courses_classes_students add constraint fk_id_user_classes
			foreign key(id_user) references persons.users(id_user);

		alter table classes.courses_classes_students add constraint fk_id_course_class_classes
			foreign key(id_course_class) references classes.courses_classes(id_course_class);

		alter table classes.courses_classes add constraint fk_id_course_classes
			foreign key(id_course) references courses.courses(id_course);

		alter table classes.courses_classes_schedule add constraint fk_id_course_class_schedule
			foreign key(id_course_class) references classes.courses_classes(id_course_class);

		alter table classes.courses_classes_contents add constraint fk_id_course_class_contents
			foreign key(id_course_class) references classes.courses_classes(id_course_class);


	exec ('create schema contents');

		create table contents.courses_classes_activities_students
			(
				id_activity_classes_students	int 		primary key identity,
				id_activity 					int 		not null,
				id_course_class_student			int 		not null, 
				removed							int 		not null default(0),
				delivery_date					datetime	not null
			);

		create table contents.courses_classes_activities 
			(
				id_activity 		int 			primary key identity,
				id_course_class 	int 			not null,
				removed 			int 			not null default(0),
				description 		nvarchar(max)	not null,
				scheduled_date		datetime		not null
			);

		create table contents.assessements_students 
			(
				id_assessement_student		int 			primary key identity,
				id_course_class 			int 			not null,
				id_assessement 				int 			not null,
				note						decimal(5,1)	not null,
				removed 					int 			not null default(0)
			);

		create table contents.courses_classes_assessements 
			(
				id_assessement 			int 			primary key identity,
				id_course_class 		int 			not null, 
				removed 				int 			not null default(0),
				scheduled_date 			datetime 		not null, 
				realization_date 		datetime,
				description 			nvarchar(max)	not null
			);

		alter table contents.courses_classes_activities_students add constraint fk_id_activity
			foreign key(id_activity) references contents.courses_classes_activities(id_activity);

		alter table contents.courses_classes_activities_students add constraint fk_id_course_class_student_activities
			foreign key(id_course_class_student) references classes.courses_classes_students(id_course_class_student);

		alter table contents.courses_classes_activities add constraint fk_id_course_class
			foreign key(id_course_class) references classes.courses_classes(id_course_class);

		alter table contents.assessements_students add constraint fk_id_course_class_student
			foreign key(id_course_class_student) references classes.courses_classes_students(id_course_class_student);

		alter table contents.assessements_students add constraint fk_id_assessement
			foreign key(id_assessement) references contents.courses_classes_assessements(id_assessement);

		alter table contents.courses_classes_assessements add constraint fk_id_course_class_contents_assessements
			foreign key(id_course_class) references classes.courses_classes(id_course_class);