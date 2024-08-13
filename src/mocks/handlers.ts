import authHandler from './auth';
import coordinateHandler from './coordinate';
import markerHandler from './market';

export const handlers = [...authHandler, ...coordinateHandler, ...markerHandler];
