/*Function set score*/

create procedure contents.setScore (@id int, @score int)
	as
		update classes.courses_classes_students
			set student_score = student_score + @score
			where id_course_class_student = @id;


/*FUNCTION IN TIME*/


create function contents.inTime (@startDate as datetime, @id as int)
	returns int as
	begin
		declare @point int;
		declare @finishDate datetime;
		set @finishDate = (select	a.scheduled_date
							from	contents.courses_classes_activities_students as b
									join
									contents.courses_classes_activities as a
									on(a.id_activity = b.id_activity)
							where	@id = b.id_course_class_student);
		if (@startDate > @finishDate)
			set @point = -1;
		else
			set @point = +1;
		return @point;
	end;


/*TRIGGERED*/

/*Insert*/

create trigger contents.updateScore 
	on contents.courses_classes_activities_students
	after insert as
		begin
			declare
				@id_course_class_student int,
				@delivery_date datetime,
				@point int
		select @id_course_class_student = id_course_class_student, @delivery_date = delivery_date from inserted;
		set @point = contents.inTime(@delivery_date, @id_course_class_student);
		exec contents.setScore @id_course_class_student, @point
		end;

 /*Delete*/

 create trigger contents.updateScoreOnDelete 
	on contents.courses_classes_activities_students
	after delete as
		begin
			declare
				@id_course_class_student int,
				@delivery_date datetime,
				@point int
		select @id_course_class_student = id_course_class_student, @delivery_date = delivery_date from deleted;
		set @point = contents.inTime(@delivery_date, @id_course_class_student);
		exec contents.setScore @id_course_class_student, @point * -1
		end;

/*Update*/

create trigger contents.updateScoreOnUpdate 
	on contents.courses_classes_activities_students
	before update as
		begin
			declare
				@id_course_class_student int,
				@delivery_date datetime,
				@point int
		select @id_course_class_student = id_course_class_student, @delivery_date = delivery_date from deleted;
		set @point = (contents.inTime(@delivery_date, @id_course_class_student)*-1);
		exec contents.setScore @id_course_class_student, @point
		select @delivery_date = delivery_date from inserted 
		set @point = (contents.inTime(@delivery_date, @id_course_class_student));
		exec contents.setScore @id_course_class_student, @point
		end;

/*VIEW*/

create view tudo as 
	select	a.course as course,
			a.tutor as tutor,
			a.class as class,
			b.student as student,
			b.score as score,
			b.completed_activities as 'completed activities'
	from	(	select c.name as course, p.name as tutor, cl.name as class, cl.id_course_class as id
				from
					persons.users as p
					join
					courses.tutors as t
					on (p.id_user = t.id_user)
					join
					courses.courses as c
					on(c.id_course = t.id_course)
					join
					classes.courses_classes_tutors as clt
					on(clt.id_course_tutor = t.id_course_tutor)
					join
					classes.courses_classes as cl
					on(cl.id_course_class = clt.id_course_class)
			) as a
	full outer join
			(	select p.name as student, cs.student_score as score, count(cas.delivery_date) as completed_activities, cl.id_course_class as id
				from	
					persons.users as p
					join
					classes.courses_classes_students as cs
					on(cs.id_user = p.id_user)
					join
					classes.courses_classes as cl
					on(cl.id_course_class = cs.id_course_class)
					join
					contents.courses_classes_activities_students as cas
					on(cs.id_course_class_student = cas.id_course_class_student)
				group by	p.name,
							cs.student_score,
							cl.id_course_class
			) as b
	on(a.id = b.id)