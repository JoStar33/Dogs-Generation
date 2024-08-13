import { IoHome } from 'react-icons/io5';
import routerPath from './routerPath';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsFillPostcardFill } from 'react-icons/bs';
import React from 'react';
import { colors } from '@/styles/Theme';

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
    path: routerPath.MARKET,
    icon: () => (
      <div className="common-icon-wrapper">
        <IoStorefrontSharp fill={colors.white} size={40} />
        <span className="common-icon-wrapper__text">MARKET</span>
      </div>
    ),
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
    path: routerPath.CONTENTS,
    icon: () => (
      <div className="common-icon-wrapper">
        <BsFillPostcardFill fill={colors.white} size={40} />
        <span className="common-icon-wrapper__text">CONTENTS</span>
      </div>
    ),
  },
];

export default bottomTab;
