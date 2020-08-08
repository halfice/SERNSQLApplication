--SELECT Data FROM CORE.WorkflowInstances WHERE InstanceSId=@id




--INSERT INTO [dbo].[Products] (NAME) VALUES('OIJIOJOIJ IA M INSERT')

DECLARE @cnt INT = 0;

WHILE @cnt < 1000000
BEGIN
   --PRINT 'Inside simulated FOR LOOP on TechOnTheNet.com';
   INSERT INTO [dbo].[Products] (NAME) VALUES('OIJIOJOIJ IA M INSERT')
   SET @cnt = @cnt + 1;
END;

--PRINT 'Done simulated FOR LOOP on TechOnTheNet.com';
