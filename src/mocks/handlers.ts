import authHandler from '@/mocks/auth';
import contentsHandler from '@/mocks/contents';
import coordinateHandler from '@/mocks/coordinate';
import marketHandler from '@/mocks/market';

export const handlers = [...authHandler, ...coordinateHandler, ...marketHandler, ...contentsHandler];
