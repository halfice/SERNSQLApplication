--UPDATE Core.WorkflowInstances Set DAta=@data,
 --StepId=@stepid, StepNameCaption=@stepnamecaption, StepCaption=@stepcaption
 --where InstanceSID=@Id

DECLARE @cnt INT = 0;

WHILE @cnt < 10000
BEGIN
   --PRINT 'Inside simulated FOR LOOP on TechOnTheNet.com';
   INSERT INTO [dbo].[Products] (NAME) VALUES('OIJIOJOIJ IA M INSERT')
   SET @cnt = @cnt + 1;
END;

--PRINT 'Done simulated FOR LOOP on TechOnTheNet.com';


