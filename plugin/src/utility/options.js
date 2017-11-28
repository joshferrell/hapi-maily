import joi from 'joi';
import R from 'ramda';

const optionsFormat = joi.object({
    transport: joi
        .func()
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

const validateOptions = joi.validate(R.__, optionsFormat);

export default validateOptions;
