import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "asz93@icloud.com",
      from: "asz93@icloud.com",
      subject: `New message from ${req.body.fullname}`,
      html: `<div><p>FULLNAME: ${req.body.fullname}</p><br/><p>EMAIL: ${req.body.email}</p><br/><p>MESSAGE : ${req.body.message}</p><br/><div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
