------------------------------Database setup initial script---------------------------
IF DB_ID('GleasonDB') IS NULL
	BEGIN
		PRINT 'Creating GleasonDB Database';
		CREATE Database GleasonDB;
		PRINT 'GleasonDB created';
	END
ELSE 
	BEGIN
		PRINT 'GleasonDB already exist';
	END

GO

USE GleasonDB
PRINT 'Using GleasonDB';

GO

IF OBJECT_ID (N'Users', N'U') IS NULL 
	BEGIN
		PRINT 'creating new table: Users';
		CREATE TABLE Users (
			UserId int identity primary key,
			Username nvarchar(20) unique,
			UserPassword nvarchar(20),
			UserAddress nvarchar(20) null,
			Roles nvarchar(20) null,
			Actions nvarchar(20) null
		);
		PRINT 'Created new table: Users';
	END
ELSE
	BEGIN
		PRINT 'Users table already exists';	
	END

GO

PRINT 'Adding Dummy Data to Users Table with UserName: Demo, Password: demo';

INSERT INTO Users VALUES ('Demo', 'demo', 'Database', 'initial data', 'initial login');