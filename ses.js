var aws = require('aws-sdk');
var ses = new aws.SES({
   region: 'us-east-1'
});
exports.handler = function(event, context, callback) {
   var eParams = {
      Destination: {
         ToAddresses: ["krishnavamsi@gmail.com"]
      },
      Message: {
         Body: {
            Text: {
               Data: "this mail comes from aws lambda event scheduling"
            }
         },
         Subject: {
            Data: "Event scheduling from aws lambda"
         }
      },
      Source: "krishnavamsi@gmail.com"
   };
   console.log('===SENDING EMAIL===');
   var email = ses.sendEmail(eParams, function(err, data) {
      if (err) console.log(err);
      else {
         console.log("===EMAIL SENT===");
         console.log("EMAIL CODE END");
         console.log('EMAIL: ', email);
         context.succeed(event);
         callback(null, "email is send");
      }
   });
};
