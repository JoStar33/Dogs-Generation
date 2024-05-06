import authHandler from './auth';
import coordinateHandler from './coordinate';

export const handlers = [...authHandler, ...coordinateHandler];
