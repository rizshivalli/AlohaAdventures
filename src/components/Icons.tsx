import Aloha from '@assets/icons/Aloha';
import BottomHome from '@assets/icons/BottomHome';
import BottomHomeSelected from '@assets/icons/BottomHomeSelected';
import BottomSurfing from '@assets/icons/BottomSurfing';
import BottomSurfingSelected from '@assets/icons/BottomSurfingSelected';
import BottomHula from '@assets/icons/BottomHula';
import BottomHulaSelected from '@assets/icons/BottomHulaSelected';
import BottomVolcano from '@assets/icons/BottomVolcano';
import BottomVolcanoSelected from '@assets/icons/BottomVolcanoSelected';

// icons
import RightArrow from '@assets/icons/RightArrow';

import {createElement} from 'react';

export const iconsKey = {
  Aloha: Aloha,
  BottomHome: BottomHome,
  BottomHomeSelected: BottomHomeSelected,
  BottomSurfing: BottomSurfing,
  BottomSurfingSelected: BottomSurfingSelected,
  BottomHula: BottomHula,
  BottomHulaSelected: BottomHulaSelected,
  BottomVulcano: BottomVolcano,
  BottomVulcanoSelected: BottomVolcanoSelected,

  // icons
  RightArrow: RightArrow,
};

export interface IconsProps {
  name: keyof typeof iconsKey;
  height?: number;
  width?: number;
  size?: number;
  color?: string;
  opacity?: number;
}

export const Icons: React.FC<IconsProps> = props => {
  const {name, height, width, size, color, opacity} = props;

  const setHeight = size ? size : height;
  const setWidth = size ? size : width;

  return createElement(iconsKey[name], {
    height: setHeight,
    width: setWidth,
    color,
    opacity,
  });
};

export default Icons;
