import joi from 'joi';

const optionsFormat = joi.object({
    transport: joi
        .any()
        .required()
        .description('a nodemailer transporter function'),
    fromAddress: joi
        .string()
        .email()
        .required()
        .description('address that all mail will be sent from'),
    env: joi
        .string()
        .valid(['development', 'local', 'production'])
        .default('production')
        .description('environment prevents outbound emails when not production')
});

export default optionsFormat;
