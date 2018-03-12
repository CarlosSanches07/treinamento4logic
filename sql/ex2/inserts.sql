/*Persons.uers_types*/

insert into persons.users_types(name) values  ('Tutor'),('Aluno');

/*Persons.users*/

insert into persons.users(name, id_user_type) values 	('Plebo' 	, '2'),
														('Maria' 	, '2'),
														('Jose'	 	, '2'),
														('Ori'	 	, '2'),
														('Olinda' 	, '2'),
														('Igor'	 	, '2'),
														('Amara' 	, '2'),
														('Sergio' 	, '2'),
														('Sonia' 	, '2'),
														('Romulo' 	, '2'),
														('Eduarda' 	, '2'),
														('Monica' 	, '2'),
														('Matheus' 	, '2'),
														('Rafael' 	, '2'),
														('Amanda' 	, '2'),
														('Osvaldo' 	, '2'),
														('Rioawe'	, '1'),
														('Pari'	 	, '1'),
														('Cleson'	, '1'),
														('Cleito'	, '1'),
														('Arroz' 	, '1'),
														('Eightão'	, '1'),
														('Frank'	, '1'),
														('Roberto'	, '1'),
														('Zé'		, '1'),
														('Menor'	, '1');

/*Courses.courses*/

insert into Courses.courses(name) values	('Terrorismo'),
											('Trafico'),
											('Roubo'),
											('Fraude');	

/*Classes.courses_classes*/

insert into Classes.courses_classes (name, id_course) values	/*Terrorismo*/
																('Introdução ao Kamikaze'	, '1'),	
																('Kamikaze 2'				, '1'),
																('Sabotagem'				, '1'),
																('Implosão'					, '1'),
																('Bombas'					, '1'),
																/*Trafico*/
																('Introdução à drogas'		, '2'),
																('Empreendedorismo'			, '2'),
																('Plantação'				, '2'),
																('Drogas 2'					, '2'),
																('Armamentos'				, '2'),
																/*Roubo*/
																('Introdução ao furto'		, '3'),
																('157 avançado'				, '3'),
																('Técnicas mão leve'		, '3'),
																('Intimidação'				, '3'),
																('Fuga'						, '3'),
																/*Fraude*/
																('Introdução ao blefe'		, '4'),
																('Labia 1'					, '4'),
																('Labia 2'					, '4'),
																('Falsificação'				, '4'),
																('Implatação de alibi'		, '4');


/*Class.courses_classes_students*/

insert into Classes.courses_classes_students (id_user, id_course_class) values	('1', '1'),
																				('2', '1'),
																				('3', '1'),
																				('4', '1'),
																				('11', '2'),
																				('12', '2'),
																				('13', '2'),
																				('14', '2'),
																				('15', '3'),
																				('16', '3'),
																				('17', '3'),
																				('18', '3'),
																				('19', '4'),
																				('20', '4'),
																				('21', '4'),
																				('22', '4'),
																				('11', '1'),
																				('12', '1'),
																				('1', '2'),
																				('2', '2'),
																				('3', '3'),
																				('4', '3'),
																				('13', '4'),
																				('14', '4'),
																				('15', '1'),
																				('16', '1'),
																				('17', '2'),
																				('18', '2'),
																				('12', '3'),
																				('13', '3'),
																				('16', '4'),
																				('17', '4'),
																				('22', '1');

/*Courses.tutors*/

insert into Courses.tutors (id_course, id_user) values	('1'	,'5'),
														('1'	,'6'),
														('1'	,'7'),
														('2'	,'7'),
														('2'	,'8'),
														('2'	,'9'),
														('3'	,'10'),
														('3'	,'23'),
														('3'	,'24'),
														('4'	,'24'),
														('4'	,'25'),
														('4'	,'26');


/*Classes.courses_classes_tutors*/

insert into Classes.courses_classes_tutors(id_course_class, id_course_tutor) values ('1'	,'1'),
																					('2'	,'1'),
																					('3'	,'2'),
																					('4'	,'2'),
																					('5'	,'3'),
																					('6'	,'4'),
																					('7'	,'5'),
																					('8'	,'5'),
																					('9'	,'6'),
																					('10'	,'6'),
																					('11'	,'7'),
																					('12'	,'7'),
																					('13'	,'8'),
																					('14'	,'8'),
																					('15'	,'9'),
																					('16'	,'10'),
																					('17'	,'10'),
																					('18'	,'11'),
																					('19'	,'11'),
																					('20'	,'12');

