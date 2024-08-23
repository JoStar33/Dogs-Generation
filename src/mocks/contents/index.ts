import contentsGetHandler from '@/mocks/contents/contentsGetHandler';
import contentsPostHandler from '@/mocks/contents/contentsPostHandler';

const contentsHandler = [...contentsGetHandler, ...contentsPostHandler];

export default contentsHandler;
