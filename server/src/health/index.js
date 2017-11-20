import createHealthRoutes from './health.routes';

export { makeCheckStatus } from './health.service';
export * from './health.handler';
export default createHealthRoutes;
