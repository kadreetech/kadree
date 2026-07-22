import sendgrid from "@sendgrid/mail";
import { emailTemplate } from './emailTemplate.ts'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const companyEmail = 'info@kadreetech.com'
    // const companyEmail = 'daniel@overlapweb.com'
    const { email, fullname, subject, message, phone } = req.body;
    await sendgrid.send({
      to: companyEmail, // Your email where you'll receive emails
      from: companyEmail, // your website email address here
      subject: `${subject}`,
      html: emailTemplate(email, fullname, subject, phone, message),
    });
  } catch (error) {

    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
