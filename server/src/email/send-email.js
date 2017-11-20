
const makeSendEmail = (transporter, from) => emailInfo =>
    transporter.sendMail({ ...emailInfo, from });


export default makeSendEmail;
