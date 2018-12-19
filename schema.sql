CREATE DATABASE guestbook_db;

USE guestbook_db;

CREATE TABLE guestbook(
ID int(10) auto_increment primary key,
name varchar(30),
 message varchar (255), 
 IsPrivate boolean not null default 0)