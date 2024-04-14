import { IoHome } from 'react-icons/io5';
import routerPath from './routerPath';

interface IRouter {
  title: string;
  path: string;
  icon: () => React.ReactElement;
}

const router: IRouter[] = [
  {
    title: 'home',
    path: routerPath.HOME,
    icon: () => (
      <div className="home-wrapper">
        <div className="home-wrapper__main">
          <IoHome size={40} />
        </div>
      </div>
    ),
  },
];

export default router;
