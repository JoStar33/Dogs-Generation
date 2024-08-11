import authGetHandler from './get';
import authPostHandler from './post';

const authHandler = [...authGetHandler, ...authPostHandler];

export default authHandler;