/*Classes.courses_classes_contents*/

insert into Classes.courses_classes_contents(description, id_course_class)
	values	('Introdução à arte de matar pessoas enquanto comete suicídio'	,'1'),
			('Aperfeiçoamento da arte kamikaze, e introdução a divindades'	,'2'),
			('Treinamento preciso na arte de fazer coisas quebrarem'		,'3'),
			('Explodir por dentro é mais gostoso'							,'4'),
			('Tudo sobre explosivos'										,'5'),
			('Conhecimento prático de entorpecentes'						,'6'),
			('Como se tornar um rei do tráfico'								,'7'),
			('Colheita, Semeação, Qualidade de ervas, etc.'					,'8'),
			('Traficante não usa, vende, riscos em se viciar'				,'9'),
			('Armas, como armar o aviãozinho, pontaria, tipos de balas'		,'10'),
			('Técnicas, distrações, histórico'								,'11'),
			('Qual arma escolher, Onde Roubar, pontaria'					,'12'),
			('Stealth, corrida, velocidade'									,'13'),
			('Cara feia, Voz grossa, Mau cheiro'							,'14'),
			('Direção ofensiva, Direção defensiva, despitar'				,'15'),
			('Expressão, leitura corporal, mentiras'						,'16'),
			('Tonalidade de voz, vestes, o que falar'						,'17'),
			('Conhecendo os interesse, moldando uma ideia, manipulação'		,'18'),
			('Copia ou Autentico, assinaturas, engenharia social'			,'19'),
			('Influencia, Laranjas, Sósia'									,'20');

/*Contents.courses_classes_activities*/

insert into Contents.courses_classes_activities(id_course_class, description, scheduled_date)
	values	('1'	,'teste e sangue frio'	,'2020-07-08'),
			('5'	,'nitroglicerina'		,'2020-04-03'),
			('20'	,'Teste de laranja'		,'2020-05-05'),
			('13'	,'corrida na favela'	,'2020-02-01'),
			('10'	,'teste de mira'		,'2020-08-04'),
			('6'	,'socorros na overdose'	,'2020-06-29'),
			('12'	,'teste de headshot'	,'2020-09-02');

/*contents.courses_classes_activities_students*/

insert into contents.courses_classes_activities_students(id_activity, id_course_class_student, delivery_date)
		values 	('1'	,'16'	,'2020-07-09'),
				('2'	,'20'	,'2020-04-02'),
				('3'	,'34'	,'2020-05-06'),
				('4'	,'32'	,'2020-02-01'),
				('5'	,'28'	,'2020-08-03');

/*Entrega adiantada*/

select id_course_class_student
from	contents.courses_classes_activities as a 
		join
		contents.courses_classes_activities_students as b
		on (a.id_activity = b.id_activity)

where a.scheduled_date > b.delivery_date;

/*Dentro do prazo*/

select id_course_class_student
from	contents.courses_classes_activities as a
		join
		contents.courses_classes_activities_students as b
		on (a.id_activity = b.id_activity)

where a.scheduled_date >= b.delivery_date;

/*Atrasado*/

select id_course_class_student
from	contents.courses_classes_activities as a
		join
		contents.courses_classes_activities_students as b
		on (a.id_activity = b.id_activity)

where a.scheduled_date < b.delivery_date;


/*Add column student_score to table classes.courses_classes_students*/

alter table classes.courses_classes_students add student_score int not null  default(0);

/*Update the student score column*/

	/*Delivered out of time*/

update classes.courses_classes_students
	set student_score = -1
	from
		contents.courses_classes_activities as a
		join
		contents.courses_classes_activities_students as b
		on (a.id_activity = b.id_activity),
		classes.courses_classes_students as c
	where
		c.id_course_class_student = b.id_course_class_student
		and 
		a.scheduled_date > b.delivery_date;

	/*Delivered in time*/

update classes.courses_classes_students
	set student_score = 1
	from
		contents.courses_classes_activities as a
		join
		contents.courses_classes_activities_students as b
		on (a.id_activity = b.id_activity),
		classes.courses_classes_students as c
	where
		c.id_course_class_student = b.id_course_class_student
		and 
		a.scheduled_date <= b.delivery_date;