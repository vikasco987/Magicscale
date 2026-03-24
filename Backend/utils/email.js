








// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ✅ Send OTP
// export const sendOTP = async (email, otp) => {
//   try {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP is: ${otp}`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('✅ OTP email sent:', info.response);
//     return info;
//   } catch (error) {
//     console.error('❌ Failed to send OTP:', error);
//     throw new Error('OTP sending failed via Nodemailer');
//   }
// };

// // ✅ Send Password Reset Email
// export const sendResetEmail = async (email, token) => {
//   try {
//     const resetLink = `http://localhost:5173/reset-password/${token}`;

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Password Reset Request',
//       html: `
//         <h3>Reset Your Password</h3>
//         <p>You requested to reset your password. Click the link below to proceed:</p>
//         <a href="${resetLink}" style="background:#4CAF50;color:#fff;padding:10px 15px;text-decoration:none;border-radius:5px;">Reset Password</a>
//         <p>This link will expire in 1 hour.</p>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('✅ Reset email sent:', info.response);
//     return info;
//   } catch (error) {
//     console.error('❌ Failed to send reset email:', error);
//     throw new Error('Password reset email sending failed');
//   }
// };












// utils/mailer.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send OTP
export const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`,
  };
  const info = await transporter.sendMail(mailOptions);
  console.log('✅ OTP email sent:', info.response);
  return info;
};

// ✅ Send Password Reset Email
export const sendResetEmail = async (email, token) => {
  const resetLink = `https://magicscale.in/reset-password/${token}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    html: `
      <h3>Reset Your Password</h3>
      <p>You requested to reset your password. Click below:</p>
      <a href="${resetLink}" style="background:#4CAF50;color:#fff;padding:10px 15px;text-decoration:none;border-radius:5px;">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
    `,
  };
  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Reset email sent:', info.response);
  return info;
};

// ✅ New: Send Payment Confirmation Email
export const sendPaymentEmails = async ({ name, email, plan, duration, amount, orderId }) => {
  const customerMessage = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: '🎉 Payment Successful - MagicScale',
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for your purchase of the <strong>${plan}</strong> plan.</p>
      <ul>
        <li><strong>Duration:</strong> ${duration} months</li>
        <li><strong>Amount:</strong> ₹${amount}</li>
        <li><strong>Order ID:</strong> ${orderId}</li>
      </ul>
      <p>We’ve started processing your request. Thank you!</p>
      <br/><p>— MagicScale Team</p>
    `,
  };

  const adminMessage = {
    from: process.env.EMAIL_USER,
    to: 'vikasvikas9095@gmail.com', // ✅ Change this to your actual admin email
    subject: `📢 New Purchase: ${name} | ${plan}`,
    html: `
      <h2>New Order Details</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Plan:</strong> ${plan}</li>
        <li><strong>Duration:</strong> ${duration} months</li>
        <li><strong>Amount:</strong> ₹${amount}</li>
        <li><strong>Order ID:</strong> ${orderId}</li>
      </ul>
    `,
  };

  const results = await Promise.all([
    transporter.sendMail(customerMessage),
    transporter.sendMail(adminMessage),
  ]);

  console.log("✅ Payment emails sent:", results.map(r => r.response));
  return results;
};
