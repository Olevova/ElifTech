import axios from 'axios';


export const getRestAndDish = async () => {
    axios.defaults.baseURL = 'http://localhost:5050';
    console.log("i am here");
    try {
        const response = await axios.get('/');
        const data = response.data;
        console.log(data, 'data');
        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const sendEmail = (object) => {
//   axios.post("/send-email", object)
//     .then((response) => {
//       console.log("Email sent successfully!");
//     })
//     .catch((error) => {
//       console.error("Error sending email:", error);
//     });
// };