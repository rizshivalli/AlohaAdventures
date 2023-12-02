import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';
const BottomVolcano = () => (
  <Svg width={24} height={24} fill="none">
    <Mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#001A1A"
        d="m1 18 6-8 4.5 6H19l-5-6.65-2.5 3.3L10.25 11 14 6l9 12H1Zm4-2h4l-2-2.675L5 16Z"
      />
    </G>
  </Svg>
);
export default BottomVolcano;
