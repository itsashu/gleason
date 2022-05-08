-------------------------------ROLLBACK SCRIPT------------------------------------------------------------------
PRINT 'DELETING Users table';
IF OBJECT_ID (N'Users', N'U') IS NOT NULL 
	BEGIN
		USE GleasonDB
		PRINT 'Using GleasonDB';
		DROP TABLE Users;
	END
PRINT 'Users table no longer present';

GO

PRINT 'DELETING GleasonDB';
IF DB_ID('GleasonDB') IS NOT NULL
	BEGIN
		DROP DATABASE GleasonDB;
	END
PRINT 'GleasonDB no longer present';