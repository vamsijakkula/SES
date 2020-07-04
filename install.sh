Step -1) In AWS SES Service . First Verify the E-mail Address 

Step-2) Create Roles for the Lambda Function to Execute. 

Roles would be 
A) AWS Lambda Full Access
B) CloudWatch Full Access
C) Amazon SES Full Access


Step-3) Create the Lamda Function 

Step-4) In Cloud Watch Create Rule- Select Schedule - Rate-1 Minutes

Select - Lambda Function  and configure the rule. 

Step-5) In Lambda Designer Select the Trigger - Event Bridge Cloud Watch Events





