
const makeSendEmail = (transporter, fromAddress) => emailInfo =>
    transporter.sendMail({ ...emailInfo, fromAddress });

export default makeSendEmail;
