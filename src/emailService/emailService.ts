import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "smat6371@gmail.com",
    pass: "uauiahtmbphvyoyr",
  },
});

interface EmailParams {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const sendEmail = async ({
  to,
  subject,
  text,
  html,
}: EmailParams): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: "smat6371@gmail.com",
      to,
      subject,
      text,
      html,
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export { sendEmail };
