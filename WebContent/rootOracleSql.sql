오라클 id, 비번, 권한 부여
SQL> create user root2016
  2  identified by root2016
  3  account unlock;

사용자가 생성되었습니다.

SQL> grant connect, resource to root2016
  2  ;

권한이 부여되었습니다.


select * from tab; 

create table TEST (
	no int,
	name varchar(10),
	del_YN varchar(1)
);
insert into test (no, name, del_yn)values(1,'홍길동','N');
insert into test (no, name, del_yn)values(2,'이순신','N');


SELECT NO as "no",
		   NAME as "name",
		   DEL_YN as "delYn"
		FROM TEST
