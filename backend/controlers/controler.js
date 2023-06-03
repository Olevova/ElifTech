const db = require('../db');
// const nodemailer = require("nodemailer");
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "EMAIL_ADDRESS",
//     pass: "EMAIL_PASSWORD",
//   },
// });

const getRestoranAndDish = async (req, res) => {
    console.log("hi");
    try {
        const dateRest = await db.query(
            'SELECT id, name, location FROM restaurants'
        );
        const dateDish = await db.query(
            'SELECT * FROM dishes'
        );

        res.json({ rest: dateRest.rows, dish: dateDish.rows });

    } catch (error) {
        console.log(error);
    }
};

// const sendEmail = async (req, res) => {
//     const object = req.body;
//     console.log(object);
//     console.log(
//     'user',"EMAIL_ADDRESS",
//     'pass', "EMAIL_PASSWORD",
//   );
//   // Налаштування даних для електронної пошти
//   const mailOptions = {
//     from: "SENDER_EMAIL", 
//     to: "EMAIL_ADDRESS", 
//     subject: "замовлення", 
//     text: JSON.stringify(object), 
//   };

//   // Відправка електронної пошти
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent successfully!", info.response);
//       res.status(200).send("Email sent successfully");
//     }
//   });
// };

module.exports = { getRestoranAndDish };
