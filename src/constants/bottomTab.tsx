import { IoHome } from 'react-icons/io5';
import routerPath from './routerPath';
import React from 'react';

interface IBottomTabElement {
  priority: number;
  title: string;
  path: string;
  icon: () => React.ReactElement;
}

const bottomTab: IBottomTabElement[] = [
  {
    priority: 2,
    title: 'MARKETS',
    path: routerPath.HOME,
    icon: () => <IoHome size={40} />,
  },
  {
    priority: 1,
    title: 'HOME',
    path: routerPath.HOME,
    icon: () => (
      <div className="home-wrapper">
        <div className="home-wrapper__main">
          <IoHome size={40} />
        </div>
      </div>
    ),
  },
  {
    priority: 3,
    title: 'CONTENTS',
    path: routerPath.HOME,
    icon: () => <IoHome size={40} />,
  },
];

export default bottomTab;
