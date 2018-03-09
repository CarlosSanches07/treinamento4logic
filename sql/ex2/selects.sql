-- 1
select	distinct MONTH(p.login_date)  as login_month, count(distinct p.id_user) as logins
from dbo.logins as p
group by MONTH(p.login_date)
order by login_month;

-- 2
select avg(p.id) as media
from (	select distinct TOP(30) DAY(logins.login_date) as login_, count(dbo.logins.id) as id
		from dbo.logins	
		group by DAY(logins.login_date)
		order by login_ desc) as p;

-- 3
select sum(d.length) as 'espaço total'
from (select top(10) dbo.stored_files.length as length
		from dbo.stored_files
		order by length desc) as d;

-- 4
select s.name
from ( select count(s.id) as cnt, s.name as name 
	   from dbo.states as s join dbo.cities as c 
			on (s.id = c.id_state)
	   group by s.name) as s
where s.cnt > 100 OR s.cnt < 20;