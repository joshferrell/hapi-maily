import createHealthRoutes from './health.routes';

export { makeCheckSmtpStatus } from './health.service';
export * from './health.handler';
export default createHealthRoutes;
