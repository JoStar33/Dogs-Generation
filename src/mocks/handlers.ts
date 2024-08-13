import authHandler from './auth';
import coordinateHandler from './coordinate';
import marketHandler from './market';

export const handlers = [...authHandler, ...coordinateHandler, ...marketHandler];
