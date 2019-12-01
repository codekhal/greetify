const {remote} = require('electron');

function messenger(mail, no, details) {
    const mailOptions = {
      from: process.env.Email, // sender's mail address
      to: mail, // list of guests
      subject: "Greeting from Greetify", // Subject
      text: details // html body
    };
  
    let transport = remote.getGlobal("mail");
    transport.sendMail(mailOptions, function(error, info) {
      if (error) {
        alert("Something Went wrong!\n\n" + error);
        return false;
      } else {
        alert("email sent: " + info.response);
        return true;
      }
    });

    let message = remote.getGlobal("nexo");
  
    message.sendSms('greetify', "+91" + no, details, (err, responseData) => {
      if (err) {
        alert(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          alert("Message sent successfully.");
        } else {
          alert(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });
    alert('Message Send to Host!')
  }

  // Sample Message to be sent: messenger('process.env.Email',PhoneNo,'Hello this is from greetify');
  