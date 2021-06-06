const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'maheshshinde1191@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
    })
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'maheshshinde1191@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometimes soon.`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
    })
};

//  sendWelcomeEmail('mdshinde119@gmail.com', "mahesh");
// sgMail.send({
//     to: 'mdshinde119@gmail.com',
//     from: 'maheshshinde1191@gmail.com',
//     subject: 'This is my first creation',
//     text: 'I hope this one actually get to you'
// }).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
// })

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}