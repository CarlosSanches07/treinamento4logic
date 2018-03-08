-- 1

select count(distinct p.id) as logins, MONTH(p.login_date) as login_month
from dbo.logins as p
group by MONTH(p.login_date)
order by logins;

-- 2

select avg(p.id) as media, DAY(p.login_) as day
from (select TOP(30) logins.login_date as login_, dbo.logins.id as id
		from dbo.logins
		order by logins.login_date desc) as p
group by p.login_
order by media desc;

-- 3

select sum(d.length)
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