import createEmailInterface from './email-interface';

export { default as makeSendEmail } from './send-email';
export { default as renderTemplate } from './render-template';
export { default as makeVerifyConnection } from './verify-connection';
export { default as makeHandleEmail } from './handle-email';
export default createEmailInterface;
